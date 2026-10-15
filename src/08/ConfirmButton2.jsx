
import React, { useState } from "react";

function ConfirmButton2(props) {

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevConfirmed) => !prevConfirmed);
    };

    return (
        <button onClick={handleConfirm}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton2;
