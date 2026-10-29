
import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
import "./Greeting.css";

function Greeting({ isLoggedIn = false }) {
    return (
        <main className="greeting-page">
            <div className="greeting-shell">
                {/* 상단 로고 */}
                <header className="greeting-header">
                    <div className="greeting-brand">
            <span
                className="greeting-brand-symbol"
                aria-hidden="true"
            >
              ✳
            </span>
                        <span>
              hello
              <span className="greeting-brand-period">
                .
              </span>
            </span>
                    </div>

                    <span className="greeting-header-label">
            REACT / CHAPTER 09
          </span>
                </header>

                {/* 메인 인사말 카드 */}
                <section
                    className="greeting-card"
                    aria-label="조건부 렌더링 인사말"
                >
                    <div className="greeting-card-top">
            <span className="greeting-eyebrow">
              <span
                  className="greeting-live-dot"
                  aria-hidden="true"
              />
              INTERACTIVE GREETING
            </span>

                        <span
                            className={`greeting-status ${
                                isLoggedIn ? "is-member" : ""
                            }`}
                        >
              {isLoggedIn
                  ? "MEMBER MODE"
                  : "GUEST MODE"}
            </span>
                    </div>

                    <div className="greeting-card-body">
                        <div
                            className="greeting-copy"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {/* 핵심: 조건에 따라 컴포넌트 변경 */}
                            {isLoggedIn ? (
                                <UserGreeting />
                            ) : (
                                <GuestGreeting />
                            )}

                            <div
                                className="greeting-keywords"
                                aria-label="실습 핵심 개념"
                            >
                                <span>React</span>
                                <span>Props</span>
                                <span>Conditional UI</span>
                            </div>
                        </div>

                        {/* CSS로 구현한 일러스트 영역 */}
                        <div
                            className="greeting-visual"
                            aria-hidden="true"
                        >
                            <div className="greeting-visual-orbit" />

                            <div className="greeting-visual-circle">
                <span>
                  {isLoggedIn ? "HEY!" : "HI!"}
                </span>
                            </div>

                            <span className="greeting-visual-star star-one">
                ✳
              </span>

                            <span className="greeting-visual-star star-two">
                ✦
              </span>

                            <span className="greeting-visual-caption">
                GOOD VIBES ONLY — 2026
              </span>
                        </div>
                    </div>

                    <div className="greeting-card-bottom">
            <span>
              STATE / {isLoggedIn ? "TRUE" : "FALSE"}
            </span>

                        <span>
              DESIGNED TO SAY HELLO
              <span aria-hidden="true">↗</span>
            </span>
                    </div>
                </section>

                {/* 하단 설명 */}
                <footer className="greeting-footer">
                    <span>CONDITIONAL RENDERING EXAMPLE</span>
                    <span>MADE WITH REACT + CSS</span>
                </footer>
            </div>
        </main>
    );
}

export default Greeting;
