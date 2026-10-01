import React from "react";

import Notification from "./Notification";

import "./NotificationList.css";


const reservedNotifications = [

    {
        id: 1,
        message: "안녕하세요, 여러분, 반갑습니다."
    },

    {
        id: 2,
        message: "오늘은 10월을 시작하는 날입니다."
    },

    {
        id: 3,
        message: "오늘 기분은 어떠신가요?"
    },

    {
        id: 4,
        message: "만약 우울하시다면 기분 전환될 생각을 해보세요."
    },

    {
        id: 5,
        message: "내일은 더 좋은 일이 생길겁니다."
    }

];


var timer;


class NotificationList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            notifications: []

        };

    }


    render() {

        return (

            <div className="notification-page">

                <div className="notification-container">

                    <div className="notification-header">

                        <h1 className="notification-title">
                            알림
                        </h1>

                        <p className="notification-description">
                            새로운 메시지를 확인해보세요.
                        </p>

                    </div>


                    <div className="notification-list">

                        {
                            this.state.notifications.length > 0

                                ? this.state.notifications.map(
                                    (notification) => {

                                        return (

                                            <Notification

                                                key={notification.id}

                                                id={notification.id}

                                                message={notification.message}

                                            />

                                        );

                                    }
                                )

                                :

                                <div className="notification-empty">

                                    새로운 알림을 기다리는 중입니다.

                                </div>

                        }

                    </div>

                </div>

            </div>

        );

    }


    componentDidMount() {

        const { notifications } = this.state;


        timer = setInterval(() => {

            if (
                notifications.length
                < reservedNotifications.length
            ) {

                const index = notifications.length;


                notifications.push(
                    reservedNotifications[index]
                );


                this.setState({

                    notifications: notifications

                });

            }

            else {

                this.setState({

                    notifications: []

                });


                clearInterval(timer);

            }

        }, 3000);

    }


    componentWillUnmount() {

        if (timer) {

            clearInterval(timer);

        }

    }

}


export default NotificationList;