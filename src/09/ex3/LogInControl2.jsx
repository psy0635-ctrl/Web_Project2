
import { useState } from "react";
import LogInButton from "../ex2/LogInButton";
import LogOutButton from "../ex2/LogOutButton";
import "./LogInControl2.css";

// 로그인 상태에 따라 인사말을 변경하는 컴포넌트
function GreetingMessage({ isLoggedIn }) {
    return (
        <div
            className="nova-auth__message"
            aria-live="polite"
            aria-atomic="true"
        >
            <p className="nova-auth__eyebrow">
                {isLoggedIn
                    ? "WELCOME BACK"
                    : "YOUR SPACE AWAITS"}
            </p>

            <h2 id="nova-auth-heading">
                {isLoggedIn
                    ? "다시 만나 반가워요!"
                    : "오늘의 시작을 환영해요."}
            </h2>

            <p>
                {isLoggedIn
                    ? "로그인 상태로 전환되었습니다. 오늘도 멋진 하루 보내세요."
                    : "아래 버튼을 눌러 로그인 상태로 전환해 보세요."}
            </p>
        </div>
    );
}

function LogInControl2() {
    // 로그인 상태
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그인 버튼 클릭
    const logInClickListener = () => {
        setIsLoggedIn(true);
    };

    // 로그아웃 버튼 클릭
    const logOutClickListener = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="nova-auth">
            {/* 배경 장식 */}
            <div
                className="nova-auth__glow nova-auth__glow--one"
                aria-hidden="true"
            />
            <div
                className="nova-auth__glow nova-auth__glow--two"
                aria-hidden="true"
            />

            <div className="nova-auth__container">
                {/* 헤더 */}
                <header className="nova-auth__header">
                    <div className="nova-auth__brand">
            <span
                className="nova-auth__brand-icon"
                aria-hidden="true"
            >
              ✳
            </span>

                        <span>
              ORBIT
              <span className="nova-auth__brand-dot">
                .
              </span>
            </span>
                    </div>

                    <span className="nova-auth__chapter">
            REACT LAB / CHAPTER 09
          </span>
                </header>

                {/* 메인 화면 */}
                <main className="nova-auth__main">
                    <section
                        className="nova-auth__intro"
                        aria-label="실습 소개"
                    >
            <span className="nova-auth__pill">
              ✦ INTERACTIVE EXPERIENCE
            </span>

                        <h1>
                            반짝이는 순간,
                            <br />
                            <em>새로운 시작.</em>
                        </h1>

                        <p>
                            버튼 하나로 달라지는 나만의 화면.
                            <br />
                            React의 상태 관리와 조건부 렌더링을
                            체험해 보세요.
                        </p>

                        <div className="nova-auth__tags">
                            <span>useState</span>
                            <span>props</span>
                            <span>Conditional Rendering</span>
                        </div>
                    </section>

                    {/* 로그인 카드 */}
                    <section
                        className="nova-auth__card"
                        aria-labelledby="nova-auth-heading"
                    >
                        <div className="nova-auth__card-top">
              <span className="nova-auth__card-label">
                MEMBER ACCESS
              </span>

                            <span
                                className={`nova-auth__status ${
                                    isLoggedIn ? "is-online" : ""
                                }`}
                            >
                <span
                    className="nova-auth__status-dot"
                    aria-hidden="true"
                />

                                {isLoggedIn
                                    ? "SIGNED IN"
                                    : "GUEST MODE"}
              </span>
                        </div>

                        {/* 일러스트 */}
                        <div
                            className="nova-auth__art"
                            aria-hidden="true"
                        >
                            <div className="nova-auth__art-ring" />

                            <div className="nova-auth__art-core">
                                {isLoggedIn ? "✦" : "✳"}
                            </div>

                            <span className="nova-auth__art-star nova-auth__art-star--one">
                ✧
              </span>

                            <span className="nova-auth__art-star nova-auth__art-star--two">
                ✦
              </span>
                        </div>

                        {/* 상태별 인사말 */}
                        <GreetingMessage isLoggedIn={isLoggedIn} />

                        {/* 삼항 연산자를 이용한 버튼 변경 */}
                        <div className="nova-auth__controls">
                            {isLoggedIn ? (
                                <LogOutButton
                                    onClick={logOutClickListener}
                                />
                            ) : (
                                <LogInButton
                                    onClick={logInClickListener}
                                />
                            )}
                        </div>

                        <p className="nova-auth__note">
                            이 화면은 실제 인증이 아닌 상태 전환
                            실습입니다.
                        </p>
                    </section>
                </main>

                {/* 푸터 */}
                <footer className="nova-auth__footer">
                    <span>© 2026 ORBIT STUDIO</span>
                    <span>CRAFTED WITH REACT</span>
                </footer>
            </div>
        </div>
    );
}

export default LogInControl2;
