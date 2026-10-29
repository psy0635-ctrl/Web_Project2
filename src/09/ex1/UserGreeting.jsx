
import React from "react";

function UserGreeting() {
    return (
        <div className="greeting-message">
            <p className="greeting-message-kicker">
                WELCOME BACK
            </p>

            <h1 className="greeting-title">
                다시 만나서
                <br />
                <span>반가워요.</span>
            </h1>

            <p className="greeting-description">
                환영합니다!
                <br />
                현재 로그인 상태의 회원 화면입니다.
            </p>

            <div className="greeting-tip">
        <span
            className="greeting-tip-icon"
            aria-hidden="true"
        >
          ✓
        </span>

                <span>
          isLoggedIn이 true여서 회원 인사말이
          표시됩니다.
        </span>
            </div>
        </div>
    );
}

export default UserGreeting;
