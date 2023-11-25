import React from "react";
import './tweet-user.css'

const Data = (props) => {
    return (
        <div className="user">
            <image className="image">
                {props.image}
            </image>
            <div className="name">
                {props.name}
            </div>
            <div className="sign">
                {props.sign}
            </div>
        </div>
    )
}

export default Data;