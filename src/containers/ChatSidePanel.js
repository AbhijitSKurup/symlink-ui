import React from "react";
import { useLocation, useNavigate } from "react-router";
import { SideMenuList } from "../utils/constants";
import { GhostAiLogo } from "../assets/icons";

const ChatSidePanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex flex-col gap-2 w-full px-2 py-5 items-center animate-fadeRight">
      <p className="flex justify-center items-center rounded-full bg-black size-10 ">
        <GhostAiLogo />
      </p>
      {SideMenuList?.map((item) => (
        <button
          key={item?.title}
          onClick={() => navigate(item?.path)}
          className={`${
            location?.pathname === item?.path ? "bg-[#324A5F]" : ""
          } rounded-md p-3 hover:bg-[#324A5F]`}
        >
          {item?.icon}
        </button>
      ))}
    </div>
  );
};

export default ChatSidePanel;
