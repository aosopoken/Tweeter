import React from "react";
import NameUser from "../../atoms/name-user/name-user";
import ImageUser from "../../atoms/image-user/image-user";

const TweetUser = (props) => {
    return (
        <div>
            <NameUser name={props.name} user={props.user} date={props.date}/>
            <ImageUser image={props.image} />
        </div>
    )
}

export default TweetUser;