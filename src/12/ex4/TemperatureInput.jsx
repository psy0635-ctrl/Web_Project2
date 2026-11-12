import React from "react";

const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
    const handleChange = (event) => {
        onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>{scaleNames[scale]} 온도를 입력해 주세요.</legend>
            <input
                type="number"
                step="any"
                value={temperature}
                onChange={handleChange}
            />
        </fieldset>
    );
}

export default TemperatureInput;
