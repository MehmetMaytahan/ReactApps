import React from "react";
import TweetItem from "./TweetItem";

const TweetList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet, index) => {
        return <TweetItem {...tweet} key={index} />;
      })}
    </div>
  );
};

export default TweetList;
