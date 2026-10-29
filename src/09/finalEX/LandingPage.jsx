import React from "react";
import Toolbar from "./Toolbar";
import CatImg from "./Cat.png";

function LandingPage () {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);

    }
    const logoutClick = () => {
        setIsLoggedIn(false);

    }

    return (
        <div>
            <Toolbar isLoggedIn = {isLoggedIn} loginClick = {loginClick} logoutClick = {logoutClick} />
            <div>
                9장 조건부 렌더링 실습 화면입니다.
                <br/>
                <img src ={CatImg} width={200} height={50} />
            </div>
        </div>
    );
}
export default LandingPage;