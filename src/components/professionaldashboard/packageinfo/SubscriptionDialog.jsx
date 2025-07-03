"use client";
import React from "react";

export default function SubscriptionDialog({ open, onClose, data }) {
  if (!open) return null;

  const { name, duration, remaining, price, vat, total } = data;

  return (
    <div className="fixed inset-0 z-50 bg-[#0000007d] bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[300px] sm:w-[350px] text-right">
        <h2 className="text-xl font-bold mb-4 text-[#0B2B51]">
          الاشتراك بالباقة
        </h2>
        <div className="space-y-2 text-[#0B2B51] text-sm sm:text-base">
          <table>
            <tbody>
              <tr>
                <td className="pl-25 pb-4">اسم الباقة</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td className="pb-4">مدة الباقة</td>
                <td>{duration}</td>
              </tr>
              <tr>
                <td className="pb-4">باقي للباقة</td>
                <td>{remaining}</td>
              </tr>
              <tr>
                <td className="pb-4">سعر الباقة</td>
                <td className="flex items-center gap-2 text-[#0BB41F]">
                  {price}
                  <img src="/watheeq/assets/img/business1.png" alt="watheeq" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="pb-4">قيمة الضريبة المضافة </td>
                <td className="flex items-center gap-2">
                  {vat}
                  <img src="/watheeq/assets/img/business1.png" alt="watheeq" />
                </td>
              </tr>
              <tr>
                <td className="pb-4">الإجمالي</td>
                <td className="flex items-center gap-2 text-2xl text-[#13498B]">
                  {total}
                  <img src="/watheeq/assets/img/business1.png" alt="watheeq" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="mt-4 w-1/2 bg-[#13498B] text-white rounded-lg  font-bold py-2 hover:bg-[#093860] cursor-pointer"
            onClick={onClose}
          >
            اشترك الأن
          </button>
        </div>
      </div>
    </div>
  );
}
