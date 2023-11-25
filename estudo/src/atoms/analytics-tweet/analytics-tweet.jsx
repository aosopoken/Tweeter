import React from "react";
import "./analytics-tweet.css";

const AnalyticsTweet = (props) => {
  return (
    <div className="analyticsTweet">
      <button className="analyticsButton">
        <img className="analyticsImage" src={props.image} />
        {props.text && <p className="analyticsText">{props.text}</p>}
      </button>
    </div>
  );
};

export default AnalyticsTweet;
