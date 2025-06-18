"use client";
import { FaPlus } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import Pagination from "@/components/pagination/Pagination";
import AddService from "@/components/clientdashboard/services/AddService";

  const service = [
    {
      id: "01",
      name: "عنوان",
      price: 120,
      duration: "10:00 ص",
      video: "قيد",
      meetingDuration: "15 دقيقة",
      dateAdded: "29-شواال-1446هـ 10:00 م",
    },
    {
      id: "02",
      name: "عنوان",
      price: 120,
      duration: "10:00 ص",
      video: "اختياري",
      meetingDuration: "15 دقيقة",
      dateAdded: "29-شواال-1446هـ 10:00 م",
    },
    {
      id: "03",
      name: "عنوان",
      price: 120,
      duration: "10:00 ص",
      video: "قيد",
      meetingDuration: "15 دقيقة",
      dateAdded: "29-شواال-1446هـ 10:00 م",
    },
    {
      id: "04",
      name: "عنوان",
      price: 120,
      duration: "10:00 ص",
      video: "قيد",
      meetingDuration: "15 دقيقة",
      dateAdded: "29-شواال-1446هـ 10:00 م",
    },
    {
      id: "05",
      name: "عنوان",
      price: 120,
      duration: "10:00 ص",
      video: "قيد",
      meetingDuration: "15 دقيقة",
      dateAdded: "29-شواال-1446هـ 10:00 م",
    },
    {
      id: "06",
      name: "عنوان",
      price: 120,
      duration: "10:00 ص",
      video: "قيد",
      meetingDuration: "15 دقيقة",
      dateAdded: "29-شواال-1446هـ 10:00 م",
    },
  ];

export default function Services() {
  const [showAddService, setShowAddService] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const paginatedData = service.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const videoClass = (video) => {
    return video === "قيد"
      ? "bg-[#F0F9FF] text-[#0095FF] border border-[#0095FF]"
      : "bg-[#FFB35C1A] text-[#FFB35C] border border-[#FFB35C]";
  };

  if(showAddService){
    return <AddService onBack={() => setShowAddService(false)} />;
  }
  return (
    <div className="bg-white p-5 mt-5 rounded-lg shadow">
      <div className="flex justify-between">
        <div>
          <h2 className="text-[#13498B] text-2xl font-bold">الخدمات</h2>
        </div>
        <div>
          <button
            onClick={() => setShowAddService(true)}
            className="flex gap-2 border border-2xl-[#F8FAFC] rounded-lg items-center py-2 px-5 cursor-pointer">
            <FaPlus />
            إضافة خدمة
          </button>
        </div>
      </div>
      <div className="px-5 mt-5">
        <table className="w-full text-right text-sm">
          <thead>
            <tr className="text-[#96A5B8] font-medium border-b">
              <th className="py-3">#</th>
              <th className="py-3">اسم الخدمة</th>
              <th className="py-3">سعر الخدمة</th>
              <th className="py-3">مدة تقديم الخدمة</th>
              <th className="py-3">الاجتماع(فيديو)</th>
              <th className="py-3">مدة الاجتماع</th>
              <th className="py-3">تاريخ الاضافة</th>
              <th className="py-3">خيارات</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((s, index) => (
              <tr
                key={s.id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="py-5">{s.id}</td>
                <td className="py-5">{s.name}</td>
                <td className="py-5 flex gap-2 items-center">
                  {s.price}
                  <img src="/watheeq/assets/img/business1.png" alt="watheeq" />
                </td>
                <td className="py-5">{s.duration}</td>
                <td className="py-5">
                  <button
                    className={`py-2 min-w-[100px] inline-block px-6 rounded-lg ${videoClass(
                      s.video
                    )}`}
                  >
                    {s.video}
                  </button>
                </td>
                <td className="py-5">{s.meetingDuration}</td>
                <td className="py-5">{s.dateAdded}</td>
                <td className="py-5 flex gap-3">
                  <div className="bg-[#464E991A] p-2 rounded-lg cursor-pointer">
                    <LuPencil stroke="#464E99" size={25} />
                  </div>
                  <div className="bg-[#F242420D] p-2 rounded-lg cursor-pointer">
                    <IoIosCloseCircleOutline fill="#F24242" size={25} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(service.length / pageSize)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
