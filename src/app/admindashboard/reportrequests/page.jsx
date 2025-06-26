"use client";
import { HiDotsVertical } from "react-icons/hi";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";

const professionals = [
  {
    id: "01",
    name: "أحمد ماضي",
    image: "/watheeq/assets/img/avatar.png",
    email: "ahmedmadi@gmail.com",
    number: 58877777,
    joiningdata: "29-شواال-1446هـ 10:00 م",
    services: "20",
    status: "تم المراجعة",
  },
  {
    id: "02",
    name: "أحمد سعيد",
    image: "/watheeq/assets/img/avatar.png",
    email: "ahmedmadi@gmail.com",
    number: 58877777,
    joiningdata: "29-شواال-1446هـ 10:00 م",
    services: "20",
    status: "قيد الانتظار",
  },
  {
    id: "03",
    name: "محمود حسن",
    image: "/watheeq/assets/img/avatar.png",
    email: "ahmedmadi@gmail.com",
    number: 58877777,
    joiningdata: "29-شواال-1446هـ 10:00 م",
    services: "20",
    status: "تم المراجعة",
  },
  {
    id: "04",
    name: "حسين السيد",
    image: "/watheeq/assets/img/avatar.png",
    email: "ahmedmadi@gmail.com",
    number: 58877777,
    joiningdata: "29-شواال-1446هـ 10:00 م",
    services: "20",
    status: "تم المراجعة",
  },
  {
    id: "05",
    name: "أحمد حمدي",
    image: "/watheeq/assets/img/avatar.png",
    email: "ahmedmadi@gmail.com",
    number: 58877777,
    joiningdata: "29-شواال-1446هـ 10:00 م",
    services: "20",
    status: "تم المراجعة",
  },
  {
    id: "06",
    name: "أحمد حمدي",
    image: "/watheeq/assets/img/avatar.png",
    email: "ahmedmadi@gmail.com",
    number: 58877777,
    joiningdata: "29-شواال-1446هـ 10:00 م",
    services: "20",
    status: "تم المراجعة",
  },
  {
    id: "07",
    name: "أحمد حمدي",
    image: "/watheeq/assets/img/avatar.png",
    email: "ahmedmadi@gmail.com",
    number: 58877777,
    joiningdata: "29-شواال-1446هـ 10:00 م",
    services: "20",
    status: "تم المراجعة",
  },
];

export default function Professionals() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const paginatedData = professionals.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );



  const handleReviewClick = (professional) => {
    setSelectedProfessional(professional);
  };


  return (
    <div className="w-full bg-white mt-5 rounded-lg">

      <div className="flex items-center justify-between p-5">
        <h2 className="text-right text-2xl font-bold text-[#13498B]">
          طلبات البلاغات
        </h2>
      </div>
      <div className="overflow-x-auto px-5">
        <table className="w-full text-right ">
          <thead>
            <tr className="text-[#96A5B8] font-medium">
              <th className="py-2 px-3">#</th>
              <th className="py-2 px-3">اسم المهني</th>
              <th className="py-2 px-3">البريد الالكتروني</th>
              <th className="py-2 px-3">رقم الجوال</th>
              <th className="py-2 px-3">تاريخ الانضمام</th>
              <th className="py-2 px-3">عدد الخدمات</th>
              <th className="py-2 px-3">الحالة</th>
              <th className="py-2 px-3">خيارات</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((professional, index) => (
              <tr
                key={professional.id}
                className="border-b hover:bg-gray-50 transition joiningdata-200 leading-[3.1]"
              >
                <td className="py-2 px-3">{professional.id}</td>
                <td className="py-2 px-3">
                  <div className="flex items-center justify-end">
                    <img
                      src={professional.image}
                      alt="name"
                      className="w-8 h-8 rounded-full ml-2"
                    />
                    <span className="text-nowrap">{professional.name}</span>
                  </div>
                </td>
                <td className="py-2 px-3">{professional.email}</td>
                <td className="py-2 px-3">{professional.number}</td>
                <td className="py-2 px-3">{professional.joiningdata}</td>
                <td className="py-2 px-3 text-sm">{professional.services}</td>
                <td className="py-2 px-3">
                  <span
                    className={`text-xs min-w-[120px] text-center px-3 py-2 font-medium inline-block ${statusClass(
                      professional.status
                    )}`}
                    style={{ borderRadius: "10px" }}
                  >
                    {professional.status}
                  </span>
                </td>
                <td className="py-2 px-3">
                  <HiDotsVertical
                    className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer"
                    onClick={() => setSelectedProfessional(professional)}
                  />
                  {selectedProfessional?.id === professional.id && (
                    <div className="absolute bg-[#ECEDF5] rounded-lg left-25 z-50 shadow-md w-35 text-sm">
                      <ul className="divide-y divide-gray-200 text-right">
                        <li
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleReviewClick(professional)}
                        >
                          مراجعة البيانات
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          تعطيل الحساب
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(professionals.length / pageSize)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
