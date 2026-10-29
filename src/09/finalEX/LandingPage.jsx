import { useState } from "react";
import Toolbar from "./Toolbar";
import CatImg from "./Cat.png";
import "./LandingPage.css";

function LandingPage() {
    // 로그인 상태를 저장합니다.
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => setIsLoggedIn(true);
    const logoutClick = () => setIsLoggedIn(false);

    return (
        <div className="landing-page">
            <div className="landing-shell">
                <Toolbar
                    isLoggedIn={isLoggedIn}
                    loginClick={loginClick}
                    logoutClick={logoutClick}
                />

                <main className="landing-hero">
                    <section className="landing-content">
                        <p className="landing-eyebrow">
              <span
                  className="landing-eyebrow-dot"
                  aria-hidden="true"
              />
                            CHAPTER 09 · REACT PRACTICE
                        </p>

                        <h1 className="landing-title">
                            조건에 따라,
                            <br />
                            <span>화면이 달라지는 순간.</span>
                        </h1>

                        <p className="landing-description">
                            9장 조건부 렌더링 실습 페이지입니다.
                            <br />
                            로그인 버튼을 누르면 환영 인사와 상태가 바뀝니다.
                        </p>

                        <div
                            className="landing-status-card"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <div className="landing-status-copy">
                <span className="landing-status-label">
                  현재 실습 상태
                </span>

                                <strong>
                                    {isLoggedIn
                                        ? "로그인되었습니다"
                                        : "로그인 전입니다"}
                                </strong>
                            </div>

                            <span
                                className={`landing-status-chip ${
                                    isLoggedIn ? "is-online" : ""
                                }`}
                            >
                <span
                    className="landing-chip-dot"
                    aria-hidden="true"
                />
                                {isLoggedIn ? "MEMBER" : "GUEST"}
              </span>
                        </div>

                        <p className="landing-hint">
                            <span aria-hidden="true">↗</span>
                            상단 버튼으로 상태를 변경해 보세요.
                            실제 계정 인증은 하지 않습니다.
                        </p>

                        <div
                            className="landing-keywords"
                            aria-label="실습 핵심 개념"
                        >
                            <span>useState</span>
                            <span>props</span>
                            <span>조건부 렌더링</span>
                        </div>
                    </section>

                    <section
                        className="landing-art"
                        aria-label="고양이 이미지 카드"
                    >
                        <div className="landing-art-header">
                            <span>HELLO, LITTLE FRIEND</span>
                            <span
                                className="landing-art-sparkle"
                                aria-hidden="true"
                            >
                ✳
              </span>
                        </div>

                        {/* 실제 Cat.png 표시 */}
                        <div className="landing-image-wrap">
                            <img
                                src={CatImg}
                                alt="고양이 이미지"
                                className="landing-cat-image"
                            />
                        </div>

                        <div className="landing-art-footer">
              <span className="landing-art-pill">
                ✦ A LITTLE JOY EVERY DAY
              </span>
                            <span>01 / 01</span>
                        </div>
                    </section>
                </main>

                <footer className="landing-footer">
                    <span>REACT · CHAPTER 09</span>
                    <span>Conditional Rendering Practice</span>
                </footer>
            </div>
        </div>
    );
}

export default LandingPage;