
import React, { useState } from "react";

function MessageSender() {
    const [message, setMessage] = useState("");

    function handleChange(event) {
        setMessage(event.target.value);
    }

    function handleClick() {
        alert(message);
        setMessage("");
    }

    return(
      <div>
          <h1>메세지 전송 프로그램</h1>
          <input type={"text"} placeholder={"전송할 메세지 입력"} value={message} onChange={handleChange} />
          <button onClick={handleClick}>메세지 전송</button>
          <p>미리보기: {message}</p>
      </div>
    );
}

export default MessageSender;
