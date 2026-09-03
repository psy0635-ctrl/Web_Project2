import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    return (
        <div className="clock-page">

            <h1 className="department">
                인공지능소프트웨어학과
            </h1>

            <div className="clock-frame">

                <div className="time-box">
                    <span className="time-number">
                        {hours}
                    </span>
                </div>

                <span className="colon">:</span>

                <div className="time-box">
                    <span className="time-number">
                        {minutes}
                    </span>
                </div>

                <span className="colon">:</span>

                <div className="time-box">
                    <span className="time-number seconds">
                        {seconds}
                    </span>
                </div>

            </div>

        </div>
    );
}

export default Clock;