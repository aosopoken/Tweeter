import React from "react";
import AnalyticsTweet from "../../atoms/analytics-tweet/analytics-tweet";
import "./tweet-analytics.css";
import replyImage from "../../assets/Twitter_Reply.png"

const TweetResult = (props) => {

  console.log(replyImage, "../../assets/Twitter_Reply.png")

  return (
    <div className="analytics">
      <AnalyticsTweet image={replyImage} text={props.reply} />
      <AnalyticsTweet image={props.repostImage} text={props.repost} />
      <AnalyticsTweet image={props.likeImage} text={props.like} />
      <AnalyticsTweet image={props.viewImage} text={props.view} />
      <AnalyticsTweet image={props.bookmarkImage} />
      <AnalyticsTweet image={props.shareImage} />
    </div>
  );
};

export default TweetResult;
