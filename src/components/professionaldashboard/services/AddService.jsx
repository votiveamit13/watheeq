"use client";
import { PiUpload } from "react-icons/pi";
import { TbFileCertificate } from "react-icons/tb";

export default function AddService({onBack}) {
  return (
    <div className="bg-white mt-5 rounded-lg p-5">
      <div className="flex justify-between items-center mb-6">
        <div
          className="flex items-center justify-between mb-6 text-right"
          dir="rtl"
        >
          <button
            onClick={onBack}
            className="text-[#0B2B51] font-semibold text-2xl hover:underline cursor-pointer"
          >
            الخدمات
          </button>
          <span className="text-[#0B2B51] font-semibold text-2xl">
            {" "}
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
            className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        <div className="flex justify-between w-full">
          <div className="w-full">
            <div>
              <label className="w-full block mb-3 text-lg text-[#0B2B51]">
                صورة توضيحية
              </label>
            </div>
            <div className="flex gap-2 rtl:flex-row-reverse">
              <div className="w-[100px] h-[52px] border border-[#13498b40] rounded-lg flex items-center justify-center">
                <PiUpload className="top-1/2 w-10 h-8" />
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="professionallicense"
                  placeholder="رابط الصورة  "
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
            className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          ></textarea>
        </div>

        <div className="col-span-2">
          <label className="block mb-2 text-lg text-[#0B2B51]">
            سعر الخدمة
          </label>
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              خدمة مجانية
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              خدمة بسعر
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              خدمة بعرض سعر
            </label>
          </div>
          <div className="mt-3 relative">
            <span className="absolute inset-y-0 right-8 flex items-center pr-3 text-gray-500">
              <img src="/watheeq/assets/img/business1.png" alt="watheeq" />
            </span>
            <input
              type="number"
              defaultValue={120}
              className="w-1/2 border rounded-lg px-4 p-3 text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

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
            <select className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none">
              <option>حدد الوقت</option>
              <option value="1">1 يوم</option>
              <option value="3">3 أيام</option>
              <option value="7">أسبوع</option>
            </select>
          </div>
        </div>

        <div className="col-span-2">
          <label className="block mb-2 text-sm text-[#0B2B51]">
            الاجتماع(فيديو)
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
            <select className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none">
              <option>اختر مدة الاجتماع فيديو</option>
              <option value="none">لا يوجد</option>
              <option value="15">15 دقيقة</option>
              <option value="30">30 دقيقة</option>
              <option value="60">ساعة</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
