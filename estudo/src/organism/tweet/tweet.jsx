import React from "react";
import TweetUser from "../../molecules/tweet-user/tweet-user";
import TweetContent from "../../molecules/tweet-content/tweet-content";
import TweetResult from "../../molecules/tweet-analytics/tweet-analytics";

const Tweet = () => {
  return (
    <div>
      <div>
        <TweetUser name={"Lucas Pneus"} user={"@Clodovil"} date={"18h"} />
      </div>
      <div>
        <TweetContent text={"UM DIA EU VOU TE PEGAR E FAREI VC PAGAR"} />
      </div>
      <div>
        <TweetResult reply={"35k"} repost={"45k"} like={"78K"} view={"178k"} />
      </div>
    </div>
  );
};

export default Tweet;
