import React from "react";

function BoilingVerdict({ celsius }) {
    if (!Number.isFinite(celsius)) {
        return <p>온도를 입력해 주세요.</p>;
    }

    return (
        <p>{celsius >= 100 ? "물이 끓습니다." : "물이 끓지 않습니다."}</p>
    );
}

export default BoilingVerdict;
