import React, { useState } from "react";
import {
  EmojiIcon,
  GIFIcon,
  MediaIcons,
  PollIcon,
  ScheduleIcon,
} from "../icons/Icons";

import db from "../../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const TweetBox = () => {
  const [content, setContent] = useState("");

  const sendTweet = () => {
    if (!content) return false;

    addDoc(collection(db, "feed"), {
      displayName: "Mehmet Maytahan",
      username: "@MehmetMaytahan",
      content,
      timestamp: serverTimestamp(),
      avatar:
        "https://pbs.twimg.com/profile_images/1487818342668845063/DBAgAAg8_400x400.jpg",
    });
    setContent("");
  };

  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="outline-none w-full placeholder-gray-dark overflow-hidden resize-none"
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex items-center justify-between">
        <div className="flex -ml-1">
          <div className="flex justify-between items-center w-11 h-11">
            <MediaIcons className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex justify-between items-center w-11 h-11">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex justify-between items-center w-11 h-11">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex justify-between items-center w-11 h-11">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex justify-between items-center w-11 h-11">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium "
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
