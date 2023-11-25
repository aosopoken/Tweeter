import React from "react";
import "./name-user.css"

const NameUser = (props) => {
    return (
        <div className="name-user">
            <p className="name">{props.name}</p>
            <p className="user">{props.user}</p>
            <p className="date">{props.date}</p>
        </div>
    )
}

export default NameUser;