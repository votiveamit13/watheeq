"use client";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";
import { FaRegFileAlt, FaPlay } from "react-icons/fa";
import { FaPlus, FaFilePdf } from "react-icons/fa6";
import { RiEdit2Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import {
  MdPhotoLibrary,
  MdOutlineCameraAlt,
  MdOutlineMicNone,
  MdOutlineDownloadForOffline,
} from "react-icons/md";

export default function ChatPanel({
  selectedChat,
  messages,
  setMessages,
  showPricingOption = "yes",
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [offer, setOffer] = useState(false);

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
          <button
            onClick={() => setShowStatusMenu(!showStatusMenu)}
            className="cursor-pointer"
          >
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
                className={`flex flex-col  ${
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
                    <div className="cursor-pointer border text-[#13498B] gap-1  rounded-lg flex items-center justify-between">
                      <div>
                        <MdOutlineDownloadForOffline size={25} />
                      </div>
                      <div className="flex items-center gap-2">
                        <p>{msg.filename}</p>
                        <FaFilePdf fill="red" size={20} />
                      </div>
                    </div>
                  )}
                  {msg.type === "audio" && (
                    <div className="flex items-center gap-2">
                      <img
                        src={`/watheeq/assets/img/${msg.avatar}`}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{msg.duration}</span>
                      <FaPlay className="cursor-pointer" />
                    </div>
                  )}
                  {msg.type === "pricing" && (
                    <div className="flex justify-start">
                      <div className="flex items-center justify-between bg-[#13498B] text-white px-4 py-3 rounded-lg w-full max-w-xs">
                        <span className="text-sm">
                          خدمة صياغة ومراجعة العقود القانونية
                        </span>
                        <button
                          className="flex bg-white cursor-pointer text-[#13498B] text-sm gap-1 font-semibold px-4 py-1 rounded-md whitespace-nowrap"
                          onClick={() => setOffer(true)}
                        >
                          <img
                            src="/watheeq/assets/img/sidebaricons/price.png"
                            alt="watheeq"
                            width={12}
                          />
                          عرض سعر
                        </button>
                        {offer && (
                          <div className="fixed inset-0 bg-[#0000001a] bg-opacity-30 flex justify-center items-center z-50 p-10">
                            <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
                              <h2 className="text-xl font-bold text-center text-[#13498B]">
                                 عرض سعر
                              </h2>
                              <table className="w-full text-right text-[#0B2B51]">
                                <tbody>
                                  <tr>
                                    <td className="font-bold text-sm py-2">
                                      الخدمة
                                    </td>
                                    <td className="px-5 text-sm">صياغة ومراجعة العقود القانونية</td>
                                  </tr>
                                  <tr>
                                    <td className="font-bold text-sm py-2">
                                      مدة تقديم الخدمة
                                    </td>
                                    <td className="px-5 text-sm">10:00 ص</td>
                                  </tr>
                                  <tr>
                                    <td className="font-bold text-sm py-2">
                                      سعر الخدمة
                                    </td>
                                    <td className="px-5 text-sm flex items-center gap-1 py-2">
                                      120
                                      <img src="/watheeq/assets/img/business1.png" alt="watheeq"/>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="text-[#0B2B51]">
                                <p className="mt-3 font-bold text-sm">
                                  تفاصيل الخدمة
                                </p>
                                <span className="text-sm leading-relaxed block">
                                  نقدّم خدمات صياغة ومراجعة العقود القانونية بدقة واحترافية تضمن وضوح الحقوق والالتزامات وتقلل من النزاعات المستقبلية.
                                </span>
                              </div>
                              <div className="flex justify-center gap-4 mt-10">
                                <button
                                  className="bg-[#F8FAFC] text-[#13498B] w-[130px] h-[40px] flex items-center justify-center border rounded-lg font-bold cursor-pointer"
                                  onClick={() => setOffer(null)}
                                >
                                  رفض
                                </button>
                                <button
                                  className="bg-[#13498B] text-white w-[130px] h-[40px] flex items-center justify-center rounded-lg font-bold cursor-pointer"
                                  onClick={() => setOffer(null)}
                                >
                                  قبول
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
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