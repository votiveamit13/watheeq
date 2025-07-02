"use client";
import { HiDotsVertical } from "react-icons/hi";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";

const professionals = [
  {
    id: "01",
    name: "محمد الشيخ",
    image: "/watheeq/assets/img/conversation1.png",
    email: "email@gmail.com",
    number: 58877777,
    request: "20",
    registrationdate: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "02",
    name: "محمد سعيد",
    image: "/watheeq/assets/img/conversation1.png",
    email: "email@gmail.com",
    number: 58877777,
    request: "20",
    registrationdate: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "03",
    name: "محمود حسن",
    image: "/watheeq/assets/img/conversation1.png",
    email: "email@gmail.com",
    number: 58877777,
    request: "20",
    registrationdate: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "04",
    name: "محمود سعدي",
    image: "/watheeq/assets/img/conversation1.png",
    email: "email@gmail.com",
    number: 58877777,
    request: "20",
    registrationdate: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "05",
    name: "محمد الشيخ",
    image: "/watheeq/assets/img/conversation1.png",
    email: "email@gmail.com",
    number: 58877777,
    request: "20",
    registrationdate: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "06",
    name: "أحمد ماضي",
    image: "/watheeq/assets/img/conversation1.png",
    email: "email@gmail.com",
    number: 58877777,
    request: "20",
    registrationdate: "29-شواال-1446هـ 10:00 م",
  },
];

export default function Professionals() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [showVerification, setShowVerification] = useState(false);

  const paginatedData = professionals.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="w-full bg-white mt-5 rounded-lg">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-right text-2xl font-bold text-[#13498B]">
          العملاء
        </h2>
      </div>
      <div className="overflow-x-auto px-5">
        <table className="w-full text-right ">
          <thead>
            <tr className="text-[#96A5B8] font-medium">
              <th className="py-2 px-3">#</th>
              <th className="py-2 px-3">اسم العميل</th>
              <th className="py-2 px-3">البريد الإلكتروني</th>
              <th className="py-2 px-3">رقم الجوال</th>
              <th className="py-2 px-3">عدد الطلبات</th>
              <th className="py-2 px-3">تاريخ التسجيل</th>
              <th className="py-2 px-3">خيارات</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((professional, index) => (
              <tr
                key={professional.id}
                className="border-b hover:bg-gray-50 transition registrationdate-200 leading-[3.1]"
              >
                <td className="py-2 px-3" >{professional.id}</td>
                <td className="py-2 px-3">
                  <div className="flex items-center justify-start">
                    <img
                      src={professional.image}
                      alt="name"
                      className="w-8 h-8 rounded-full ml-2"
                    />
                    <span className="ml-[15px] sm:ml-0 text-nowrap">{professional.name}</span>
                  </div>
                </td>
                <td className="py-2 px-3" style={{color:'#0b2b51'}}>{professional.email}</td>
                <td className="py-2 px-3" style={{color:'#6D8097'}}>{professional.number}</td>
                <td className="py-2 px-3 text-sm">{professional.request}</td>
                <td className="py-2 px-3" style={{color:'#0b2b5166'}}>{professional.registrationdate}</td>

                <td className="py-2 px-3">
                  <HiDotsVertical className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer" />
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
