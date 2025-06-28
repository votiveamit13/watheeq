"use client";
import { useState } from "react";
import { LuRefreshCw } from "react-icons/lu";

export default function PackageInfotmation({
  name,
  duration,
  price,
  type,
  date,
}) {
  const [renewDialog, setRenewDialog] = useState(false);
  const [balanceDialog, setBalanceDialog] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">معلومات الباقة</h2>
        </div>
        <div>
          <button
            className="flex items-center gap-3 bg-[#13498B] rounded-lg text-white py-2 px-5 cursor-pointer"
            onClick={() => setRenewDialog(true)}
          >
            تجديد الباقة
            <LuRefreshCw />
          </button>
          {renewDialog && (
            <div className="fixed inset-0 bg-[#0000007d] bg-opacity-30 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-xl font-bold text-center text-[#13498B] mb-4">
                  تجديد الاشتراك
                </h2>
              <div>
                <table className="text-[#0B2B51] text-xl mb-5">
                    <tbody>
                        <tr>
                            <td className="pl-30 pb-3">اسم الباقة</td>
                            <td>باقة وثيق 1</td>
                        </tr>
                        <tr>
                            <td className="pb-3">مدة الباقة</td>
                            <td>1 شهر</td>
                        </tr>
                        <tr>
                            <td className="pb-3">سعر الباقة</td>
                            <td className="text-[#0BB41F] flex items-center gap-2">
                                45
                                <img src="/watheeq/assets/img/business1.png" alt="watheeq"/>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="pb-3">قيمة الضريبة المضافة </td>
                            <td className="flex items-center gap-2">
                                6
                                <img src="/watheeq/assets/img/business1.png" alt="watheeq"/>
                            </td>
                        </tr>
                        <tr>
                            <td className="pb-3">الإجمالي</td>
                            <td className="text-[#13498B] flex font-bold text-2xl items-center gap-2">
                                51
                                <img src="/watheeq/assets/img/business1.png" alt="watheeq"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-center gap-5 w-full pr-10 pl-10">
                    <button className="bg-[#13498B] text-white w-full py-2 px-7 rounded-lg cursor-pointer" onClick={() => {setBalanceDialog(true), setRenewDialog(false)}}>تجديد</button>
                    <button className="text-[#F24242] py-2 px-7 w-full rounded-lg border border-[#F2424280] cursor-pointer" onClick={() => setRenewDialog(false)}>إلغاء الاشتراك</button>
                </div>
              </div>
              </div>
            </div>
          )}
          {balanceDialog && (
            <div className="fixed inset-0 bg-[#0000007d] bg-opacity-30 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-md text-center">
                <h2 className="text-xl font-bold text-center text-[#13498B] mt-5 mb-7">
                  تجديد الاشتراك
                </h2>
                <p className="mb-15">لا يوجد رصيد كافي </p>
                </div>
                </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <table className="text-[20px]">
          <tbody>
            <tr>
              <td className="pl-25 pb-3">اسم الباقة</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td className="pl-25 pb-3">مدة الباقة</td>
              <td>{duration}</td>
            </tr>
            <tr>
              <td className="pl-25 pb-3">سعر الباقة</td>
              <td className="text-[#0BB41F] flex items-center gap-1">
                <img src="/watheeq/assets/img/business1.png" alt="watheeq" />
                {price}
              </td>
            </tr>
            <tr>
              <td className="pl-25 pb-3">نوع الاشتراك</td>
              <td>{type}</td>
            </tr>
            <tr>
              <td className="pl-25 pb-3">تاريخ التجديد</td>
              <td>{date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
