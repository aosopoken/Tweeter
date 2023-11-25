import React from "react";
import "./analytics-tweet.css";

const AnalyticsTweet = (props) => {
  return (
    <div className="analytics">
      <img src={props.image} />
      {props.text && <p>{props.text}</p>}
    </div>
  );
};

export default AnalyticsTweet;
