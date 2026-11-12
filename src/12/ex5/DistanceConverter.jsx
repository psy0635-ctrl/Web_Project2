
import React, { useState } from "react";
import DistanceInput from "./DistanceInput";
import "./DistanceConverter.css";

const KM_PER_MILE = 1.609344;

function tryConvert(distance, convert) {
    if (distance.trim() === "") {
        return "";
    }

    const input = Number(distance);

    if (!Number.isFinite(input) || input < 0) {
        return "";
    }

    const output = convert(input);

    if (!Number.isFinite(output)) {
        return "";
    }

    return String(Number(output.toFixed(6)));
}

function DistanceConverter() {
    const [distance, setDistance] = useState("");
    const [unit, setUnit] = useState("km");

    const handleKilometerChange = (value) => {
        setDistance(value);
        setUnit("km");
    };

    const handleMileChange = (value) => {
        setDistance(value);
        setUnit("mile");
    };

    const kilometers = unit === "mile"
        ? tryConvert(
            distance,
            (miles) => miles * KM_PER_MILE
        )
        : distance;

    const miles = unit === "km"
        ? tryConvert(
            distance,
            (km) => km / KM_PER_MILE
        )
        : distance;

    const isInvalid =
        distance.trim() !== "" &&
        (!Number.isFinite(Number(distance)) ||
            Number(distance) < 0);

    return (
        <section
            className="distanceConverter"
            aria-labelledby="distance-title"
        >
            <h2 id="distance-title">
                거리 단위 변환기
            </h2>

            <p className="converterDescription">
                킬로미터 또는 마일을 입력하면
                다른 단위로 자동 변환됩니다.
            </p>

            <DistanceInput
                unit="km"
                distance={kilometers}
                onDistanceChange={handleKilometerChange}
            />

            <DistanceInput
                unit="mile"
                distance={miles}
                onDistanceChange={handleMileChange}
            />

            {isInvalid && (
                <p className="converterError" role="alert">
                    0 이상의 올바른 숫자를 입력해 주세요.
                </p>
            )}

            <p className="converterNote">
                1마일 = 1.609344킬로미터
            </p>
        </section>
    );
}

export default DistanceConverter;
