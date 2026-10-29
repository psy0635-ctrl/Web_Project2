
import React from "react";

function GuestGreeting() {
    return (
        <div className="greeting-message">
            <p className="greeting-message-kicker">
                WELCOME, NEW FRIEND
            </p>

            <h1 className="greeting-title">
                처음 오셨나요?
                <br />
                <span>반가워요.</span>
            </h1>

            <p className="greeting-description">
                회원가입을 해주세요.
                <br />
                지금은 게스트 화면을 보고 있습니다.
            </p>

            <div className="greeting-tip">
        <span
            className="greeting-tip-icon"
            aria-hidden="true"
        >
          ✦
        </span>

                <span>
          로그인 상태에 따라 다른 화면을 보여주는
          실습입니다.
        </span>
            </div>
        </div>
    );
}

export default GuestGreeting;
