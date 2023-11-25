import React from "react";
import NameUser from "../../atoms/name-user/name-user";
import ImageUser from "../../atoms/image-user/image-user";
import userImage from "../../assets/jukera.jpg"
import "./tweet-user.css"

const TweetUser = (props) => {
    return (
        <div className="tweetUser">
            <ImageUser userImage={userImage} />
            <div className="userName">
                <NameUser name={props.name} />
            </div>
            <div className="userID">
                <NameUser user={props.user} />
            </div>
            <div className="userDot">
            </div>
            <div className="userDate">
                <NameUser date={props.date}/>
            </div>
        </div>
    )
}

export default TweetUser;