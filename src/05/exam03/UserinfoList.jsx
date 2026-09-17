import React from "react";
import Userinfo from "./Userinfo";
import "./UserinfoList.css";

const Users = [
    {
        name: "Jang WonYoung",
        avatarUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
        comment: "Positive mindset, lucky vibe~"
    },
    {
        name: "Ahn Yujin",
        avatarUrl: "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801864_1280.png",
        comment: "I think likes me. ^^"
    },
    {
        name: "Park liz",
        avatarUrl: "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801872_1280.png",
        comment: "Positive mindset, lucky vibe~"
    }
];

function UserinfoList() {
    const currentDate = new Date();

    return (
        <div className="userinfo-list">
            {Users.map((user, index) => {
                return (
                    <div className="comment" key={index}>
                        <Userinfo user={user} />

                        <div className="comment-text">
                            {user.comment}
                        </div>

                        <div className="comment-date">
                            {currentDate.toDateString()}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default UserinfoList;