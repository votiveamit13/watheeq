"use client";
import { useState } from "react";
import { PiUpload } from "react-icons/pi";
import { TbFileCertificate } from "react-icons/tb";

export default function AddService({ onBack }) {
  const [pricingType, setPricingType] = useState("");
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <div className="bg-white mt-5 rounded-lg p-5 relative mb-30">
      <div className="lg:flex block justify-between items-center mb-6">
        <div
          className="flex items-center  mb-6 text-right"
          dir="rtl"
        >
          <button
            onClick={onBack}
            className="text-[#0B2B51] font-semibold text-2xl hover:underline cursor-pointer"
          >
            الخدمات
          </button>
          <span className="text-[#0B2B51] font-semibold text-2xl">
            &nbsp;&gt; إضافة خدمة
          </span>
        </div>
        <button className="bg-[#13498B] text-white px-10 font-bold py-2 rounded-lg cursor-pointer">
          حفظ
        </button>
      </div>

      <form className="grid grid-cols-2 gap-6 text-right mb-5" dir="rtl">
        <div className="col-span-2">
          <label className="block mb-1 text-lg text-[#0B2B51]">
            اسم الخدمة
          </label>
          <input
            type="text"
            placeholder="الاسم"
            className="lg:w-1/2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        <div className="col-span-2">
          <div className="lg:w-1/2 w-full">
            <label className="w-full block mb-3 text-lg text-[#0B2B51]">
              صورة توضيحية
            </label>
            <div className="flex flex-col sm:flex-row gap-2 rtl:flex-row-reverse">
              <div className="w-[100px] h-[52px] border border-[#13498b40] rounded-lg flex items-center justify-center">
                <PiUpload className="top-1/2 w-10 h-8" />
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="imageLink"
                  placeholder="رابط الصورة"
                  className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  style={{ border: "1px solid #13498b40" }}
                />
                <TbFileCertificate className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B] w-6 size-10" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <label className="block mb-1 text-lg text-[#0B2B51]">
            وصف الخدمة
          </label>
          <textarea
            rows="4"
            placeholder="الوصف"
            className="lg:w-1/2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          ></textarea>
        </div>

        <div className="col-span-2">
          <label className="block mb-2 text-lg text-[#0B2B51]">
            سعر الخدمة
          </label>
          <div className="flex items-center gap-6 flex-wrap leading-1">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="pricing"
                value="free"
                checked={pricingType === "free"}
                onChange={() => setPricingType("free")}
              />
              خدمة مجانية
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="pricing"
                value="fixed"
                checked={pricingType === "fixed"}
                onChange={() => setPricingType("fixed")}
              />
              خدمة بسعر
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="pricing"
                value="quote"
                checked={pricingType === "quote"}
                onChange={() => {
                  setPricingType("quote");
                  setShowQuoteModal(true);
                }}
              />
              خدمة بعرض سعر
            </label>
          </div>

          {pricingType === "fixed" && (
            <div className="mt-3 relative">
              <span className="absolute inset-y-0 right-8 flex items-center pr-3 text-gray-500">
                <img src="/watheeq/assets/img/business1.png" alt="watheeq" />
              </span>
              <input
                type="number"
                defaultValue={120}
                className="lg:w-1/2 w-full border rounded-lg px-4 p-3 text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>

        {pricingType !== "quote" && (
          <>
            <div className="col-span-2">
              <label className="block mb-2 text-sm text-[#0B2B51]">
                مدة تقديم الخدمة
              </label>
              <div className="flex items-center gap-6 flex-wrap">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  محددة بوقت
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  غير محددة
                </label>
              </div>
              <div className="mt-3">
                <select className="lg:w-1/2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none">
                  <option>حدد الوقت</option>
                </select>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block mb-2 text-sm text-[#0B2B51]">
                الاجتماع (فيديو)
              </label>
              <div className="flex items-center gap-6 flex-wrap">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  قيد
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  اختياري
                </label>
              </div>
              <div className="mt-3">
                <select className="lg:w-1/2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none">
                  <option>اختر مدة الاجتماع فيديو</option>
                </select>
              </div>
            </div>
          </>
        )}
      </form>

      {showQuoteModal && (
        <div className="fixed inset-0 z-50 bg-[#0000007d] bg-opacity-30 flex items-center justify-center">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-right"
            dir="rtl"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-4 text-[#0B2B51]">
                خدمة بعرض سعر
              </h2>
              <button
                className="cursor-pointer bg-[#13498B] text-white rounded-lg py-2 px-7"
                onClick={() => setShowQuoteModal(false)}
              >
                حفظ
              </button>
            </div>
            <div className="col-span-2 mb-5">
              <label className="block mb-1 text-lg text-[#0B2B51]">
                الخدمة
              </label>

              <div className="mt-3">
                <select className="w-full text-gray-400 border border-gray-300 rounded-lg p-3 focus:outline-none">
                  <option>اختر الخدمة</option>
                </select>
              </div>
            </div>

                        <div className="col-span-2 mb-5">
              <label className="block mb-1 text-lg text-[#0B2B51]">
                مدة تقديم الخدمة
              </label>

              <div className="mt-3">
                <select className="w-full border text-gray-400 border-gray-300 rounded-lg p-3 focus:outline-none">
                  <option>حدد الوقت</option>
                </select>
              </div>
            </div>

            <label className="block mb-1 text-lg text-[#0B2B51]">
              سعر الخدمة
            </label>
            <div className="flex justify-end gap-3 w-full mb-5">
              <div className="mt-3 relative w-full">
                <span className="absolute inset-y-0 right-8 flex items-center pr-3 text-gray-500">
                  <img src="/watheeq/assets/img/business1.png" alt="watheeq" />
                </span>
                <input
                  type="number"
                  defaultValue={120}
                  className="w-full border rounded-lg px-4 p-3 text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-lg text-[#0B2B51]">
                تفاصيل الخدمة
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              ></textarea>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
