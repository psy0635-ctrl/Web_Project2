import React from "react";
import TemperatureInput from "./TemperatureInput";
import "./Calculator1.css";

function Calculator1() {
    return (
        <div className="temperature-calculator">
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
        </div>
    );
}

export default Calculator1;
