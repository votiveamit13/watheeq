"use client";
import { FiSearch } from "react-icons/fi";
import { BiSliderAlt } from "react-icons/bi";

export default function Inbox({ chats, selectedChatIndex, onSelectChat, chatHeading = "الإجتماعات", chatSettingIcon = "yes" }) {
  return (
    <div className="w-[310px] shadow">
      <h2 className="p-5">{chatHeading}</h2>
      <div className="flex w-full p-5">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded w-full max-w-md">
          <FiSearch className="text-[#005088] ml-1" />
          <input
            type="text"
            placeholder="ابحث هنا ..."
            className="bg-transparent flex-1 text-sm text-right placeholder-gray-500 focus:outline-none"
          />
        </div>
        {chatSettingIcon === "yes" && (
        <button className="text-[#005088] text-2xl mr-3 cursor-pointer">
          <BiSliderAlt />
        </button>
        )}
      </div>
      {chats.map((chat, index) => (
        <div
          key={index}
          onClick={() => onSelectChat(index, chat)}
          className={`flex w-full justify-between px-5 py-2 cursor-pointer transition-all
            ${
              selectedChatIndex === index
                ? "bg-[#13498B] text-white"
                : "hover:bg-gray-100"
            }`}
        >
          <div className="flex">
            <img
              src={`/watheeq/assets/img/${chat.img}`}
              alt="chat"
              className="w-10 h-10 rounded-full"
            />
            <div className="mr-2">
              <h4
                className={`font-bold ${
                  selectedChatIndex === index ? "text-white" : "text-[#0B2B51]"
                }`}
              >
                {chat.name}
              </h4>
              <span
                className={
                  selectedChatIndex === index ? "text-white" : "text-[#9794AA]"
                }
              >
                {chat.subtitle}
              </span>
            </div>
          </div>
          <span
            className={
              selectedChatIndex === index ? "text-white" : "text-[#13498B]"
            }
          >
            {chat.time}
          </span>
        </div>
      ))}
    </div>
  );
}
