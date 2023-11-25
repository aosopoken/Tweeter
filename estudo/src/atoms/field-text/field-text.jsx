import React from "react";

const FieldText = (props) => {
    return(
        <div>
            {props.text}
            <img src={props.image} />
        </div>
    )
}

export default FieldText;