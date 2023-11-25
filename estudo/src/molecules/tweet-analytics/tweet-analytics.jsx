import React from "react";
import AnalyticsTweet from "../../atoms/analytics-tweet/analytics-tweet";
import "./tweet-analytics.css";
import replyImage from "../../assets/Twitter_Reply.png"
import repostImage from "../../assets/Repost.png"
import likeImage from "../../assets/like.png"
import viewImage from "../../assets/view.jpg"
import bookmarkImage from "../../assets/bookmark.png"
import shareImage from "../../assets/share.png"

const TweetResult = (props) => {

  return (
    <div className="analytics">
      <AnalyticsTweet image={replyImage} text={props.reply} />
      <div className="analyticsInfo">
        <AnalyticsTweet image={repostImage} text={props.repost} />
      </div>
      <div className="analyticsInfo">
        <AnalyticsTweet image={likeImage} text={props.like} />
      </div>
      <div className="analyticsInfo">
        <AnalyticsTweet image={viewImage} text={props.view} />
      </div>
      <div className="analyticsMark">
        <AnalyticsTweet image={bookmarkImage} />
        <div className="analyticsMarkStyle">
          <AnalyticsTweet image={shareImage} />
        </div>
      </div>
    </div>
  );
};

export default TweetResult;
