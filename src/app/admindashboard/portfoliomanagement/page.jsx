"use client";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

const portfolios = [
  {
    id: "01",
    name: "أحمد ماضي",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    profit: "120",
    pendingbalance: "20",
  },
  {
    id: "02",
    name: "أحمد ماضي",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    profit: "120",
    pendingbalance: "20",
  },
  {
    id: "03",
    name: "أحمد ماضي",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    profit: "120",
    pendingbalance: "20",
  },
  {
    id: "04",
    name: "أحمد ماضي",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    profit: "120",
    pendingbalance: "20",
  },
];

export default function PortfolioManagement() {
  const [reminder, setReminder] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const paginatedData = portfolios.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <div className="bg-white mt-5 p-5 rounded-lg flex flex-between  items-center gap-10">
        <div className="w-full bg-white shadow py-3 px-6 rounded-lg">
          <div>
            <p className="text-2xl font-bold mb-3">أجمالي الأرباح</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <p className="text-3xl">20,000</p>
            <img
              src="/watheeq/assets/img/business1.png"
              alt="watheeq"
              className="w-[20px] h-[25]"
            />
          </div>
        </div>
        <div className="w-full bg-white shadow py-3 px-6 rounded-lg">
          <div>
            <p className="text-2xl font-bold mb-3">الأرصدة المعلقة</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <p className="text-3xl">2300</p>
            <img
              src="/watheeq/assets/img/business1.png"
              alt="watheeq"
              className="w-[20px] h-[25]"
            />
          </div>
        </div>
        <div className="w-full bg-white shadow py-3 px-6 rounded-lg">
          <div>
            <p className="text-2xl font-bold mb-3">رسوم المنصة</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <p className="text-3xl">21</p>
            <img
              src="/watheeq/assets/img/business1.png"
              alt="watheeq"
              className="w-[20px] h-[25]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white mt-5 p-5 rounded-lg">
        <h2 className="text-2xl font-bold">ادارة محافظ المهنيين</h2>
        <div className="overflow-x-auto px-5">
          <table className="w-[95%] text-right ">
            <thead>
              <tr className="text-[#96A5B8] font-medium">
                <th className="py-2 px-3">#</th>
                <th className="py-2 px-3">اسم المهني</th>
                <th className="py-2 px-3">تاريخ الاشتراك</th>
                <th className="py-2 px-3">الأرباح</th>
                <th className="py-2 px-3">الرصيد المعلق</th>
                <th className="py-2 px-3">خيارات</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((portfolio, index) => (
                <tr
                  key={portfolio.id}
                  className="border-b hover:bg-gray-50 transition joiningdata-200"
                >
                  <td className="py-2 px-3">{portfolio.id}</td>
                  <td className="py-2 px-3 w-[180px]">
                    <div className="flex items-center justify-start">
                      <img
                        src={portfolio.image}
                        alt="name"
                        className="w-8 h-8 rounded-full ml-2"
                      />
                      <span className="text-nowrap">{portfolio.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-[#0B2B5166] w-[130px]">
                    {portfolio.subscriptiondate}
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex items-center justify-start">
                      <span className="text-nowrap text-[#13498B] font-bold">
                        {portfolio.profit}
                      </span>
                      <img
                        src="/watheeq/assets/img/business1.png"
                        alt="watheeq"
                        className="ml-2"
                      />
                    </div>
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex items-center justify-start">
                      <span className="text-nowrap text-[#F24242] font-bold">
                        {portfolio.pendingbalance}
                      </span>
                      <img
                        src="/watheeq/assets/img/business1.png"
                        alt="watheeq"
                        className="ml-2"
                      />
                    </div>
                  </td>

                  <td className="py-2 px-3">
                    <HiDotsVertical
                      className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer"
                      onClick={() => setReminder(portfolio)}
                    />
                    {reminder?.id === portfolio.id && (
                      <div className="absolute bg-[#ECEDF5] text-[#13498B] rounded-lg left-25">
                        <p
                          className="py-2 px-7 hover:bg-gray-100 cursor-pointer"
                          onClick={() => setShowDialog(true)}
                        >
                          تعديل رصيد
                        </p>

                        {showDialog && (
                          <div className="fixed inset-0 flex items-center justify-center bg-[#0000007d] z-50">
                            <div className="bg-white w-[600px] rounded-xl p-8 relative">
                              <h2 className="text-2xl font-bold text-center text-[#13498B] mb-4">
                                إدارة المحفظة
                              </h2>
                              <label className="text-xl">
                                عنوان الباقة
                              </label>
                              <div className="relative mt-3 mb-8">
                                <input
                                  type="text"
                                  placeholder="120"
                                  className="w-full pr-10 rounded-lg p-3 bg-white border border-[#13498b40]"
                                />
                                <img
                                  src="/watheeq/assets/img/business1.png"
                                  alt="watheeq"
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"
                                />
                              </div>

                              <label className="text-xl">
                                الرصيد المعلق
                              </label>
                              <div className="relative mt-3">
                                <input
                                  type="text"
                                  placeholder="120"
                                  className="w-full pr-10 rounded-lg p-3 bg-white border border-[#13498b40]"
                                />
                                <img
                                  src="/watheeq/assets/img/business1.png"
                                  alt="watheeq"
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"
                                />
                              </div>

                              <div className="flex justify-center items-center gap-5 mt-15">
                                <button className="cursor-pointer w-[100px] bg-[#13498B] text-white py-2 px-6 rounded" onClick={() => setShowDialog(false)}>تعديل</button>
                                <button className="cursor-pointer w-[100px] py-2 px-6 rounded border border-[#13498B99]" onClick={() => setShowDialog(false)}>الغاء</button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(portfolios.length / pageSize)}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
