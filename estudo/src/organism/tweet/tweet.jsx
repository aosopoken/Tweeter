import React from "react";
import TweetUser from "../../molecules/tweet-user/tweet-user";
import TweetContent from "../../molecules/tweet-content/tweet-content";
import TweetResult from "../../molecules/tweet-analytics/tweet-analytics";
import "./tweet.css";

const Tweet = () => {
  return (
    <div className="tweet">
      <div>
        <TweetUser
          name={"Lucas Pneus"}
          user={"@Clodovil"}
          dot={"."}
          date={"18h"}
        />
      </div>
      <div>
        <TweetContent
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
      </div>
      <div>
        <TweetResult reply={"35k"} repost={"45k"} like={"78K"} view={"178k"} />
      </div>
    </div>
  );
};

export default Tweet;
