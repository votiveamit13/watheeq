"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ChevronLeft } from "lucide-react";
import ChatPanel from "@/components/professionaldashboard/support/ChatPanel";

export default function TechnicalSupport() {
  const [createTicketDialog, setCreateTicketDialog] = useState(false);
  const [showChatPanel, setShowAddService] = useState(false);
  const tickets = [
    {
      id: "01",
      address: "مشكلة دفع",
      date: "29 شواال-1446هـ 10:00 م",
      status: "تم الرد",
      message: "3",
      options: "إغلاق التذكرة",
    },
    {
      id: "02",
      address: "استفسار عن الرسوم",
      date: "29 شواال-1446هـ 10:00 م",
      status: "في انتظار الرد",
      message: "0",
      options: "إغلاق التذكرة",
    },
    {
      id: "03",
      address: "ارسال رد للعميل وتأخر",
      date: "29 شواال-1446هـ 10:00 م",
      status: "مغلقة",
      message: "2",
      options: "إغلاق التذكرة",
    },
    {
      id: "04",
      address: "موعد لقاء الأسبوع",
      date: "29 شواال-1446هـ 10:00 م",
      status: "تم الرد",
      message: "3",
      options: "إغلاق التذكرة",
    },
  ];

  if(showChatPanel){
    return <ChatPanel onBack={() => setShowAddService(false)}/>
  }

  const getStatusClasse = (status) => {
    switch (status) {
      case "تم الرد":
        return "bg-[#F0F9FF] text-[#0095FF] rounded-lg py-2 px-4 border border-[#0095FF]";
      case "في انتظار الرد":
        return "bg-[#FFB35C1A] text-[#FFB35C] rounded-lg py-2 px-4 border border-[#FFB35C]";
      case "مغلقة":
        return "bg-[#F242421A] text-[#F24242] rounded-lg py-2 px-4 border border-[#F24242]";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };
  return (
    <div className="bg-white mt-5 p-3 sm:p-5 rounded-lg w-full">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
      <h2 className="text-xl sm:text-2xl font-bold text-right">الدعم الفني</h2>
  
      <button
        className="cursor-pointer flex gap-2 items-center bg-[#F8FAFC] border border-[#13498B80] py-2 px-4 sm:px-5 rounded-lg text-sm sm:text-base w-1/2 sm:w-auto"
        onClick={() => setCreateTicketDialog(true)}
      >
        <FaPlus />
        إنشاء تذكرة
      </button>
    </div>
  
    {/* Modal stays same but add mobile responsiveness */}
    {createTicketDialog && (
      <div className="fixed inset-0 bg-[#0000007d] flex justify-center p-10 items-center z-50">
        <div className="bg-white p-4 sm:p-6 rounded-lg w-full sm:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#13498B]">إنشاء تذكرة</h2>
            <span className="cursor-pointer" onClick={() => setCreateTicketDialog(false)}>
              <ChevronLeft />
            </span>
          </div>
  
          <div className="flex flex-col items-start w-full">
            <label className="text-sm text-[#13498B] mb-2">عنوان التذكرة</label>
            <input
              type="text"
              className="w-full sm:w-1/2 text-right bg-white border border-blue-200 rounded-lg p-3 placeholder:text-gray-400 focus:outline-none text-[#9794AA] focus:ring-2 focus:ring-blue-500"
              placeholder="عنوان مشكلة"
              style={{ border: "1px solid #13498b40" }}
            />
          </div>
  
          <div className="flex flex-col items-start w-full mt-6 sm:mt-8">
            <label className="text-sm text-[#13498B] mb-2">تفاصيل المشكلة</label>
            <textarea
              rows={4}
              className="border border-[#CBD5E0] rounded-lg w-full px-4 py-2 text-sm text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            ></textarea>
          </div>
  
          <div className="mt-6 sm:mt-10 sm:text-left sm:float-right">
          <button className="cursor-pointer bg-[#13498B] text-white font-bold rounded-lg py-2 px-6 sm:px-7" onClick={() => setCreateTicketDialog(false)}>
              إرسال
            </button>
          </div>
        </div>
      </div>
    )}
  
    <div className="overflow-x-auto mt-5">
      <table className="w-full text-right text-sm sm:text-base mb-5">
        <thead>
          <tr className="text-[#96A5B8] font-medium whitespace-nowrap">
            <th className="py-2 px-3">#</th>
            <th className="py-2 px-3">عنوان التذكرة</th>
            <th className="py-2 px-3">تاريخ التذكرة</th>
            <th className="py-2 px-3">حالة التذكرة</th>
            <th className="py-2 px-3">رسائل الدعم</th>
            <th className="py-2 px-3">خيارات</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr
              key={ticket.id}
              className="border-b hover:bg-gray-50 transition duration-200 whitespace-nowrap"
            >
              <td className="py-4 px-3">{ticket.id}</td>
              <td className="py-4 px-3">{ticket.address}</td>
              <td className="py-4 px-3">{ticket.date}</td>
              <td className="py-4 px-3">
                <button
                  className={`cursor-pointer w-[100px] sm:w-[140px] text-center inline-block ${getStatusClasse(ticket.status)}`}
                  onClick={() => setShowAddService(true)}
                >
                  {ticket.status}
                </button>
              </td>
              <td className="py-4 px-3">
                <span className="bg-[#0BB41F] text-white rounded-lg py-1 px-4 sm:px-6 text-sm sm:text-base">
                  {ticket.message}
                </span>
              </td>
              <td className="py-4 px-3">
                <button className="cursor-pointer bg-[#F24242] text-white rounded-lg py-1 px-5 sm:px-8 text-sm sm:text-base">
                  {ticket.options}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
}
