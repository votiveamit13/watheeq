"use client";
import { useState } from "react";
import { PiUpload } from "react-icons/pi";
import { TbFileCertificate } from "react-icons/tb";

export default function AddPost({ onBack }) {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("تصنيف1");
  const [selectedTemplate, setSelectedTemplate] = useState("خبر");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = [
    { id: 1, name: "مهارة 1" },
    { id: 2, name: "مهارة 1" },
    { id: 3, name: "مهارة 3" },
    { id: 4, name: "مهارة 4" },
  ];

  const toggleSkill = (skillId) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter((id) => id !== skillId));
    } else {
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };

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
            المنشورات
          </button>
          <span className="text-[#0B2B51] font-semibold text-2xl">
            {" "}
            &nbsp;&gt; إضافة منشور
          </span>
        </div>
        <button className="bg-[#13498B] text-white px-10 font-bold py-2 rounded-lg cursor-pointer">
          حفظ
        </button>
      </div>
      <form className="w-full mt-10 space-y-6 text-right" dir="rtl">
        <div className="relative">
          <label className="block text-[#0B2B51] font-semibold mb-1">
            التصنيف
          </label>
          <button
            type="button"
            onClick={() => setDropdown1Open(!dropdown1Open)}
            className="w-1/2 rounded-lg p-3 text-right flex items-center justify-between placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            style={{ border: "1px solid #13498b40" }}
          >
            {selectedCategory}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdown1Open && (
            <div className="absolute z-10 mt-2 w-1/2 bg-gray-100 rounded-lg shadow p-2 text-sm text-blue-900 space-y-1">
              <div
                onClick={() => {
                  setSelectedCategory("تصنيف 1");
                  setDropdown1Open(false);
                }}
                className="cursor-pointer hover:text-blue-600"
              >
                تصنيف 1
              </div>
              <div
                onClick={() => {
                  setSelectedCategory("تصنيف 2");
                  setDropdown1Open(false);
                }}
                className="cursor-pointer hover:text-blue-600"
              >
                تصنيف 2
              </div>
              <div className="cursor-pointer text-blue-700 font-bold flex items-center gap-1 hover:text-blue-900">
                <span className="text-xl">+</span> أضف جديد
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <label className="block text-[#0B2B51] font-semibold mb-1">
            قالب المنشور
          </label>
          <button
            type="button"
            onClick={() => setDropdown2Open(!dropdown2Open)}
            className="w-1/2  rounded-lg p-3 text-right flex items-center justify-between placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            style={{ border: "1px solid #13498b40" }}
          >
            {selectedTemplate}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdown2Open && (
            <div className="absolute z-10 mt-2 w-1/2 bg-gray-100 rounded-lg shadow p-2 text-sm text-blue-900 space-y-1">
              {["خبر", "عمل سابق", "مدونة"].map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelectedTemplate(item);
                    setDropdown2Open(false);
                  }}
                  className="cursor-pointer hover:text-blue-600"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedTemplate === "خبر" && (
          <>
            <div>
              <label className="block text-[#0B2B51] font-semibold mb-1">
                عنوان الخبر
              </label>
              <input
                type="text"
                placeholder="عنوان الخبر"
                className="w-1/2 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                style={{ border: "1px solid #13498b40" }}
              />
            </div>

            <div className="flex justify-between w-1/2">
              <div className="w-full">
                <label className="w-full block mb-3 text-lg text-[#0B2B51]">
                  صورة الخبر
                </label>
                <div className="flex gap-2 rtl:flex-row-reverse">
                  <div className="w-[100px] h-[52px] border border-[#13498b40] rounded-lg flex items-center justify-center">
                    <PiUpload className="top-1/2 w-10 h-8" />
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="رابط الصورة"
                      className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      style={{ border: "1px solid #13498b40" }}
                    />
                    <TbFileCertificate className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B] w-6 size-10" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-lg text-[#0B2B51]">
                محتوى الخبر
              </label>
              <textarea
                rows="4"
                placeholder="محتوى الخبر"
                className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              ></textarea>
            </div>
          </>
        )}

        {selectedTemplate === "عمل سابق" && (
          <>
            <div>
              <label className="block text-[#0B2B51] font-semibold mb-1">
                عنوان المشروع
              </label>
              <input
                type="text"
                placeholder="الاسم"
                className="w-1/2 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                style={{ border: "1px solid #13498b40" }}
              />
            </div>

            <div>
              <label className="block text-[#0B2B51] font-semibold mb-1">
                جهة العميل
              </label>
              <input
                type="text"
                placeholder="وزارة الأعمال"
                className="w-1/2 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                style={{ border: "1px solid #13498b40" }}
              />
            </div>

            <div className="flex justify-between gap-8 w-1/2 mt-6">
              <div className="flex flex-col text-right" dir="ltr">
                <label className="mb-2 text-[#0B2B51] font-medium">
                  تاريخ بدء المشروع
                </label>
                <input
                  type="text"
                  placeholder="1 / اذار / 2025"
                  readOnly
                  className="w-[230px] rounded-md text-center border border-[#13498b40] text-gray-600 p-3 bg-white"
                />
              </div>

              <div className="flex flex-col text-right" dir="ltr">
                <label className="mb-2 text-[#0B2B51] font-medium">
                  تاريخ نهاية المشروع
                </label>
                <input
                  type="text"
                  placeholder="1 / اذار / 2025"
                  readOnly
                  className="w-[230px] rounded-md text-center border border-[#13498b40] text-gray-600 p-3 bg-white"
                />
              </div>
            </div>

            <div className="flex justify-between w-1/2">
              <div className="w-full">
                <label className="w-full block mb-3 text-lg text-[#0B2B51]">
                  صورة توضيحية
                </label>
                <div className="flex gap-2 rtl:flex-row-reverse">
                  <div className="w-[100px] h-[52px] border border-[#13498b40] rounded-lg flex items-center justify-center">
                    <PiUpload className="top-1/2 w-10 h-8" />
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
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
                وصف المشروع
              </label>
              <textarea
                rows="4"
                placeholder="الوصف"
                className="w-1/2 border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="w-full">
              <label className="block mb-1 text-lg text-[#0B2B51]">
                المهارات المستخدمة
              </label>

              <div className="flex flex-wrap gap-2 w-1/2">
                {skills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill.id);
                  return (
                    <button
                      key={skill.id}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSkill(skill.id);
                      }}
                      className={`cursor-pointer w-[calc(50%-0.25rem)] p-3 rounded-lg text-sm border flex items-center justify-center
            ${
              isSelected
                ? "border-[#0B2B51]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {selectedTemplate === "مدونة" && (
          <>
            <div>
              <label className="block text-[#0B2B51] font-semibold mb-1">
                عنوان المدونة
              </label>
              <input
                type="text"
                placeholder="الاسم"
                className="w-1/2 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                style={{ border: "1px solid #13498b40" }}
              />
            </div>

            <div className="flex justify-between w-1/2">
              <div className="w-full">
                <label className="w-full block mb-3 text-lg text-[#0B2B51]">
                  صورة توضيحية
                </label>
                <div className="flex gap-2 rtl:flex-row-reverse">
                  <div className="w-[100px] h-[52px] border border-[#13498b40] rounded-lg flex items-center justify-center">
                    <PiUpload className="top-1/2 w-10 h-8" />
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
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
                محتوى المدونة
              </label>
              <textarea
                rows="4"
                placeholder="الوصف"
                className="w-1/2 border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
