
import React, { useState } from "react";

function MyButton2() {

    // 버튼 클릭 횟수를 저장하는 상태
    const [count, setCount] = useState(0);

    // 버튼 클릭 시 실행되는 함수
    const btnClick = (id, event) => {
        console.log(id, event.target, event.clientX, event.clientY);
    };

    return (
        <div>
            <h3>버튼 클릭 횟수: {count}</h3>

            <button
                onClick={(event) => {
                    setCount((prevCount) => prevCount + 1);
                    btnClick(1, event);
                }}
            >
                버튼을 클릭하세요(개발자도구(F12) 실행)
            </button>
        </div>
    );
}

export default MyButton2;
