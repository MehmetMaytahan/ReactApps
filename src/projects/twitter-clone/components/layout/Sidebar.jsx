import twitterLogo from "../images/twitter.svg";
import React, { useState } from "react";
import SideLink from "./SideLink";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/Icons";
import UserBox from "./UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("");

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between w-72">
      <div>
        <div className="mt-1 mb-4 ml-1 hover:bg-gray-dark rounded-full flex items-center justify-center w-12 h-12 transform transition-colors duration-300">
          <img src={twitterLogo} className="w9" alt="" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => {
              return (
                <SideLink
                  key={name}
                  name={name}
                  Icon={icon}
                  active={active}
                  onMenuItemClick={handleMenuItemClick}
                />
              );
            })}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark text-white shadow-md rounded-full py-3 px-8 w-11/12 transform transition-colors duration-300">
          Tweet
        </button>
      </div>
      {/* User Componenti */}
      <UserBox />
    </div>
  );
};

export default Sidebar;
