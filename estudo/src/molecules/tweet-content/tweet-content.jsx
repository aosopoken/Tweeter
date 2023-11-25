import React from "react";
import FieldText from "../../atoms/field-text/field-text";
import fieldImage from "../../assets/goku.png"

const TweetContent = (props) => {
    return (
        <div>
            <FieldText text={props.text} fieldImage={fieldImage} />
        </div>
    )
}

export default TweetContent;