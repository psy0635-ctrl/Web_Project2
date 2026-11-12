import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

function Calculator0() {
    const [temperature, setTemperature] = useState("");

    const handleChange = (event) => {
        setTemperature(event.target.value);
    };

    const celsius = temperature.trim() === "" ? NaN : Number(temperature);

    return (
        <fieldset className="boiling-calculator">
            <legend>섭씨 온도를 입력하세요.</legend>
            <input
                type="number"
                step="any"
                value={temperature}
                onChange={handleChange}
            />
            <BoilingVerdict celsius={celsius} />
        </fieldset>
    );
}

export default Calculator0;
