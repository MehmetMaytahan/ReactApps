import React from "react";
// onMenuıItemClick =  props olarak gelen name'i üst componentteki active set ediyor
const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
  // gelen name ile active aynı ise true yada false döner
  const isActive = name === active;
  return (
    <div>
      <li className="group" onClick={() => onMenuItemClick(name)}>
        <a
          href={name.toLowerCase()} // pointer-events-none "a" tag'ın sayfayı yenilemesini engelliyor.
          className="text-xl cursor-pointer block mb-2 pointer-events-none"
        >
          <div className="inline-block">
            <div
              className={`flex items-center rounded-full group-hover:bg-primary-light group-hover:text-primary-base pl-3 pr-8 py-3
              ${isActive ? "text-primary-base" : ""}`}
            >
              <Icon />
              <span className="ml-4 font-bold">{name} </span>
            </div>
          </div>
        </a>
      </li>
    </div>
  );
};

export default SideLink;
