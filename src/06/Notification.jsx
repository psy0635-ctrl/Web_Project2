import React from 'react';
import "./Notification.css";

// class 형 컴포넌트
class Notification extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="notification-card">

                <span className="notification-message">
                    {this.props.message}
                </span>

            </div>

        );
    }


    componentDidMount() {

        console.log(
            `${this.props.id}: componentDidMount called`
        );

    }


    componentDidUpdate() {

        console.log(
            `${this.props.id}: componentDidUpdate called`
        );

    }


    componentWillUnmount() {

        console.log(
            `${this.props.id}: componentWillUnmount called`
        );

    }

}

export default Notification;