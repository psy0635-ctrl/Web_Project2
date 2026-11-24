import { useEffect, useRef, useState } from 'react';
import { bodyTypes } from './bodyTypes';
import { quizQuestions } from './quizQuestions';
import { BODY_TYPE_SECTION, guideCardLink, HOME_HASH } from './routes';

const heroVideo = 'https://assets.awwwards.com/awards/element/2026/03/69b867c9ea0b5478333127.mp4';

function getResult(answers) {
    const totals = Object.fromEntries(bodyTypes.map(({ id }) => [id, 0]));
    for (const answer of answers) {
        for (const [id, points] of Object.entries(answer)) {
            totals[id] += points;
        }
    }
    return bodyTypes.reduce((best, next) => totals[next.id] > totals[best.id] ? next : best);
}

function BodyTypeQuiz() {
    const [answers, setAnswers] = useState(null);
    const quizFocus = useRef(null);
    const hasInteracted = useRef(false);
    const questionIndex = answers?.length;
    const question = quizQuestions[questionIndex];

    useEffect(() => {
        if (hasInteracted.current) quizFocus.current?.focus({ preventScroll: true });
    }, [questionIndex]);

    function startQuiz() {
        hasInteracted.current = true;
        setAnswers([]);
    }

    function selectAnswer(scores) {
        setAnswers(previous => previous.length === questionIndex ? [...previous, scores] : previous);
    }

    let content;
    if (answers === null) {
        content = (
            <div className="quiz-intro">
                <p>BODY TYPE QUIZ</p>
                <h2>내 체형, 모르겠다면?</h2>
                <span>5가지 질문으로 30초 안에 체형을 진단하고<br />딱 맞는 핏을 바로 확인하세요.</span>
                <button type="button" className="quiz-btn-primary" ref={quizFocus} onClick={startQuiz}>
                    체형 진단 시작하기
                </button>
            </div>
        );
    } else if (question) {
        const current = questionIndex + 1;
        content = (
            <div>
                <div className="quiz-progress" aria-hidden="true">{current} / {quizQuestions.length}</div>
                <div
                    className="quiz-bar-wrap"
                    role="progressbar"
                    aria-label="퀴즈 진행률"
                    aria-valuemin={0}
                    aria-valuemax={quizQuestions.length}
                    aria-valuenow={current}
                >
                    <div className="quiz-bar-fill" style={{ width: `${current / quizQuestions.length * 100}%` }} />
                </div>
                <h2 className="quiz-question" ref={quizFocus} tabIndex={-1}>{question.question}</h2>
                <div className="quiz-choices" key={question.question}>
                    {question.choices.map(({ text, scores }) => (
                        <button type="button" className="quiz-choice-btn" key={text} onClick={() => selectAnswer(scores)}>
                            {text}
                        </button>
                    ))}
                </div>
            </div>
        );
    } else {
        const result = getResult(answers);
        content = (
            <div>
                <h2 className="quiz-result-label" ref={quizFocus} tabIndex={-1}>진단 결과</h2>
                <div className="quiz-result-inner">
                    <div className="quiz-result-img-wrap">
                        <img src={result.image} alt={`${result.name} 체형 이미지`} />
                    </div>
                    <div className="quiz-result-info">
                        <span>{result.number}</span>
                        <h3>{result.name}</h3>
                        <p>{result.description}</p>
                        <div className="fit-box quiz-fit-box">
                            <h4>추천 핏</h4>
                            <p>{result.recommended}</p>
                        </div>
                        <div className="quiz-result-btns">
                            <a href={guideCardLink(result.id)} className="quiz-btn-primary">Guide에서 자세히 보기</a>
                            <button type="button" className="quiz-btn-secondary" onClick={() => setAnswers(null)}>
                                다시 진단하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <section className="ff-quiz" aria-label="체형 진단">{content}</section>;
}

export default function HomePage() {
    return (
        <main className="ff-home">
            <section className="ff-hero" aria-labelledby="fit-finder-hero-title">
                <video autoPlay muted loop playsInline aria-hidden="true">
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="ff-hero-text">
                    <p>BODY TYPE · SILHOUETTE · FIT GUIDE</p>
                    <h2 id="fit-finder-hero-title">Find the fit<br />that fits you.</h2>
                    <span>체형을 선택하면 어울리는 실루엣과 피해야 할 핏을<br />한눈에 확인할 수 있습니다.</span>
                    <a href={`${HOME_HASH}?section=${BODY_TYPE_SECTION}`}>Start Guide →</a>
                </div>
            </section>

            <BodyTypeQuiz />

            <section className="ff-selector" id={BODY_TYPE_SECTION} tabIndex={-1} aria-labelledby="fit-finder-body-types">
                <div className="ff-title">
                    <p>SELECT YOUR BODY TYPE</p>
                    <h2 id="fit-finder-body-types">Choose your silhouette.</h2>
                    <span>체형을 선택하면 Guide 페이지로 이동합니다.</span>
                </div>
                <div className="ff-grid">
                    {bodyTypes.map(type => (
                        <a className="ff-body-card" href={guideCardLink(type.id)} key={type.id}>
                            <span>{type.number}</span>
                            <h3>{type.name}</h3>
                            <p>{type.homeDescription ?? type.description}</p>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
