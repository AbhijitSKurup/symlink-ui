import React, { useEffect, useState } from "react";
import { SearchIcon } from "../assets/icons";
//import useFetch from "../hooks/useFetch";
import { Loader } from "../components/Loader";

const ChatsListPanel = () => {
  const [chatList, setChatList] = useState();
  const [selectedChat, setSelectedChat] = useState();

  //const { data, loading } = useFetch("chats");
  const loading = false;
  useEffect(
    () =>
      setChatList([
        { id: 1, title: "Title", subTitle: "subTitle" },
        { id: 2, title: "Title", subTitle: "subTitle" },
        { id: 3, title: "Title", subTitle: "subTitle" },
        { id: 4, title: "Title", subTitle: "subTitle" },
        { id: 5, title: "Title", subTitle: "subTitle" },
      ]),
    []
  );

  const handleChatSelect = (chatId, e) => {
    e.stopPropagation();
    setSelectedChat(chatId);
  };

  return (
    <div className="flex flex-col gap-4 p-4 text-white">
      <p className="flex ">
        <span className="font-bold text-xl self-center">Chats</span>
        <button className="float-right p-1 bg-black text-xl text-[#A3BFBA] size-10 rounded-md ml-auto">
          +
        </button>
      </p>
      <p className="bg-black rounded-md w-full p-2">
        <SearchIcon className="inline" />{" "}
        <input
          className="outline-none bg-transparent border-none w-3/4"
          type="text"
          placeholder="Search"
        />
        <span className="float-right">=</span>
      </p>
      <div className="flex flex-col">
        <div className="w-full h-full overflow-auto text-white">
          {loading ? (
            <Loader />
          ) : (
            <>
              <p className="text-gray-400 text-sm">Today</p>
              {chatList?.length > 0 &&
                chatList?.map((item, index) => (
                  <div
                    onClick={(e) => handleChatSelect(item?.id, e)}
                    key={item?.id || index}
                    className={`${
                      selectedChat === item?.id ? "bg-[#324A5F]" : ""
                    } cursor-pointer h-16 w-full p-3 hover:bg-[#4e7292] rounded-md`}
                  >
                    <p>{item?.title}</p>
                    <p>{item?.subTitle}</p>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatsListPanel;
