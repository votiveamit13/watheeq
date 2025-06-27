"use client";
import Pagination from "@/components/pagination/Pagination";
import { Switch } from "@/components/ui/Switch";
import { useState } from "react";

const professionals = [
  {
    id: "01",
    name: "ايداع محفظة",
    professionalName: "أحمد ماضي",
    amount: 200,
    history: "29-شواال-1446هـ 10:00 م",
    status: "تمت",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "02",
    name: "سحب محفظة",
    professionalName: "أحمد ماضي",
    amount: -200,
    history: "29-شواال-1446هـ 10:00 م",
    status: "تمت",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "03",
    name: "ايداع محفظة",
    professionalName: "أحمد ماضي",
    amount: 200,
    history: "29-شواال-1446هـ 10:00 م",
    status: "تمت",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "04",
    name: "دفع  الباقة ",
    professionalName: "أحمد ماضي",
    amount: -300,
    history: "29-شواال-1446هـ 10:00 م",
    status: "ملغية",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "05",
    name: "دفع  الباقة ",
    professionalName: "أحمد ماضي",
    amount: -300,
    history: "29-شواال-1446هـ 10:00 م",
    status: "ملغية",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
];

const clients = [
  {
    id: "01",
    name: "رسوم خدمة",
    clientName: "محمود سعدي",
    amount: -90,
    history: "29-شواال-1446هـ 10:00 م",
    status: "تمت",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "02",
    name: "رسوم منصة",
    clientName: "محمد الشيخ",
    amount: -21,
    history: "28-03-2025 11:00 ص",
    status: "تمت",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "03",
    name: "حجز موعد",
    clientName: "محمد حسن",
    amount: -80,
    history: "28-03-2025 11:00 ص",
    status: "تمت",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "04",
    name: "حجز موعد",
    clientName: "محمد حسن",
    amount: -80,
    history: "28-03-2025 11:00 ص",
    status: "تمت",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "05",
    name: "حجز موعد",
    clientName: "محمد حسن",
    amount: -80,
    history: "28-03-2025 11:00 ص",
    status: "تمت",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
];

export default function Payments() {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const paginatedData = professionals.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

    const clientsData = clients.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSwitchToggle = (value) => {
    setSelectedOption(value);
  };

  const statusClasses = (status) => {
    return status === "تمت"
      ? "bg-[#F0F9FF] text-[#0095FF] border border-[#0095FF]"
      : "bg-[#F2424226] text-[#F24242] border border-[#F24242]";
  };

  const getAmountColor = (amount) => {
    return amount >= 0 ? "text-green-500" : "text-red-500";
  };

  return (
    <div className="bg-white mt-5 p-5 rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">المدفوعات</h2>
        <div className="mb-6 [&_div]:rounded-[16px] [&_div]:px-5 ">
          <div className="[&_button]:w-40 [&_button]:text-[17px] font-bold [&_button]:px-2 [&_button]:py-3 [&_button]:rounded-[12px]">
            <Switch
              optionRight={"المهنيين"}
              optionLeft={"العملاء"}
              onToggle={handleSwitchToggle}
            />
          </div>
        </div>
      </div>
      <div className="px-5">
        {selectedOption === "monthly" ? (
          <div className="overflow-x-auto px-5">
            <table className="w-full text-right text-sm">
              <thead>
                <tr className="text-[#96A5B8] font-medium border-b">
                  <th className="py-5 px-3">#</th>
                  <th className="py-5 px-3">اسم الحركة</th>
                  <th className="py-5 px-3">اسم المهني</th>
                  <th className="py-5 px-3">المبلغ</th>
                  <th className="py-5 px-3">تاريخ الحركة</th>
                  <th className="py-5 px-3">الحالة</th>
                  <th className="py-5 px-3">ملاحظات</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((t, index) => (
                  <tr
                    key={t.id}
                    className="border-b hover:bg-gray-50 transition duration-200"
                  >
                    <td className="py-5 px-3">{t.id}</td>
                    <td className="py-5 px-3">{t.name}</td>
                    <td className="py-5 px-3">{t.professionalName}</td>
                    <td
                      className={`flex gap-1 py-5 px-3 font-semibold ${getAmountColor(
                        t.amount
                      )}`}
                    >
                      {t.amount >= 0
                        ? `${t.amount}+`
                        : `${Math.abs(t.amount)}-`}

                      <img
                        src="/watheeq/assets/img/business1.png"
                        alt="watheeq"
                      />
                    </td>
                    <td className="py-5 px-3 text-[#6B7280]">{t.history}</td>
                    <td className="py-5 px-3">
                      <span
                        className={`text-center inline-block min-w-[100px] px-3 py-1 rounded-lg font-semibold text-sm ${statusClasses(
                          t.status
                        )}`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="py-5 px-3 text-[#6B7280]">{t.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto px-5">
            <table className="w-full text-right text-sm">
              <thead>
                <tr className="text-[#96A5B8] font-medium border-b">
                  <th className="py-5 px-3">#</th>
                  <th className="py-5 px-3">اسم الحركة</th>
                  <th className="py-5 px-3">اسم العميل</th>
                  <th className="py-5 px-3">المبلغ</th>
                  <th className="py-5 px-3">تاريخ الحركة</th>
                  <th className="py-5 px-3">الحالة</th>
                  <th className="py-5 px-3">ملاحظات</th>
                </tr>
              </thead>
              <tbody>
                {clientsData.map((t, index) => (
                  <tr
                    key={t.id}
                    className="border-b hover:bg-gray-50 transition duration-200"
                  >
                    <td className="py-5 px-3">{t.id}</td>
                    <td className="py-5 px-3">{t.name}</td>
                    <td className="py-5 px-3">{t.clientName}</td>
                    <td
                      className={`flex gap-1 py-5 px-3 font-semibold ${getAmountColor(
                        t.amount
                      )}`}
                    >
                      {t.amount >= 0
                        ? `${t.amount}+`
                        : `${Math.abs(t.amount)}-`}

                      <img
                        src="/watheeq/assets/img/business1.png"
                        alt="watheeq"
                      style={{width:'15px',height:'15px',marginTop:'4px'}}/>
                    </td>
                    <td className="py-5 px-3 text-[#6B7280]">{t.history}</td>
                    <td className="py-5 px-3">
                      <span
                        className={`text-center inline-block min-w-[100px] px-3 py-1 rounded-lg font-semibold text-sm ${statusClasses(
                          t.status
                        )}`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="py-5 px-3 text-[#6B7280]">{t.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(professionals.length / pageSize)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
