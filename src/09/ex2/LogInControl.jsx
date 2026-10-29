
import { useState } from "react";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import "./LogInControl.css";

function LogInControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => setIsLoggedIn(true);
    const logOutClickListener = () => setIsLoggedIn(false);

    // 기존 실습의 if / else 조건부 렌더링 유지
    let button;

    if (isLoggedIn) {
        button = (
            <LogOutButton onClick={logOutClickListener} />
        );
    } else {
        button = (
            <LogInButton onClick={logInClickListener} />
        );
    }

    return (
        <div className="cozy-login">
            <div className="cozy-shell">
                <header className="cozy-header">
                    <div className="cozy-logo" aria-label="Cozy Day">
            <span
                className="cozy-logo-symbol"
                aria-hidden="true"
            >
              ✳
            </span>
                        <span>
              cozy
              <span className="cozy-logo-accent">
                day.
              </span>
            </span>
                    </div>

                    <span className="cozy-chapter">
            REACT · CHAPTER 09
          </span>
                </header>

                <main className="cozy-main">
                    <section
                        className="cozy-intro"
                        aria-labelledby="cozy-title"
                    >
                        <div className="cozy-kicker">
              <span
                  className="cozy-kicker-dot"
                  aria-hidden="true"
              />
                            A LITTLE WARMTH IN YOUR DAY
                        </div>

                        <h1 id="cozy-title" className="cozy-title">
                            작은 인사로,
                            <br />
                            <span>포근한 하루를.</span>
                        </h1>

                        <p className="cozy-intro-text">
                            로그인 버튼 하나로 달라지는 작은 환영 공간.
                            <br />
                            React의 상태 관리와 조건부 렌더링을
                            연습해 보세요.
                        </p>

                        <div
                            className="cozy-tags"
                            aria-label="핵심 학습 내용"
                        >
                            <span>useState</span>
                            <span>props</span>
                            <span>if / else</span>
                        </div>
                    </section>

                    <section
                        className="cozy-card"
                        aria-labelledby="cozy-card-title"
                    >
                        <div className="cozy-card-top">
              <span className="cozy-card-label">
                YOUR LITTLE SPACE
              </span>

                            <span
                                className={`cozy-status ${
                                    isLoggedIn
                                        ? "cozy-status-active"
                                        : ""
                                }`}
                            >
                <span
                    className="cozy-status-dot"
                    aria-hidden="true"
                />
                                {isLoggedIn ? "MEMBER" : "GUEST"}
              </span>
                        </div>

                        {/* CSS로 표현한 캐릭터 */}
                        <div className="cozy-art" aria-hidden="true">
              <span className="cozy-art-star cozy-art-star-one">
                ✦
              </span>

                            <div className="cozy-face">
                                <span className="cozy-eye cozy-eye-left" />
                                <span className="cozy-eye cozy-eye-right" />
                                <span className="cozy-cheek cozy-cheek-left" />
                                <span className="cozy-cheek cozy-cheek-right" />
                                <span className="cozy-smile" />
                            </div>

                            <span className="cozy-art-star cozy-art-star-two">
                ✳
              </span>
                        </div>

                        {/* 로그인 상태에 따른 환영 인사 */}
                        <div
                            className="cozy-greeting"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {isLoggedIn ? (
                                <>
                                    <p className="cozy-greeting-label">
                                        WELCOME BACK!
                                    </p>
                                    <h2 id="cozy-card-title">
                                        다시 오셨네요! <span>☀</span>
                                    </h2>
                                    <p>
                                        로그인 상태입니다. 오늘도 따뜻한
                                        하루 보내세요.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="cozy-greeting-label">
                                        HELLO, FRIEND!
                                    </p>
                                    <h2 id="cozy-card-title">
                                        처음 오셨나요? <span>♡</span>
                                    </h2>
                                    <p>
                                        현재 게스트 상태입니다.
                                        버튼을 눌러 입장해 보세요.
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="cozy-actions">
                            {button}
                        </div>

                        <p className="cozy-caption">
                            * 실제 계정 인증이 아닌 React 상태 변경
                            실습입니다.
                        </p>
                    </section>
                </main>

                <footer className="cozy-footer">
                    <span>MADE WITH CARE ☺</span>
                    <span>CONDITIONAL RENDERING PRACTICE</span>
                </footer>
            </div>
        </div>
    );
}

export default LogInControl;
