
import { useState } from "react";
import "./LogInControl2.css";

function Mailbox({ unreadMessages: initialMessages = [] }) {
    // 전달받은 배열을 복사하여 초기 상태로 사용
    const [unreadMessages, setUnreadMessages] = useState(
        () =>
            Array.isArray(initialMessages)
                ? [...initialMessages]
                : []
    );

    const unreadCount = unreadMessages.length;

    // 새 메시지 추가
    const addMessage = () => {
        setUnreadMessages((previous) => [
            ...previous,
            `새 메시지 ${previous.length + 1}`,
        ]);
    };

    // 모든 메시지 읽음 처리
    const readAllMessages = () => {
        setUnreadMessages([]);
    };

    return (
        <div className="nova-mail">
            {/* 배경 장식 */}
            <div
                className="nova-mail__glow nova-mail__glow--one"
                aria-hidden="true"
            />
            <div
                className="nova-mail__glow nova-mail__glow--two"
                aria-hidden="true"
            />

            <div className="nova-mail__container">
                {/* 헤더 */}
                <header className="nova-mail__header">
                    <div className="nova-mail__brand">
            <span
                className="nova-mail__brand-icon"
                aria-hidden="true"
            >
              ✳
            </span>

                        <span>
              ORBIT
              <span className="nova-mail__brand-dot">
                .
              </span>
            </span>
                    </div>

                    <span className="nova-mail__chapter">
            REACT LAB / MAILBOX
          </span>
                </header>

                {/* 메인 화면 */}
                <main className="nova-mail__main">
                    <section className="nova-mail__intro">
            <span className="nova-mail__pill">
              ✦ YOUR DIGITAL SPACE
            </span>

                        <h1>
                            Every message
                            <br />
                            <em>matters.</em>
                        </h1>

                        <p>
                            도착한 알림을 한눈에 확인하고
                            <br />
                            나만의 받은편지함을 관리해 보세요.
                        </p>

                        {/* 읽지 않은 메시지 수 */}
                        <div
                            className="nova-mail__stat"
                            aria-live="polite"
                        >
              <span className="nova-mail__stat-number">
                {unreadCount.toString().padStart(2, "0")}
              </span>

                            <span className="nova-mail__stat-label">
                UNREAD
                <br />
                MESSAGES
              </span>
                        </div>
                    </section>

                    {/* 메일함 카드 */}
                    <section
                        className="nova-mail__card"
                        aria-labelledby="nova-mail-title"
                    >
                        <div className="nova-mail__card-top">
              <span className="nova-mail__card-label">
                THE INBOX / 001
              </span>

                            <span
                                className="nova-mail__card-deco"
                                aria-hidden="true"
                            >
                ✦
              </span>
                        </div>

                        {/* CSS로 만드는 편지 일러스트 */}
                        <div
                            className="nova-mail__envelope"
                            aria-hidden="true"
                        >
                            <div className="nova-mail__envelope-shape">
                                <span>♥</span>
                            </div>

                            <span className="nova-mail__sparkle nova-mail__sparkle--one">
                ✦
              </span>

                            <span className="nova-mail__sparkle nova-mail__sparkle--two">
                ✳
              </span>
                        </div>

                        <div className="nova-mail__card-heading">
              <span className="nova-mail__eyebrow">
                NOTIFICATIONS CENTER
              </span>

                            <h2 id="nova-mail-title">
                                Your Inbox<span>.</span>
                            </h2>

                            <p>
                                안녕하세요! 새로운 메시지를 확인하세요.
                            </p>
                        </div>

                        {/* 조건부 렌더링 */}
                        <div
                            className="nova-mail__feedback"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {unreadCount > 0 ? (
                                <div className="nova-mail__alert">
                  <span
                      className="nova-mail__alert-icon"
                      aria-hidden="true"
                  >
                    ✉
                  </span>

                                    <div>
                                        <strong>
                                            새로운 알림이 도착했어요!
                                        </strong>
                                        <p>
                                            읽지 않은 메시지가 {unreadCount}개
                                            있습니다.
                                        </p>
                                    </div>

                                    <span className="nova-mail__count">
                    {unreadCount}
                  </span>
                                </div>
                            ) : (
                                <div className="nova-mail__empty">
                  <span
                      className="nova-mail__check"
                      aria-hidden="true"
                  >
                    ✓
                  </span>

                                    <div>
                                        <strong>모두 확인했어요!</strong>
                                        <p>
                                            현재 읽지 않은 메시지가 없습니다.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 버튼 영역 */}
                        <div className="nova-mail__actions">
                            <button
                                type="button"
                                className="nova-mail__button nova-mail__button--add"
                                onClick={addMessage}
                            >
                                <span>＋</span> 새 메일 추가
                            </button>

                            <button
                                type="button"
                                className="nova-mail__button nova-mail__button--read"
                                onClick={readAllMessages}
                                disabled={unreadCount === 0}
                            >
                                모두 읽음
                            </button>
                        </div>

                        <p className="nova-mail__note">
                            실제 메일 서버가 아닌 React 상태 변경
                            실습입니다.
                        </p>
                    </section>
                </main>

                {/* 푸터 */}
                <footer className="nova-mail__footer">
                    <span>© 2026 ORBIT STUDIO</span>
                    <span>CONDITIONAL RENDERING · REACT</span>
                </footer>
            </div>
        </div>
    );
}

export default Mailbox;
