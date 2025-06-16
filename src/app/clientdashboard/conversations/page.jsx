"use client";
import { useState, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BiSliderAlt } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiEdit2Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import {
  MdPhotoLibrary,
  MdOutlineCameraAlt,
  MdOutlineMicNone,
} from "react-icons/md";

export default function Conversations() {
  const [chats, setChats] = useState([]);
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);

  useEffect(() => {
    const fetchChats = async () => {
      const fakeData = [
        {
          index: "0",
          img: "conversation1.png",
          name: "سعيد الشيخ",
          subtitle: "على الموعد إن شاء الله",
          time: "4:15",
        },
        {
          index: "1",
          img: "conversation2.png",
          name: "سعيد الشيخ",
          subtitle: "على الموعد إن شاء الله",
          time: "4:15",
        },
        {
          index: "2",
          img: "conversation2.png",
          name: "سعيد الشيخ",
          subtitle: "على الموعد إن شاء الله",
          time: "4:15",
        },
        {
          index: "3",
          img: "conversation2.png",
          name: "سعيد الشيخ",
          subtitle: "على الموعد إن شاء الله",
          time: "4:15",
        },
        {
          index: "4",
          img: "conversation2.png",
          name: "سعيد الشيخ",
          subtitle: "على الموعد إن شاء الله",
          time: "4:15",
        },
        {
          index: "5",
          img: "conversation2.png",
          name: "سعيد الشيخ",
          subtitle: "على الموعد إن شاء الله",
          time: "4:15",
        },
      ];
      setChats(fakeData);
    };

    fetchChats();
  }, []);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "text", // or "audio", "file", "image", "pricing"
      direction: "out", // "in" for received, "out" for sent
      content: "هنا نص رسالة هنا نص رسالة هنا نص رسالة ",
      time: "12:45 PM",
      date: "29-شوال 1446هـ",
      showTime: false,
    },
    {
      id: 2,
      type: "text",
      direction: "in",
      content: "هنا نص رسالة",
      time: "12:45 PM",
      date: "29-شوال 1446هـ",
      showTime: false,
    },
    {
      id: 3,
      type: "audio",
      direction: "in",
      duration: "2:00",
      avatar: "conversation1.png",
      time: "1:00 PM",
      date: "29-شوال 1446هـ",
      showTime: false,
    },
    {
      id: 4,
      type: "file",
      direction: "out",
      filename: "توكيـل_ماضي.pdf",
      time: "12:35 PM",
      date: "29-شوال 1446هـ",
      showTime: false,
    },
        {
      id: 5,
      type: "image",
      direction: "out",
      filename: "توكيـل_ماضي.pdf",
      time: "12:35 PM",
      date: "29-شوال 1446هـ",
      showTime: false,
    },
            {
      id: 6,
      type: "pricing",
      direction: "in",
      time: "12:35 PM",
      date: "29-شوال 1446هـ",
      showTime: false,
    },
  ]);

  const groupMessagesByDate = (messages) => {
    return messages.reduce((acc, msg) => {
      acc[msg.date] = acc[msg.date] ? [...acc[msg.date], msg] : [msg];
      return acc;
    }, {});
  };

  const handleToggleTime = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, showTime: !msg.showTime } : msg
      )
    );
  };

  const grouped = groupMessagesByDate(messages);

  return (
    <div className="bg-white mt-5 rounded-lg">
      <div className="flex justify-between">
        <div className="w-[310px] shadow">
          <h2 className="p-5">الإجتماعات</h2>
          <div className="flex w-full p-5">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded w-full max-w-md">
              <FiSearch className="text-[#005088] ml-1" />
              <input
                type="text"
                placeholder="ابحث هنا ..."
                className="bg-transparent flex-1 text-sm text-right placeholder-gray-500 focus:outline-none"
              />
            </div>
            <button className="text-[#005088] text-2xl mr-3">
              <BiSliderAlt />
            </button>
          </div>
          {chats.map((chat, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedChatIndex(index);
                setSelectedChat(chat);
              }}
              className={`flex w-full justify-between px-5 py-2 cursor-pointer transition-all
                ${
                  selectedChatIndex === index
                    ? "bg-[#13498B] text-white"
                    : "hover:bg-gray-100"
                }
              `}
            >
              <div className="flex">
                <div>
                  <img
                    src={`/watheeq/assets/img/${chat.img}`}
                    alt="watheeq"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="mr-2">
                  <h4
                    className={`font-bold ${
                      selectedChatIndex === index
                        ? "text-white"
                        : "text-[#0B2B51]"
                    }`}
                  >
                    {chat.name}
                  </h4>
                  <span
                    className={`${
                      selectedChatIndex === index
                        ? "text-white"
                        : "text-[#9794AA]"
                    }`}
                  >
                    {chat.subtitle}
                  </span>
                </div>
              </div>
              <div>
                <span
                  className={`${
                    selectedChatIndex === index
                      ? "text-white"
                      : "text-[#13498B]"
                  }`}
                >
                  {chat.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="flex justify-between p-5 items-center shadow">
            <div className="flex items-center">
              <div className="ml-5">
                <img
                  src="/watheeq/assets/img/conversation1.png"
                  alt="watheeq"
                  width={50}
                />
              </div>
              <div>
                <h3>سعيد الشيخ</h3>
                <span>009777444411</span>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowStatusMenu(!showStatusMenu)}
                className="cursor-pointer"
              >
                <HiOutlineDotsHorizontal />
              </button>

              {showStatusMenu && (
                <div className="absolute left-0 top-full mt-2 bg-[#EDF2F6] p-3 rounded-lg shadow space-y-2 z-20 w-40 text-[#13498B] text-sm text-right">
                  <div className="font-bold text-[#13498B]  pb-1">الحالة</div>
                  <div className="flex items-center justify-between cursor-pointer border-b">
                    <input type="checkbox" />
                    <span>في الانتظار</span>
                  </div>
                  <div className="flex items-center justify-between cursor-pointer border-b">
                    <input type="checkbox" defaultChecked />
                    <span>مفتوحة</span>
                  </div>
                  <div className="flex items-center justify-between cursor-pointer border-b">
                    <input type="checkbox" />
                    <span>مغلقة</span>
                  </div>
                  <div className="flex items-center justify-between cursor-pointer">
                    <input type="checkbox" />
                    <span>تم التنفيذ</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/*Chat Panel */}
          <div className="flex-1 p-5 space-y-5 overflow-y-auto">
            {Object.keys(grouped).map((date) => (
              <div key={date}>
                {/* Date separator */}
                <div className="text-center text-[#9794AA] text-xs mb-5">
                  {date}
                </div>

                {grouped[date].map((msg) => (
                  <div
                    key={msg.id}
                    onClick={() => handleToggleTime(msg.id)}
                    className={`flex flex-col cursor-pointer ${
                      msg.direction === "in" ? "items-end" : "items-start"
                    } space-y-1`}
                  >
                    {/* Message bubble */}
                    <div
                      className={`px-4 py-2 rounded-lg shadow text-sm w-fit max-w-xs break-words
            ${
              msg.direction === "in"
                ? "bg-[#13498B] text-white text-right"
                : "bg-[#E7EDF3] text-[#0B2B51]"
            }`}
                    >
                      {msg.type === "text" && msg.content}
                      {msg.type === "file" && (
                        <div className="flex items-center">
                          📎 <span className="mr-2">{msg.filename}</span>
                        </div>
                      )}
                      {msg.type === "audio" && (
                        <div className="flex items-center gap-2">
                          🎵 <span>{msg.duration}</span>
                          <img
                            src={`/watheeq/assets/img/${msg.avatar}`}
                            className="w-6 h-6 rounded-full"
                          />
                        </div>
                      )}
                    </div>

                    {/* Time shown on click */}
                    {msg.showTime && (
                      <div className="text-xs text-gray-400 mt-1">
                        {msg.time}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="bg-white p-4 flex items-center border-t mt-auto relative">
            <div className="relative ml-2">
              <button
                className="text-[#13498B] flex items-center justify-center"
                onClick={() => setShowMenu(!showMenu)}
              >
                <FaPlus className="size-8" />
              </button>

              {showMenu && (
                <div className="absolute bottom-full mb-2 left-0 -translate-x-1/2 bg-[#EDF2F6] p-3 rounded-xl shadow space-y-2 z-10 w-40 text-[#13498B] text-sm">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaRegFileAlt /> <span>إرفاق ملف</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <MdPhotoLibrary /> <span>صور وفيديو</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <MdOutlineCameraAlt /> <span>الكاميرا</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <RiMoneyDollarCircleLine /> <span>عرض سعر</span>
                  </div>
                </div>
              )}
            </div>
            <div className="relative flex-1">
              <RiEdit2Line className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-[#13498B]" />
              <MdOutlineMicNone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-[#13498B]" />
              <input
                type="text"
                placeholder="اكتب الرسالة هنا"
                className="w-full border border-gray-300 px-10 py-3 text-right focus:outline-none rounded"
              />
            </div>

            <button className="mr-2 text-[#13498B] bg-[#13498B] text-white p-3 rounded-xl text-xl items-center">
              <IoMdSend className="-scale-x-100 size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
