
import React from "react";

const unitNames = {
    km: "킬로미터",
    mile: "마일",
};

function DistanceInput({ unit, distance, onDistanceChange }) {
    const inputId = `distance-${unit}`;

    const handleChange = (event) => {
        onDistanceChange(event.target.value);
    };

    return (
        <div className="inputField">
            <label htmlFor={inputId}>
                {unitNames[unit]} ({unit}) 입력
            </label>

            <input
                id={inputId}
                type="number"
                min="0"
                step="any"
                value={distance}
                onChange={handleChange}
                placeholder={`${unitNames[unit]}를 입력하세요`}
            />
        </div>
    );
}

export default DistanceInput;
