"use client";
import { HiDotsVertical } from "react-icons/hi";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const orders = [
  {
    id: "01",
    client: "سعيد الشيخ",
    image: "/watheeq/assets/img/conversation1.png",
    service: "صياغة ومراجعة العقود القانونية",
    price: 120,
    duration: "2 يوم",
    status: "قيد انتظار الموافقة",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "02",
    client: "محمد سعيد",
    image: "/watheeq/assets/img/conversation1.png",
    service: "إعداد البحوث لموظفي القطاعات الحكومية",
    price: 120,
    duration: "2 يوم",
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "03",
    client: "سعيد السيد",
    image: "/watheeq/assets/img/conversation1.png",
    service: "صياغة ومراجعة العقود القانونية",
    price: 120,
    duration: "2 يوم",
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "04",
    client: "سعيد الشيخ",
    image: "/watheeq/assets/img/conversation1.png",
    service: "صياغة الأنظمة لحفظ حقوق جميع الأطراف",
    price: 120,
    duration: "2 يوم",
    status: "قيد انتظار الموافقة",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "05",
    client: "محمود سليم",
    image: "/watheeq/assets/img/conversation1.png",
    service: "صياغة ومراجعة العقود القانونية",
    price: 120,
    duration: "2 يوم",
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "06",
    client: "سعيد محمود",
    image: "/watheeq/assets/img/conversation1.png",
    service: "استشارات القانونية للأفراد",
    price: 120,
    duration: "2 يوم",
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "07",
    client: "سعيد محمود",
    image: "/watheeq/assets/img/conversation1.png",
    service: "استشارات القانونية للأفراد",
    price: 120,
    duration: "2 يوم",
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
  },
];

export default function Business() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [selectedOrder, setSelectedOrder] = useState(null);

  const paginatedData = orders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const statusClass = (status) => {
    return status === "قيد التنفيذ"
      ? "bg-[#e8f9f1] text-[#33cc8c]"
      : "bg-[#fef3e5] text-[#f39c12]";
  };

  return (
    <div className="w-full bg-white mt-5 rounded-lg">
      <h2 className="p-5 text-right text-2xl font-bold text-[#13498B]">
        طلباتي
      </h2>
      <div className="overflow-x-auto px-5">
      <div className="w-full overflow-x-auto">
  <table className="w-full min-w-[900px] text-right text-sm">
    <thead>
      <tr className="text-[#96A5B8] font-medium">
        <th className="py-3 px-3">#</th>
        <th className="py-3 px-3">العميل</th>
        <th className="py-3 px-3">اسم الخدمة</th>
        <th className="py-3 px-3">سعر الخدمة</th>
        <th className="py-3 px-3">مدة تقديم الخدمة</th>
        <th className="py-3 px-3">حالة الطلب</th>
        <th className="py-3 px-3">تاريخ الطلب</th>
        <th className="py-3 px-3">خيارات</th>
      </tr>
    </thead>
    <tbody>
      {paginatedData.map((order) => (
        <tr
          key={order.id}
          className="border-b hover:bg-gray-50 transition duration-200"
        >
          <td className="py-3 px-3">{order.id}</td>
          <td className="py-3 px-3">
            <div className="flex items-center justify-end gap-2">
              <img
                src={order.image}
                alt="client"
                className="w-8 h-8 rounded-full"
              />
              <span className="whitespace-nowrap">{order.client}</span>
            </div>
          </td>
          <td className="py-3 px-3 w-[180px]">{order.service}</td>
          <td className="py-3 px-3">
            <div className="flex items-center gap-2 justify-center">
              <span>{order.price}</span>
              <img
                src="/watheeq/assets/img/business1.png"
                alt="price-icon"
                className="w-4 h-4"
              />
            </div>
          </td>
          <td className="py-3 px-3 text-center">{order.duration}</td>
          <td className="py-3 px-3">
            <span
              className={`text-xs min-w-[120px] text-center px-3 py-2 font-medium inline-block ${statusClass(order.status)}`}
              style={{ borderRadius: '10px' }}
            >
              {order.status}
            </span>
          </td>
          <td className="py-3 px-3 text-sm w-[120px]">{order.date}</td>
          <td className="py-3 px-3">
            <HiDotsVertical
              className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer"
              onClick={() => setSelectedOrder(order)}
            />
            {selectedOrder && (
              <div className="fixed inset-0 bg-[#0000001a] bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
                  <h2 className="text-xl font-bold text-center text-[#13498B]">
                    طلب خدمة
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src="/watheeq/assets/img/conversation1.png"
                        alt="watheeq"
                        className="w-10 h-10"
                      />
                      <span>{selectedOrder.client}</span>
                    </div>
                    <button className="flex gap-1 items-center w-[130px] h-[40px] py-0 px-0 border justify-center bg-[#F8FAFC] rounded-lg cursor-pointer">
                      <FaPlus />
                      انشاء محادثة
                    </button>
                  </div>
                  <hr />
                  <table className="w-full text-right">
                    <tbody>
                      <tr>
                        <td className="font-bold text-sm py-2">الخدمة</td>
                        <td className="px-5 text-sm">{selectedOrder.service}</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-sm py-2">مدة تقديم الخدمة</td>
                        <td className="px-5 text-sm">{selectedOrder.duration}</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-sm py-2">سعر الخدمة</td>
                        <td className="px-5 text-sm">{selectedOrder.price}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <p className="mt-3 font-bold text-sm">تفاصيل الخدمة</p>
                    <span className="text-sm leading-relaxed block">
                      نقدّم خدمات صياغة ومراجعة العقود القانونية بدقة واحترافية
                      تضمن وضوح الحقوق والالتزامات وتقلل من النزاعات المستقبلية.
                    </span>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button
                      className="bg-[#F8FAFC] text-[#13498B] w-[130px] h-[40px] flex items-center justify-center border rounded-lg font-bold cursor-pointer"
                      onClick={() => setSelectedOrder(null)}
                    >
                      رفض
                    </button>
                    <button
                      className="bg-[#13498B] text-white w-[130px] h-[40px] flex items-center justify-center rounded-lg font-bold cursor-pointer"
                      onClick={() => setSelectedOrder(null)}
                    >
                      قبول
                    </button>
                  </div>
                </div>
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
          totalPages={Math.ceil(orders.length / pageSize)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
