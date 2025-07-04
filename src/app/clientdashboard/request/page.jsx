"use client";
import { HiDotsVertical } from "react-icons/hi";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const requests = [
  {
    id: "01",
    client: "أحمد ماضي",
    image: "/watheeq/assets/img/avatar.png",
    service: "صياغة ومراجعة العقود القانونية",
    price: 120,
    duration: "2 يوم",
    status: "قيد انتظار الموافقة",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "02",
    client: "محمد سعيد",
    image: "/watheeq/assets/img/avatar.png",
    service: "إعداد البحوث لموظفي القطاعات الحكومية",
    price: 120,
    duration: "2 يوم",
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "03",
    client: "سعيد السيد",
    image: "/watheeq/assets/img/avatar.png",
    service: "صياغة الأنظمة لحفظ حقوق جميع الأطراف",
    price: 120,
    duration: "2 يوم",
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "04",
    client: "محمد سعيد",
    image: "/watheeq/assets/img/avatar.png",
    service: "استشارات القانونية للأفراد",
    price: 120,
    duration: "2 يوم",
    status: "ملغية",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "05",
    client: "محمد سمير",
    image: "/watheeq/assets/img/avatar.png",
    service: "استشارات القانونية ",
    price: 120,
    duration: "2 يوم",
    status: "مستلمة",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "06",
    client: "محمود سعدي",
    image: "/watheeq/assets/img/avatar.png",
    service: "كتابة مذكرة",
    price: 120,
    duration: "2 يوم",
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "07",
    client: "محمود سعدي",
    image: "/watheeq/assets/img/avatar.png",
    service: "كتابة مذكرة",
    price: 120,
    duration: "2 يوم",
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
  },
];

export default function Request() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [selectedRequest, setSelectedRequest] = useState(null);

  const paginatedData = requests.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const statusClass = (status) => {
    switch (status) {
      case "قيد انتظار الموافقة":
        return "bg-[#FFB35C26] text-[#FFB35C] rounded-lg";
      case "قيد التنفيذ":
        return "bg-[#219F941A] text-[#219F94] rounded-lg";
      case "ملغية":
        return "bg-[#F242421A] text-[#F24242] rounded-lg";
      case "مستلمة":
        return "bg-[#AC39D41A] text-[#AC39D4] rounded-lg";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="w-full bg-white mt-5 rounded-lg">
      <h2 className="p-5 text-right text-2xl font-bold text-[#13498B]">
        طلباتي
      </h2>
      <div className="overflow-x-auto px-5">
      <div className="w-full overflow-x-auto">
  <table className="w-full text-right min-w-[800px]">
    <thead>
      <tr className="text-[#96A5B8] font-medium text-sm sm:text-base">
        <th className="py-2 px-3">#</th>
        <th className="py-2 px-3">اسم المهني</th>
        <th className="py-2 px-3">اسم الخدمة</th>
        <th className="py-2 px-3 ">سعر الخدمة</th>
        <th className="py-2 px-3 ">مدة تقديم الخدمة</th>
        <th className="py-2 px-3 ">حالة الطلب</th>
        <th className="py-2 px-3 ">تاريخ الطلب</th>
        <th className="py-2 px-3 ">خيارات</th>
      </tr>
    </thead>
    <tbody>
      {paginatedData.map((request, index) => (
        <tr
          key={request.id}
          className="border-b hover:bg-gray-50 transition duration-200 leading-[3.1]"
        >
          <td className="py-2 px-3 whitespace-nowrap">{request.id}</td>
          <td className="py-2 px-3">
            <div className="flex items-center justify-start min-w-[100px]">
              <img
                src={request.image}
                alt="client"
                className="w-8 h-8 rounded-full ml-2 flex-shrink-0"
              />
              <span className="truncate text-nowrap max-w-[120px] block">{request.client}</span>
            </div>
          </td>
          <td className="py-2 px-3 leading-[1.5] sm:leading-normal whitespace-nowrap">
            {request.service}
          </td>
          <td className="py-2 px-3 flex items-center gap-2 whitespace-nowrap">
            <span>{request.price}</span>
            <img
              src="/watheeq/assets/img/business1.png"
              alt="price-icon"
              className="w-4 h-4"
            />
          </td>
          <td className="py-2 px-3 whitespace-nowrap">{request.duration}</td>
          <td className="py-2 px-3">
            <span
              className={`text-xs min-w-[120px] text-center px-3 py-2 font-medium inline-block ${statusClass(
                request.status
              )}`}
              style={{ borderRadius: "10px" }}
            >
              {request.status}
            </span>
          </td>
          <td className="py-2 px-3 text-sm whitespace-nowrap">{request.date}</td>
          <td className="py-2 px-3">
            <HiDotsVertical
              className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer"
              onClick={() => setSelectedRequest(request)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
              <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(requests.length / pageSize)}
          onPageChange={setCurrentPage}
        />
    </div>
  );
}
