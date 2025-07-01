"use client";
import React, { useState } from "react";

export default function Template() {
  const allSkills = [
    "قضايا أسرية",
    "قضايا جنائية",
    "قضايا تجارية",
    "قضايا مدنية",
    "قضايا إدارية",
    "قضايا عمالية",
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setShowDropdown(false); // hide dropdown after selection
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };
  return (
    <div>
      <div className="flex justify-between bg-white mt-5 p-5 rounded-lg">
        <div>
          <h2 className="text-2xl font-bold">إعدادات القالب</h2>
        </div>
        <div>
          <button className="bg-[#13498B] text-white py-2 px-12 cursor-pointer rounded-[7px]">
            حفظ
          </button>
        </div>
      </div>
      <form className="mb-30">
        {/* First Section */}
        <div className="bg-white mt-5 p-5 rounded-lg items-start md:items-center">
          <h3 className="text-2xl font-bold text-[#13498B] md:mb-0">
            تخصيص الألوان
          </h3>

          <div className="flex flex-col gap-3 mt-5 md:w-auto">
          <div className="w-[200px] lg:w-1/4 flex items-center justify-between gap-4">
          <label className="text-sm text-[#13498B] whitespace-nowrap">
                لون الخلفية
              </label>
              <select className="border border-[#13498B] rounded px-4 py-1 text-sm">
                <option>اختيار لون</option>
              </select>
            </div>

            <div className="flex items-center w-[200px] lg:w-1/4 justify-between gap-4">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                لون الأزرار
              </label>
              <select className="border border-[#13498B] rounded px-4 py-1 text-sm">
                <option>اختيار لون</option>
              </select>
            </div>

            <div className="flex items-center w-[200px] lg:w-1/4 justify-between gap-4">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                لون النصوص
              </label>
              <select className="border border-[#13498B] rounded px-4 py-1 text-sm">
                <option>اختيار لون</option>
              </select>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-white mt-5 p-5 rounded-lg">
          <h3 className="text-2xl font-bold text-[#13498B] mb-4">
            التحكم بالتبويبات
          </h3>

          <div className="flex flex-col gap-4">
            {[
              "عرض الإحصائيات",
              "عرض التقييمات",
              "عرض تبويب خدماتي",
              "عرض تبويب  مدونتي",
              "عرض تبويب  التقييمات",
              "عرض   النبذة الشخصية",
            ].map((label, idx) => (
              <div
                key={idx}
                className="flex items-center w-1/4 justify-between w-[200px] lg:w-1/4"
              >
<span className="text-[#13498B] text-sm ml-[25px] md:ml-0">{label}</span>

                <label className="relative inline-block w-14 h-7">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
<div className="absolute inset-0 w-[56px] md:w-full bg-gray-400 peer-checked:bg-green-500 rounded-full cursor-pointer transition duration-300"></div>
<div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full text-[10px] font-bold flex items-center justify-center transition-all duration-300 peer-checked:translate-x-[-28px] z-10 after:content-['OFF'] peer-checked:after:content-['ON'] after:text-gray-500 peer-checked:after:text-green-600 after:block after:text-[10px]" />
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Third Section */}
        <div className="bg-white mt-5 p-5 rounded-lg">
          <h3 className="text-2xl font-bold text-[#13498B] mb-4">
            الدومين الخاص بك
          </h3>
          <div className="block md:flex items-center justify-start gap-3">
            <input
              type="text"
              placeholder="watheeq.com/username"
              className="border border-gray-300 rounded px-4 py-1.5 text-sm w-[250px] text-left focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <button className="bg-[#13498B] text-white px-8 py-1.5 rounded text-sm cursor-pointer my-[15px] mx-0 md:my-0">
حفظ
            </button>
            <div className="w-6 h-6 rounded-full bg-[#A0AEC0] text-white flex items-center justify-center text-xs cursor-pointer">
              ?
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="bg-white mt-5 p-5 rounded-lg">
          <h3 className="text-2xl font-bold text-[#13498B] mb-4 text-right">
            بياناتك
          </h3>

          <div className="flex flex-col items-start w-full">
            <label className="text-sm text-[#13498B] mb-3">نبذة عني</label>
            <textarea
              placeholder="اكتب نبذة عنك"
              rows={4}
              className="border border-[#CBD5E0] rounded w-full px-4 py-2 text-sm text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
             style={{width:'90%'}}></textarea>
          </div>
        </div>

        {/* Fifth Section */}
        <div className="bg-white mt-5 p-5 rounded-lg">
          <h3 className="text-2xl font-bold text-[#13498B] mb-4 text-right">
            مؤهلاتك الدراسية
          </h3>

          <div className="flex flex-col justify-between gap-3 w-full">
            <div className="block sm:flex items-center justify-between w-1/3">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                مكان الدراسة
              </label>
              <input
                type="text"
                placeholder="اسم مكان الدراسة"
                className="border border-[#13498B] rounded px-4 py-1 text-sm w-[150px] md:w-1/2 mr-0 md:mr-[20px] text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>

            <div className="block sm:flex items-center justify-between w-1/3 ">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                المؤهل الأكاديمي
              </label>
              <input
  type="text"
  placeholder="المؤهل الاكاديمي"
  className="border border-[#13498B] rounded px-4 py-1 text-sm w-[150px] md:w-1/2 mr-0 md:mr-[20px] text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
/>

            </div>

            <div className="block sm:flex items-center justify-between w-1/3">
            <label className="text-sm text-[#13498B] whitespace-nowrap">
                السنة الدراسية
              </label>
              <select   className="border border-[#13498B] rounded px-4 py-1 text-sm w-[150px] md:w-1/2 mr-0 md:mr-[20px] text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option>1987</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sixth Section*/}
        <div className="bg-white rounded-lg w-full p-5 mt-5 text-right">
          <h2 className="text-lg font-bold text-blue-900 mb-2">
            المهارات والتخصصات
          </h2>

          <div
            className="border border-blue-300 rounded p-2 min-h-[48px] w-3/4 flex flex-wrap gap-2 cursor-pointer "
            onClick={() => setShowDropdown(!showDropdown)}
           style={{width:'90%',border:'solid 1px #13498B' }}>
            {selectedSkills.length === 0 ? (
              <span className="text-gray-400">اختر المهارات</span>
            ) : (
              selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-blue-800 px-2 py-1 pl-5 pr-5 rounded-[5px] flex items-center gap-1 bg-[#F8FAFC] border border-solid border-[#13498B80]"
                  >
                  {skill}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSkill(skill);
                    }}
                    className="text-red-500 font-bold cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              ))
            )}
          </div>


          {showDropdown && (
            <div className="border border-blue-300 rounded mt-1 bg-white shadow z-10 max-h-48 overflow-y-auto w-[90%]">
              {allSkills.map((skill) => (
                <div
                  key={skill}
                  onClick={() => addSkill(skill)}
                  className="p-2 hover:bg-[#13498B] hover:text-white cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>

        {/*Seventh Section*/}
                <div className="bg-white mt-5 p-5 rounded-lg">
          <h3 className="text-2xl font-bold text-[#13498B] mb-4 text-right">
            روابط التواصل
          </h3>

          <div className="flex flex-col justify-between gap-3 w-full">
            <div className="block sm:flex items-center justify-between w-1/3">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                انستجرام
              </label>
              <input
                type="text"
                placeholder="username/instagram.com"
                className="border border-[#13498B] rounded px-4 py-1 text-sm w-[150px] mr-0 sm:mr-[20px] text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>

            <div className="block sm:flex items-center justify-between w-1/3 ">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                تيك توك
              </label>
              <input
                type="text"
                placeholder="username/tiktok.com"
                className="border border-[#13498B] rounded px-4 py-1 text-sm w-[150px] mr-0 sm:mr-[20px] text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>

                      <div className="block sm:flex items-center justify-between w-1/3 ">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                X-تويتر
              </label>
              <input
                type="text"
                placeholder="username/twitter.com"
                className="border border-[#13498B] rounded px-4 py-1 text-sm w-[150px] mr-0 sm:mr-[20px] text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>

                        <div className="block sm:flex items-center justify-between w-1/3 ">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                يوتيوب
              </label>
              <input
                type="text"
                placeholder="username/youtube.com"
                className="border border-[#13498B] rounded px-4 py-1 text-sm w-[150px] mr-0 sm:mr-[20px] text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>

                        <div className="block sm:flex items-center justify-between w-1/3 ">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                سناب شات
              </label>
              <input
  type="text"
  placeholder="username/snapchat.com"
  className="border border-[#13498B] rounded px-4 py-1 text-sm w-[150px] mr-0 sm:mr-[20px] text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
/>

            </div>

                        <div className="block sm:flex items-center justify-between w-1/3 ">
              <label className="text-sm text-[#13498B] whitespace-nowrap">
                غير ذلك
              </label>
              <input
                type="text"

                className="border border-[#13498B] rounded px-4 py-1 text-sm w-[150px] mr-0 sm:mr-[20px] text-right focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}
