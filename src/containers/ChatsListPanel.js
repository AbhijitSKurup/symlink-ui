import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageSearch, SearchIcon } from "../assets/icons";
import { Loader } from "../components/Loader";
import useFetch from "../hooks/useFetch";

const ChatsListPanel = ({setSelectedChat, selectedChat}) => {
  const [chatList, setChatList] = useState();
  const { id } = useParams();

  const { fetchData, loading, data } = useFetch();

  useEffect(() => {
    if (!!id) {
      fetchData("chats", null, `session_id=${id}`);
    }
  }, [id]);

  useEffect(() => {
    setChatList(data);
  }, [data]);

  const handleChatSelect = (chatId, e) => {
    e.stopPropagation();
    setSelectedChat(chatId);
  };

  return (
    <div className="flex flex-col gap-4 p-4 text-white h-full animate-fadeIn">
      <p className="flex ">
        <span className="font-bold text-xl self-center">Chats</span>
        <button className="float-right p-1 bg-primary text-xl text-[#A3BFBA] size-10 rounded-md ml-auto">
          +
        </button>
      </p>
      <p className="bg-primary rounded-md w-full p-2">
        <SearchIcon className="inline" />{" "}
        <input
          className="outline-none bg-transparent border-none w-3/4"
          type="text"
          placeholder="Search"
        />
        <span className="float-right">=</span>
      </p>
      <div className="flex overflow-y-auto flex-col h-full">
        <div className="w-full text-white h-full">
          {loading ? (
            <Loader />
          ) : (
            <>
              <p className="text-gray-400 text-sm">Today</p>
              {chatList?.length > 0 ? (
                chatList?.map((item, index) => (
                  <div
                    onClick={(e) => handleChatSelect(item?.id, e)}
                    key={item?.id || index}
                    className={`${
                      selectedChat === item?.id ? "bg-[#324A5F]" : ""
                    } cursor-pointer h-16 w-full p-3 hover:bg-[#4e7292] rounded-md`}
                  >
                    <p>{item?.title}</p>
                    <p>{item?.model_name}</p>
                  </div>
                ))
              ) : (
                <div className="w-full flex flex-col justify-center items-center">
                  <p>
                    <MessageSearch className="size-16" />
                  </p>
                  <p className="text-gray-400 text-md text-center">
                    No Chats Found.. Start a new Chat
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatsListPanel;
