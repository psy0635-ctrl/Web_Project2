import React from "react";
import "./Avatar.css";

function Avatar(props) {
    return (
        <img
            className="avatar"
            src={props.user.avatarUrl}
            alt={`${props.user.name} avatar`}
        />
    );
}

export default Avatar;