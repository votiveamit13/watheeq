"use client";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";
import { FaRegFileAlt, FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiEdit2Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import {
  MdPhotoLibrary,
  MdOutlineCameraAlt,
  MdOutlineMicNone,
} from "react-icons/md";

export default function ChatPanel({ selectedChat, messages, setMessages, showPricingOption = "yes", }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);

  const groupMessagesByDate = (msgs) =>
    msgs.reduce((acc, msg) => {
      acc[msg.date] = acc[msg.date] ? [...acc[msg.date], msg] : [msg];
      return acc;
    }, {});

  const handleToggleTime = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, showTime: !msg.showTime } : msg
      )
    );
  };

  const grouped = groupMessagesByDate(messages);

  return (
    <div className="flex-1 flex flex-col shadow">
      <div className="flex justify-between p-5 items-center shadow">
        <div className="flex items-center">
          <img
            src={
              selectedChat?.img
                ? `/watheeq/assets/img/${selectedChat.img}`
                : "/watheeq/assets/img/avatar.png"
            }
            alt="user"
            className="w-12 h-12 ml-5"
          />
          <div>
            <h3 className="font-bold">{selectedChat?.name || "أحمد ماضي"}</h3>
            <span>{selectedChat?.number || "009777444411"}</span>
          </div>
        </div>
        <div className="relative">
          <button onClick={() => setShowStatusMenu(!showStatusMenu)} className="cursor-pointer">
            <HiOutlineDotsHorizontal />
          </button>
          {showStatusMenu && (
            <div className="absolute left-0 top-full mt-2 bg-[#EDF2F6] p-3 rounded-lg shadow space-y-2 z-20 w-40 text-[#13498B] text-sm text-right">
              <div className="font-bold pb-1">الحالة</div>
              {["في الانتظار", "مفتوحة", "مغلقة", "تم التنفيذ"].map(
                (label, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between cursor-pointer border-b"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={label === "مفتوحة"}
                    />
                    <span>{label}</span>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 p-5 space-y-5 overflow-y-auto">
        {Object.keys(grouped).map((date) => (
          <div key={date}>
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
                <div
                  className={`px-4 py-2 shadow mb-5 text-sm w-fit max-w-xs break-words ${
                    msg.direction === "in"
                      ? "bg-[#13498B] text-white text-right rounded-br-lg rounded-tr-lg rounded-bl-lg"
                      : "bg-[#E7EDF3] text-[#0B2B51] rounded-tl-lg rounded-br-lg rounded-bl-lg"
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
                      <img
                        src={`/watheeq/assets/img/${msg.avatar}`}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{msg.duration}</span>
                      <FaPlay />
                    </div>
                  )}
                </div>
                {msg.showTime && (
                  <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>


<div class="space-y-6 bg-[#f8fafc] p-6 text-right">

  <div class="flex justify-end">
    <div class="bg-[#13498B] text-white px-4 py-2 rounded-md max-w-xs">
      هنا نص رسالة هنا نص رسالة هنا نص رسالة
    </div>
  </div>


  <div class="flex justify-start items-end space-x-2 rtl:space-x-reverse">
    <img src="https://i.pravatar.cc/40" alt="avatar" class="w-8 h-8 rounded-full border-2 border-white shadow" />
    <div class="bg-white px-4 py-2 rounded-md shadow flex items-center space-x-2 rtl:space-x-reverse max-w-xs">
      <button class="text-[#13498B]">▶️</button>
      <div class="text-sm text-gray-600">0:00 / 2:00</div>
    </div>
  </div>


  <div class="flex justify-end">
    <div class="flex items-center space-x-2 rtl:space-x-reverse bg-white px-3 py-2 rounded shadow max-w-xs">
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="pdf" class="w-6 h-6" />
      <span class="text-sm text-[#13498B] font-medium">توقيع_عقدي.pdf</span>
      <span class="text-xs text-gray-500">12:35 PM</span>
    </div>
  </div>


  <div class="flex justify-end">
    <div class="w-32 h-24 bg-gray-200 rounded-md flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[#13498B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13l-2-2-2 2m6 0l2-2 2 2" />
      </svg>
    </div>
  </div>


  <div class="flex justify-start">
    <div class="flex items-center justify-between bg-[#13498B] text-white px-4 py-3 rounded-lg w-full max-w-xs">
      <span class="text-sm">خدمة طباعة ومراجعة العقود القانونية</span>
      <button class="bg-white text-[#13498B] text-sm font-semibold px-3 py-1 rounded-md whitespace-nowrap">
        عرض سعر
      </button>
    </div>
  </div>
</div>


<div className="bg-[#0F4C81] text-white rounded-xl flex items-center justify-between px-4 py-2 w-full max-w-md">

  <button className="text-white">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 4l12 6-12 6V4z" />
    </svg>
  </button>


  <div className="flex-1 mx-4">
    <div className="h-6 bg-white bg-opacity-10 rounded w-full mb-1">

      <div className="h-full w-1/2 bg-white bg-opacity-50 rounded animate-pulse"></div>
    </div>
    <div className="flex justify-between text-sm opacity-80 text-white">
      <span>0:00</span>
      <span>2:00</span>
    </div>
  </div>

  <div className="relative w-10 h-10">
    <img
      src="https://via.placeholder.com/40"
      alt="profile"
      className="rounded-full object-cover w-full h-full"
    />
    <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
      <svg className="w-3 h-3 text-[#0F4C81]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 14a3 3 0 003-3V7a3 3 0 10-6 0v4a3 3 0 003 3zM5 10a5 5 0 0010 0h-1a4 4 0 01-8 0H5z" />
      </svg>
    </div>
  </div>
</div>


<div className="max-w-xs mx-auto space-y-2">

  <div className="flex items-center justify-between bg-[#EDF2F6] rounded-lg p-3">
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="PDF" className="w-6 h-6" />
      <div>
        <p className="text-sm text-[#0F4C81] font-medium">.pdf توكيل محامي</p>
        <p className="text-xs text-[#6B7280]">2 pages · PDF · 100KB</p>
      </div>
    </div>
    <button className="text-[#0F4C81]">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16V4H4zM12 8v4m0 0l-2-2m2 2l2-2"></path>
      </svg>
    </button>
  </div>


  <div className="text-xs text-right text-gray-500">12:55 PM</div>

 
  <div className="bg-[#EDF2F6] rounded-lg p-10 flex justify-center items-center">
    <svg className="w-12 h-12 text-[#0F4C81]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15M6.75 4.5v15m0-12.75l4.5 4.5 3-3 4.5 4.5"></path>
    </svg>
  </div>
</div>







      <div className="bg-white p-4 flex items-center border-t mt-auto relative">
        <div className="relative ml-2">
          <button
            className="text-[#13498B] flex items-center justify-center cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaPlus className="size-8" />
          </button>
          {showMenu && (
            <div className="absolute bottom-full mb-2 left-[-50px] -translate-x-1/2 bg-[#EDF2F6] p-3 rounded-xl shadow space-y-2 z-10 w-40 text-[#13498B] text-sm">
              <div className="flex items-center gap-2 cursor-pointer">
                <FaRegFileAlt />
                <span>إرفاق ملف</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <MdPhotoLibrary />
                <span>صور وفيديو</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <MdOutlineCameraAlt />
                <span>الكاميرا</span>
              </div>
 {showPricingOption === "yes" && (
  <div className="flex items-center gap-2 cursor-pointer">
    <RiMoneyDollarCircleLine />
    <span>عرض سعر</span>
  </div>
)}

            </div>
          )}
        </div>
        <div className="relative flex-1">
          <RiEdit2Line className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-[#13498B]" />
          <MdOutlineMicNone className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-[#13498B]" />
          <input
            type="text"
            placeholder="اكتب الرسالة هنا"
            className="w-full border border-gray-300 px-10 py-3 text-right focus:outline-none rounded"
          />
        </div>
        <button className="mr-2 text-white bg-[#13498B] p-3 rounded-xl text-xl items-center cursor-pointer">
          <IoMdSend className="-scale-x-100 size-6" />
        </button>
      </div>
    </div>
  );
}
