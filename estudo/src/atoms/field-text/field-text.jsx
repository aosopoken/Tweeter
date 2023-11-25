import React from "react";
import "./field-text.css"

const FieldText = (props) => {
    return(
        <>
            <img className="fieldImage" src={props.fieldImage} />
            {props.text}
        </>
    )
}

export default FieldText;