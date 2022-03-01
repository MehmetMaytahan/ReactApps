import React from "react";
import { Timeline } from "react-twitter-widgets";
import { SearchIcon } from "../icons/Icons";

const Widgets = () => {
  return (
    <aside className="w-80 bg-white">
      <div className="flex items-center space-x-4 p-3 m-3 rounded-full focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-base focus-within:text-primary-base text-gray-dark bg-gray-200">
        <SearchIcon className="w-5 h-5 " />
        <input
          type="text"
          className="pl-3 w-full placeholder-gray-dark bg-transparent focus:outline-none text-sm"
          placeholder="Search Twitter"
        />
      </div>
      <div className="mt-5">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "javascript",
          }}
          options={{
            height: "750",
          }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
