import React from "react";
import "./image-user.css"

const ImageUser = (props) => {
    return (
        <img className="userImage" src={props.userImage} />
    )
}

export default ImageUser;