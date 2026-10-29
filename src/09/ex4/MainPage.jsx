
import React, { useState } from "react";
import WarningBanner from "./WarningBanner";
import "./MainPage.css";

function MainPage() {
    // 경고 표시 상태 관리
    const [showWarning, setShowWarning] = useState(false);

    // 버튼 클릭 시 경고 표시 상태 변경
    const btnListener = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    };

    return (
        <div className="signal-page">
            <div className="signal-glow signal-glow-one" />
            <div className="signal-glow signal-glow-two" />

            <div className="signal-container">
                {/* 상단 로고 및 상태 */}
                <header className="signal-header">
                    <div className="signal-brand">
                        <div className="signal-logo">
                            <span className="signal-logo-symbol">S</span>
                        </div>

                        <div className="signal-brand-text">
                            <span className="signal-brand-name">SIGNAL</span>
                            <span className="signal-brand-subtitle">
                INTERACTIVE LAB
              </span>
                        </div>
                    </div>

                    <div className="signal-system-status">
                        <span className="signal-status-dot" />
                        SYSTEM ONLINE
                    </div>
                </header>

                {/* 메인 콘텐츠 */}
                <main className="signal-main">
                    <div className="signal-heading">
                        <div className="signal-eyebrow">
                            <span className="signal-eyebrow-line" />
                            REACT INTERACTION 001
                        </div>

                        <h1 className="signal-title">
                            Make some
                            <br />
                            <span className="signal-title-accent">
                noise.
              </span>
                        </h1>

                        <p className="signal-description">
                            버튼 하나로 바뀌는 인터랙티브 알림 시스템.
                            <br />
                            경고 메시지를 자유롭게 켜고 끌 수 있습니다.
                        </p>
                    </div>

                    {/* 메인 카드 */}
                    <section
                        className="signal-panel"
                        aria-labelledby="signal-panel-title"
                    >
                        <div className="signal-panel-header">
                            <div>
                                <p className="signal-panel-label">
                                    CONTROL CENTER
                                </p>
                                <h2
                                    className="signal-panel-title"
                                    id="signal-panel-title"
                                >
                                    알림 제어 센터
                                </h2>
                            </div>

                            <span
                                className={
                                    showWarning
                                        ? "signal-state-badge is-active"
                                        : "signal-state-badge"
                                }
                            >
                <span className="signal-state-dot" />
                                {showWarning ? "ACTIVE" : "STANDBY"}
              </span>
                        </div>

                        {/* 경고 표시 구역 */}
                        <div
                            className="signal-display"
                            id="warning-region"
                            aria-label="경고 메시지 표시 영역"
                        >
                            <WarningBanner warning={showWarning} />

                            {!showWarning && (
                                <div className="signal-empty-state">
                                    <div className="signal-empty-icon">
                                        <span>✓</span>
                                    </div>

                                    <h3>모든 시스템 정상</h3>

                                    <p>
                                        현재 활성화된 경고가 없습니다.
                                        <br />
                                        아래 버튼을 눌러 알림을 실행해 보세요.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* 상태 변경 버튼 */}
                        <button
                            type="button"
                            className={
                                showWarning
                                    ? "signal-action-button is-active"
                                    : "signal-action-button"
                            }
                            onClick={btnListener}
                            aria-expanded={showWarning}
                            aria-controls="warning-region"
                        >
              <span className="signal-button-icon">
                {showWarning ? "×" : "+"}
              </span>

                            <span className="signal-button-text">
                {showWarning ? "경고 감추기" : "경고 보이기"}
              </span>

                            <span
                                className="signal-button-arrow"
                                aria-hidden="true"
                            >
                →
              </span>
                        </button>

                        <div className="signal-panel-footer">
                            <span>INTERACTIVE DEMO</span>
                            <span>POWERED BY REACT</span>
                        </div>
                    </section>

                    {/* 하단 설명 */}
                    <div className="signal-info-grid">
                        <div className="signal-info-card">
                            <span className="signal-info-number">01</span>

                            <h3>STATE CONTROL</h3>

                            <p>
                                useState로 경고 표시 상태를 관리합니다.
                            </p>
                        </div>

                        <div className="signal-info-card">
                            <span className="signal-info-number">02</span>

                            <h3>REACTIVE UI</h3>

                            <p>
                                버튼 클릭에 따라 화면이 즉시 변경됩니다.
                            </p>
                        </div>

                        <div className="signal-info-card">
                            <span className="signal-info-number">03</span>

                            <h3>SMART ALERT</h3>

                            <p>
                                조건에 따라 경고 컴포넌트를 표시합니다.
                            </p>
                        </div>
                    </div>
                </main>

                {/* 하단 푸터 */}
                <footer className="signal-footer">
                    <span>© 2026 SIGNAL LAB</span>
                    <span>DESIGNED WITH REACT + CSS</span>
                </footer>
            </div>
        </div>
    );
}

export default MainPage;
