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
        <table className="w-full text-right ">
          <thead>
            <tr className="text-[#96A5B8] font-medium">
              <th className="py-2 px-3">#</th>
              <th className="py-2 px-3">العميل</th>
              <th className="py-2 px-3">اسم الخدمة</th>
              <th className="py-2 px-3">سعر الخدمة</th>
              <th className="py-2 px-3">مدة تقديم الخدمة</th>
              <th className="py-2 px-3">حالة الطلب</th>
              <th className="py-2 px-3">تاريخ الطلب</th>
              <th className="py-2 px-3">خيارات</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((order, index) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition duration-200 leading-[3.1]"
                >
                <td className="py-2 px-3">{order.id}</td>
                <td className="py-2 px-3">
                  <div className="flex items-center justify-end">
                    <img
                      src={order.image}
                      alt="client"
                      className="w-8 h-8 rounded-full ml-2"
                    />
                    <span className="text-nowrap">{order.client}</span>
                  </div>
                </td>
                <td className="py-2 px-3">{order.service}</td>
                <td className="py-2 px-3 flex items-center gap-2">
                  <span>{order.price}</span>
                  <img
                    src="/watheeq/assets/img/business1.png"
                    alt="price-icon"
                    className="w-4 h-4"
                  />
                </td>
                <td className="py-2 px-3">{order.duration}</td>
                <td className="py-2 px-3">
                  <span
                    className={`text-xs min-w-[120px] text-center px-3 py-2 font-medium inline-block ${statusClass(
                      order.status
                    )}`}
                  style={{borderRadius:'10px'}}>
                    {order.status}
                  </span>
                </td>

                <td className="py-2 px-3 text-sm">{order.date}</td>
                <td className="py-2 px-3">
                  <HiDotsVertical
                    className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer"
                    onClick={() => setSelectedOrder(order)}
                  />
                  {selectedOrder && (
                    <div className="fixed inset-0 bg-[#0000001a] bg-opacity-30 flex justify-center items-center z-50">
                      <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <div>
                          <h2 className="text-xl font-bold text-center text-[#13498B] mb-4">
                            طلب خدمة
                          </h2>
                        </div>
                        <div className="flex w-full justify-between">
                          <div className="flex items-center">
                            <div>
                              <img
                                src="/watheeq/assets/img/conversation1.png"
                                alt="watheeq"
                              />
                            </div>
                            <div className="mr-2">
                              <span>{selectedOrder.client}</span>
                            </div>
                          </div>
                          <div>
                          <button className="flex gap-1 items-center w-[130px] h-[40px] py-0 px-0 border justify-center bg-[#F8FAFC] rounded-lg cursor-pointer">
                          <FaPlus />
                              انشاء محادثة
                            </button>
                          </div>
                        </div>
                        <hr className="mt-3" />
                        <div>
                          <table>
                            <tbody>
                              <tr>
                                <td className="font-bold text-xl py-2">الخدمة</td>
                                <td className="px-5">{selectedOrder.service}</td>
                              </tr>
                              <tr>
                                <td className="font-bold text-xl py-2">مدة تقديم الخدمة</td>
                                <td className="px-5">{selectedOrder.duration}</td>
                              </tr>
                              <tr>
                                <td className="font-bold text-xl py-2">سعر الخدمة</td>
                                <td className="px-5">{selectedOrder.price}</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="mt-5 font-bold text-xl">تفاصيل الخدمة</p>
                          <span>
                            نقدّم خدمات صياغة ومراجعة العقود القانونية بدقة
                            واحترافية تضمن وضوح الحقوق والالتزامات وتقلل من
                            النزاعات المستقبلية.
                          </span>
                        </div>
                        <div className="flex justify-center gap-5 mt-5">
                          <button
                            className="flex bg-[#F8FAFC] text-[#13498B] w-[130px] h-[40px] justify-center border rounded-lg font-bold cursor-pointer"
                            onClick={() => setSelectedOrder(null)}
                            style={{alignItems:'center'}}>
                            رفض
                          </button>
                          <button
                            className="flex bg-[#13498B] text-white w-[130px] h-[40px] justify-center rounded-lg font-bold cursor-pointer"
                            onClick={() => setSelectedOrder(null)}
                           style={{alignItems:'center'}}>
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

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(orders.length / pageSize)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
