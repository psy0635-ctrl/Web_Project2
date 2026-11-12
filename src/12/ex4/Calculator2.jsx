import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import "./Calculator2.css";

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    if (temperature.trim() === "") {
        return "";
    }

    const input = Number(temperature);
    if (!Number.isFinite(input)) {
        return "";
    }

    const output = convert(input);
    if (!Number.isFinite(output)) {
        return "";
    }

    const rounded = Math.round(output * 1000) / 1000;
    return String(rounded);
}

function Calculator2() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (value) => {
        setTemperature(value);
        setScale("c");
    };

    const handleFahrenheitChange = (value) => {
        setTemperature(value);
        setScale("f");
    };

    const celsius = scale === "f"
        ? tryConvert(temperature, toCelsius)
        : temperature;

    const fahrenheit = scale === "c"
        ? tryConvert(temperature, toFahrenheit)
        : temperature;

    const celsiusNumber = celsius.trim() === "" ? NaN : Number(celsius);

    return (
        <div className="temperature-calculator">
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={celsiusNumber} />
        </div>
    );
}

export default Calculator2;
