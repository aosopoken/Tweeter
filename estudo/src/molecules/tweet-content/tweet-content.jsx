import React from "react";
import FieldText from "../../atoms/field-text/field-text";

const TweetContent = (props) => {
    return (
        <div>
            <FieldText text={props.text} image={props.image} />
        </div>
    )
}

export default TweetContent;