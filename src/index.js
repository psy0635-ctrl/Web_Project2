import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import BookList from "./05/exam02/BookList";
import Userinfo from "./05/exam03/Userinfo";
// import TodoList from "./01/TodoList";
// import Library from "./03/Library";
// import './03/Book.css';
// import Library from './03/enhanced_css/Library';

// import Clock from "./04/ConfirmDialog/Clock";
// import ConfirmDialogList from "./04/ConfirmDialogList";
// import WelcomeList from "./05/WelcomeList";
// import UserinfoList from "./05/exam03/UserinfoList";
import Notification from "./06/NotificationList";
import NotificationList from "./06/NotificationList";
import Counter from "./07/01/Counter";
import TextinputWithFocusButton from "./07/02/TextinputWithFocusButton";
import Accommodate from "./07/Accommodate";
import MyButton2 from "./08/MyButton2";
import ConfirmButton from "./08/ConfirmButton";
import MyButton from "./08/MyButton";
import ConfirmButton2 from "./08/ConfirmButton2";
import MessageSender from "./08/MessageSender";

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
        root.render(
            <React.StrictMode>
            <MessageSender/>
            </React.StrictMode>

        );
    },1000
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
