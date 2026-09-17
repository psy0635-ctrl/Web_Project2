import React from "react";
import Welcome from "./Welcome";
import "./WelcomeList.css";

function WelcomeList() {
    return (
        <div className="welcome-list">
            <Welcome name={"김인공"} />
            <Welcome name={"박폴리"} />
            <Welcome name={"이정수"} />
        </div>
    );
}

export default WelcomeList;