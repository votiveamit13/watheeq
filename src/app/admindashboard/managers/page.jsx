"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";

const managers = [
  {
    id: "01",
    name: "محمد عبد العزيز",
    image: "/watheeq/assets/img/avatar.png",
    mail: "ahmedmadi@gmail.com",
    number: "+94711000000",
    title: "مالك",
  },
    {
    id: "02",
    name: "منير العلمي",
    image: "/watheeq/assets/img/avatar.png",
    mail: "monirAlmi@gmail.com",
    number: "+99471050000",
    title: "ادمن",
  },
    {
    id: "03",
    name: "سارة عريفي",
    image: "/watheeq/assets/img/avatar.png",
    mail: "sararefi@gmail.com",
    number: "+94711000000",
    title: "ادمن",
  },
    {
    id: "04",
    name: "محمد عبد العزيز",
    image: "/watheeq/assets/img/avatar.png",
    mail: "ahmedmadi@gmail.com",
    number: "+94711000000",
    title: "ادمن",
  },
    {
    id: "05",
    name: "محمد عبد العزيز",
    image: "/watheeq/assets/img/avatar.png",
    mail: "ahmedmadi@gmail.com",
    number: "+94711000000",
    title: "ادمن",
  },
];

export default function Managers() {
    const [showDialog, setShowDialog] = useState(false);
     const [reminder, setReminder] = useState(null);
  return (
    <div className="bg-white mt-5 p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">المدراء</h2>
        </div>
        <div>
          <button className="cursor-pointer flex gap-5 items-center bg-[#F8FAFC] border border-[#13498B80] py-2 px-5 rounded-lg">
            <FaPlus />
            إضافة  مدير
          </button>
        </div>
      </div>

      <div className="overflow-x-auto px-5">
                <table className="w-[95%] text-right ">
                  <thead>
                    <tr className="text-[#96A5B8] font-medium">
                      <th className="py-2 px-3">#</th>
                      <th className="py-2 px-3">اسم المدير</th>
                      <th className="py-2 px-3">البريد</th>
                      <th className="py-2 px-3">رقم الجوال</th>
                      <th className="py-2 px-3">المسمى</th>
                      <th className="py-2 px-3">خيارات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {managers.map((manager, index) => (
                      <tr
                        key={manager.id}
                        className="border-b hover:bg-gray-50 transition joiningdata-200"
                      >
                        <td className="py-2 px-3">{manager.id}</td>
                        <td className="py-2 px-3 ">
                          <div className="flex items-center justify-start">
                            <img
                              src={manager.image}
                              alt="name"
                              className="w-8 h-8 rounded-full ml-2"
                            />
                            <span className="text-nowrap">{manager.name}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 text-[#0B2B5166] ">
                          {manager.mail}
                        </td>
                        <td className="py-2 px-3" dir="ltr">

                              {manager.number}

                        </td>
                        <td className="py-2 px-3">

                              {manager.title}

                        </td>

                        <td className="py-2 px-3">
                          <HiDotsVertical
                            className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer"
                            onClick={() => setReminder(manager)}
                          />
                          {reminder?.id === manager.id && (
                            <div className="absolute bg-[#ECEDF5] text-[#13498B] rounded-lg left-8">
                              <p
                                className="py-2 px-7 hover:bg-gray-100 cursor-pointer"
                               onClick={() => setShowDialog(true)}
                              >
                                تعديل البيانات
                              </p>
                              <p
                                className="py-2 px-7 hover:bg-gray-100 cursor-pointer"
                               onClick={() => setShowDialog(true)}
                              >
                                حذف الادمن
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

              </div>
    </div>
  );
}
