import React from "react";
import { ToptweetsIcon } from "../icons/Icons";
import TweetBox from "./TweetBox";
//import db from "../../../../firebase"

const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-l-gray-extraLigth">
      <header className="sticky top-0  flex justify-between items-center p-4 border-b border-gray-extraLigth bg-white ">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <ToptweetsIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-2 px-4 py-3">
        <img
          src="https://pbs.twimg.com/profile_images/1487818342668845063/DBAgAAg8_400x400.jpg"
          alt="user_photo"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      {/* Divider */}
      <div className="h-3 bg-gray-lightest border-t border-b border-gray-extraLigth" />
    </main>
  );
};

export default Content;
