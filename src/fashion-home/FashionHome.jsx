import { useContext, useEffect } from 'react';
import ThemeContext from '../14/ThemeContext';
import { GUIDE_HASH, HOME_HASH, QUIZ_SECTION } from '../fit-finder/routes';
import cover from './images/fashion-cover.webp';
import tailoring from './images/tailoring.webp';
import layering from './images/layering.webp';
import burgundy from './images/burgundy.webp';
import './fashion-home.css';

const quizHref = `${HOME_HASH}?section=${QUIZ_SECTION}`;

const looks = [
    {
        title: '선이 살아있는 테일러링',
        category: 'TAILORING',
        image: tailoring,
        alt: '콘크리트 계단에서 블랙 블레이저와 와이드 팬츠를 입은 모델',
        tip: '각이 잡힌 재킷에는 폭이 넓은 팬츠를 매치해 상하의 볼륨을 맞춰 보세요.',
    },
    {
        title: '톤온톤으로 쌓는 레이어',
        category: 'SOFT LAYERS',
        image: layering,
        alt: '회색 니트와 아이보리 와이드 팬츠를 입은 모델',
        tip: '회색 니트와 아이보리 팬츠처럼 밝기가 다른 색을 겹치고, 소재의 질감으로 차이를 주세요.',
    },
    {
        title: '버건디 한 가지로 포인트',
        category: 'COLOUR ACCENT',
        image: burgundy,
        alt: '버건디 셔츠 재킷과 짙은 데님을 입은 모델',
        tip: '차분한 다크 데님 위에 버건디를 한 가지 더해도 코디의 분위기가 달라집니다.',
    },
];

export default function FashionHome({ section }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (section === '#lookbook') {
            const lookbook = document.getElementById('lookbook');
            lookbook.focus({ preventScroll: true });
            lookbook.scrollIntoView({ block: 'start' });
        } else if ((section === '' || section === '#home') && window.scrollY > 0) {
            window.scrollTo(0, 0);
        }
    }, [section]);

    return (
        <div className="fashion-home" id="home" data-theme={theme}>
            <header className="fashion-shell fashion-header">
                <a className="fashion-wordmark" href="#home" lang="en">FIT<span>.</span>FINDER</a>
                <nav className="fashion-nav" aria-label="메인 메뉴">
                    <a href="#lookbook" lang="en">Lookbook</a>
                    <a href={quizHref}>체형 진단</a>
                    <a href={GUIDE_HASH}>핏 가이드</a>
                </nav>
                <button
                    className="fashion-theme"
                    type="button"
                    aria-label="어두운 테마"
                    aria-pressed={theme === 'dark'}
                    onClick={toggleTheme}
                >
                    <span aria-hidden="true">{theme === 'dark' ? '☾' : '☀'}</span>
                </button>
            </header>

            <main className="fashion-shell">
                <section className="fashion-hero" aria-labelledby="fashion-title">
                    <img
                        className="fashion-cover"
                        src={cover}
                        alt="버건디 스튜디오에서 블랙 테일러드 재킷을 입고 앉은 모델"
                        fetchPriority="high"
                        width="1440"
                        height="960"
                    />
                    <div className="fashion-hero__content">
                        <h1 id="fashion-title" lang="en">Find your<br /><em>own fit.</em></h1>
                        <p>나에게 맞는 실루엣을 찾고,<br />옷장 속 옷으로 새로운 조합을 만들어 보세요.</p>
                        <div className="fashion-hero__actions">
                            <a className="fashion-cta" href={quizHref}>내 체형 진단하기</a>
                            <a className="fashion-hero__link" href="#lookbook">룩북 보기</a>
                        </div>
                    </div>
                </section>

                <section className="fashion-lookbook" id="lookbook" tabIndex={-1} aria-labelledby="lookbook-title">
                    <div className="fashion-section-heading">
                        <h2 id="lookbook-title" lang="en">The Lookbook</h2>
                        <p>재킷의 어깨선, 니트의 질감, 버건디 한 가지.<br />익숙한 옷에서 한 요소를 바꿔 보세요.</p>
                    </div>
                    <div className="fashion-looks">
                        {looks.map(({ title, category, image, alt, tip }) => (
                            <article className="fashion-look" key={category}>
                                <img src={image} alt={alt} loading="lazy" width="720" height="1080" />
                                <p className="fashion-look__category" lang="en">{category}</p>
                                <h3>{title}</h3>
                                <p className="fashion-look__tip">{tip}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="fashion-guide" aria-labelledby="fashion-guide-title">
                    <div>
                        <h2 id="fashion-guide-title">어떤 핏부터 입어볼까요?</h2>
                        <p>체형별로 어울리는 재킷, 상의, 하의의 실루엣을 찾아보세요.</p>
                    </div>
                    <a href={GUIDE_HASH}>체형별 핏 가이드</a>
                </section>
            </main>

            <footer className="fashion-shell fashion-footer">
                <a className="fashion-wordmark" href="#home" lang="en">FIT<span>.</span>FINDER</a>
                <a href="#home">맨 위로</a>
            </footer>
        </div>
    );
}
