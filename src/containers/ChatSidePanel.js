import React from "react";
import { useNavigate } from "react-router";
import { SideMenuList } from "../utils/constants";

const ChatSidePanel = () => {
  const natigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 w-full px-2 py-5 items-center">
      <p className="rounded-full bg-black size-10 "></p>
      {SideMenuList?.map((item) => (
        <button
          key={item?.title}
          onClick={() => natigate(item?.path)}
          className="rounded-md p-3 hover:bg-[#324A5F]"
        >
          {item?.icon}
        </button>
      ))}
    </div>
  );
};

export default ChatSidePanel;
