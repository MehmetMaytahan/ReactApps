import React from "react";
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../icons/Icons";

const TweetItem = ({ avatar, content, displayName, username, timestamp }) => {
  return (
    <article className="flex space-x-2 border-b border-gray-extraLigth px-4 py-3 cursor-pointer">
      <img src={avatar} className="w-11 h-11 rounded-full" alt="profile" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">{displayName} </h4>
          <span className="text-gray-dark ml-2">{username} </span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full"></div>
          <span className="text-gray-dark ">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}{" "}
          </span>
        </div>
        <p className="my-2 text-gray-900 text-sm">{content} </p>

        <ul className="flex justify-between max-w-md -ml-2 mt-3">
          <li className="group flex items-center space-x-3 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ReplyIcon className="w-4 h-4 group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base -m-2">8</span>
          </li>

          <li className="group flex items-center space-x-3 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-50">
              <RetweetIcon className="w-4 h-4 group-hover:text-green-500" />
            </div>
            <span className="group-hover:text-green-500 -m-2">8</span>
          </li>

          <li className="group flex items-center space-x-3 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-50">
              <LikeIcon className="w-4 h-4 group-hover:text-red-500" />
            </div>
            <span className="group-hover:text-red-600 -m-2">8</span>
          </li>

          <li className="group flex items-center space-x-3 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ShareIcon className="w-4 h-4 group-hover:text-primary-base" />
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default TweetItem;
