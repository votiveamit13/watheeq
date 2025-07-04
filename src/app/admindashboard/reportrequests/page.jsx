"use client";
import { HiDotsVertical } from "react-icons/hi";
import Pagination from "@/components/pagination/Pagination";
import { useEffect, useRef, useState } from "react";
import { CgBrowser } from "react-icons/cg";

const requests = [
  {
    id: "01",
    date: "29-شواال-1446هـ 10:00 م",
    name: "محمد حسن",
    personName: "محمود سلبم",
    comment: "هنا نص توضيحي عن سبب البلاغ",
  },
    {
    id: "02",
    date: "29-شواال-1446هـ 10:00 م",
    name: "محمود محمد",
    personName: "محمود سلبم",
    comment: "هنا نص توضيحي عن سبب البلاغ",
  },
    {
    id: "03",
    date: "29-شواال-1446هـ 10:00 م",
    name: "سليم  حسين",
    personName: "محمود على",
    comment: "هنا نص توضيحي عن سبب البلاغ",
  },
      {
    id: "04",
    date: "29-شواال-1446هـ 10:00 م",
    name: "سليم  حسين",
    personName: "محمود على",
    comment: "هنا نص توضيحي عن سبب البلاغ",
  },
];

export default function Professionals() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const [selectedRequest, setSelectedRequest] = useState(null);
  const requestRef = useRef(null);
  const paginatedData = requests.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      requestRef.current &&
      !requestRef.current.contains(event.target)
    ) {
      setSelectedRequest(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  const handleReviewClick = (professional) => {
    setSelectedRequest(professional);
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
              <th className="py-2 px-3">تاريخ الطلب</th>
              <th className="py-2 px-3">اسم مقدم الطلب</th>
              <th className="py-2 px-3">اسم المبلغ عنه</th>
              <th className="py-2 px-3">الصفحة الشخصية</th>
              <th className="py-2 px-3">ملاحظات</th>
              <th className="py-2 px-3">خيارات</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((request, index) => (
              <tr
                key={request.id}
                className="border-b hover:bg-gray-50 transition joiningdata-200"
              >
                <td className="py-2 px-3">{request.id}</td>
                <td className="py-2 px-3">
                  <div className="flex items-center justify-end w-[130px]" style={{color:'#0B2B5166'}}>
                    {request.date}
                  </div>
                </td>
                <td className="py-2 px-3" style={{color:'#0B2B51'}}>{request.name}</td>
                <td className="py-2 px-3" style={{color:'#0B2B51'}}>{request.personName}</td>
                <td className="py-2 px-3 text-sm">
                    <CgBrowser
                    color="#0A84FF" size={30}
                    className="rounded-none cursor-pointer"
                    // onClick={() => setSelectedProfessional(request)}
                    />
                </td>
                                <td className="py-2 px-3 w-[200px]" style={{color:'#0B2B51CC'}}>{request.comment}</td>
                <td className="py-2 px-3">
                  <HiDotsVertical
                    className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer"
                    onClick={() => setSelectedRequest(request)}
                  />
                  {selectedRequest?.id === request.id && (
                    <div ref={requestRef} className="absolute bg-[#ECEDF5] rounded-lg lg:left-22 left-11 z-50 shadow-md w-35 text-sm">
                      <ul className="divide-y divide-gray-200 text-right">
                        <li
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleReviewClick(request)}
                        >
                          إلغاء الطلب
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          حظر الحساب
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(requests.length / pageSize)}
          onPageChange={setCurrentPage}
        />
    </div>
  );
}
