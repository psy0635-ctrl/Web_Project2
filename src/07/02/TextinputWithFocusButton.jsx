import React, {useCallback, useRef} from "react";

function TextinputWithFocusButton() {
    const inputElement = useRef(null);

    const onButtonClick = () => {
        inputElement.current.focus();
    };

    return (
        <div>
            <input ref={inputElement} type="text" size={20}/>&nbsp;&nbsp;&nbsp;
            <button>Focus the input element</button>
        </div>
    );
}

export default TextinputWithFocusButton;