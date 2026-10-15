
import React, { useState } from "react";

function Toggle2() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // const handleClick = () => {
    //     setIsToggleOn(prevIsToggleOn => !prevIsToggleOn);
    // };

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return (
        <button onClick={handleClick}>
            Button {isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
}

export default Toggle2;
