"use client";
import { useState, useEffect } from "react";
import Inbox from "@/components/common/chat/Inbox";
import ChatPanel from "@/components/common/chat/ChatPanel";

export default function Conversations() {
  const [chats, setChats] = useState([]);
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    setChats([
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
    ]);
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
      content: "هنا نص رسالة هنا نص رسالة هنا نص رسالة ",
      time: "12:35 PM",
      date: "29-شوال 1446هـ",
      showTime: false,
    },
  ]);

  const handleSelectChat = (index, chat) => {
    setSelectedChatIndex(index);
    setSelectedChat(chat);
  };

  return (
    <div className="bg-white mt-5 rounded-lg">
      <div className="flex justify-between mb-30">
        <Inbox
          chats={chats}
          selectedChatIndex={selectedChatIndex}
          onSelectChat={handleSelectChat}
        />
        <ChatPanel
          selectedChat={selectedChat}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}
