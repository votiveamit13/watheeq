"use client";
import { useState, useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { ChevronLeft, ChevronDown, ShieldCheck } from "lucide-react";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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

const powers = [
  "تعطيل أو حذف حساب عميل عند الحاجة.",
  "عرض جميع الطلبات بين العملاء والمهنيين.",
  "تعديل اسم الباقة، وصفها، أو رسوم الاشتراك",
];

export default function Managers() {
  const [showDialog, setShowDialog] = useState(false);
  const [reminder, setReminder] = useState(null);
  const [countryCode, setCountryCode] = useState("+966");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const countryRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([...powers]);

  const toggleOption = (power) => {
    setSelected((prev) =>
      prev.includes(power)
        ? prev.filter((item) => item !== power)
        : [...prev, power]
    );
  };

  const countryOptions = [
    { code: "+966", label: "sa", name: "KSA" },
    { code: "+971", label: "ae", name: "UAE" },
    { code: "+965", label: "kw", name: "Kuwait" },
    { code: "+20", label: "eg", name: "Egypt" },
    { code: "+91", label: "in", name: "India" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedCountry = countryOptions.find(
    (opt) => opt.code === countryCode
  );

  return (
    <div className="bg-white mt-5 p-5 rounded-lg">
      <div className="flex justify-between items-center pb-8">
        <div>
          <h2 className="text-2xl font-bold">المدراء</h2>
        </div>
        <div>
          <button className="cursor-pointer flex gap-5 items-center bg-[#F8FAFC] border border-[#13498B80] py-2 px-5 rounded-lg" onClick={() => setShowDialog(true)}>
            <FaPlus />
            إضافة مدير
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
                <td className="py-2 px-3 text-[#0B2B5166]" style={{textDecoration:'underline', color:'#0B2B51'}}>{manager.mail}</td>
                <td className="py-2 px-3" dir="ltr" style={{color:'#0B2B51'}}>
                  {manager.number}
                </td>
                <td className="py-2 px-3" style={{color:'#0B2B5166'}}>{manager.title}</td>

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
                          <div className="bg-white w-[600px] rounded-xl p-5 relative">
                            <div className="flex justify-between">
                              <h2 className="text-xl font-bold text-center text-[#13498B] mb-2">
                                إضافة مدير
                              </h2>
                              <button
                                className="cursor-pointer"
                                onClick={() => setShowDialog(false)}
                              >
                                <ChevronLeft />
                              </button>
                            </div>

                            <form className="space-y-3 mt-5 mb-5">
                              <div className="flex flex-col justify-between w-full gap-5">
                                <div className="relative w-full">
                                  <label className="block mb-3 text-l text-[#0B2B51]">
                                    اسمك بالكامل
                                  </label>
                                  <div className="relative">
                                    <input
                                      type="text"
                                      placeholder="أحمد جمال ماضي"
                                      className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 bg-white border border-[#13498b40]"
                                    />
                                    <FaRegCircleUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]" />
                                  </div>
                                </div>
                                <div className="relative w-full">
                                  <label className="block mb-3 text-l text-[#0B2B51]">
                                    البريد الإلكتروني
                                  </label>
                                  <div className="relative">
                                    <input
                                      type="email"
                                      placeholder="mohmedmad@gmail.com"
                                      className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 bg-white border border-[#13498b40]"
                                    />
                                    <MdOutlineMail
                                      size={20}
                                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"
                                    />
                                  </div>
                                </div>

                                <div className="relative w-full">
                                  <label className="block mb-3 text-l text-[#0B2B51]">
                                    البريد الإلكتروني
                                  </label>
                                  <div className="relative">
                                    <input
                                      type={showPassword ? "text" : "password"}
                                      name="password"
                                      placeholder="كلمة المرور"
                                      className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                      style={{ border: "1px solid #13498b40" }}
                                    />
                                    <img
                                      src="/watheeq/assets/img/accountdata4.png"
                                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5"
                                      alt=""
                                    />
                                    {showPassword ? (
                                      <AiOutlineEyeInvisible
                                        size={20}
                                        className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"
                                        onClick={() => setShowPassword(false)}
                                      />
                                    ) : (
                                      <AiOutlineEye
                                        size={20}
                                        className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"
                                        onClick={() => setShowPassword(true)}
                                      />
                                    )}
                                  </div>
                                </div>

                                <div className="relative w-full">
                                  <label className="block mb-3 text-l text-[#0B2B51]">
                                    رقم الجوال
                                  </label>
                                  <div className="flex gap-2 rtl:flex-row-reverse">
                                    <div
                                      ref={countryRef}
                                      className="relative w-[130px] h-[52px]"
                                    >
                                      <div
                                        onClick={() =>
                                          setShowCountryDropdown(
                                            !showCountryDropdown
                                          )
                                        }
                                        className="flex items-center justify-between w-full h-full px-2 bg-white border border-[#13498b40] rounded-lg cursor-pointer"
                                      >
                                        <div className="flex items-center gap-2">
                                          <ChevronDown
                                            size={20}
                                            className="text-[#13498B]"
                                          />
                                          <span
                                            className="text-sm text-[#4C3A74] font-medium"
                                            dir="ltr"
                                          >
                                            {selectedCountry?.code}
                                          </span>
                                          <img
                                            src={`https://flagcdn.com/w40/${selectedCountry?.label}.png`}
                                            alt={selectedCountry?.name}
                                            className="w-5 h-4 object-cover"
                                          />
                                        </div>
                                      </div>
                                      {showCountryDropdown && (
                                        <div className="absolute z-10 bg-white mt-1 w-full border rounded shadow max-h-48 overflow-y-auto">
                                          {countryOptions.map((opt) => (
                                            <div
                                              key={opt.code}
                                              onClick={() => {
                                                setCountryCode(opt.code);
                                                setShowCountryDropdown(false);
                                              }}
                                              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                              <span
                                                className="text-sm text-[#4C3A74] font-medium"
                                                dir="ltr"
                                              >
                                                {opt.code}
                                              </span>
                                              <img
                                                src={`https://flagcdn.com/w40/${opt.label}.png`}
                                                alt={opt.name}
                                                className="w-5 h-4 object-cover"
                                              />
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>

                                    <div className="relative w-full">
                                      <input
                                        type="tel"
                                        placeholder="58877777"
                                        className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 bg-white border border-[#13498b40]"
                                      />
                                      <AiOutlinePhone
                                        size={20}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="relative w-full">
                                  <label className="block mb-3 text-l text-[#0B2B51]">
                                    الصلاحيات المتاحة
                                  </label>

                                  <div className="relative">
                                    <button
                                      type="button"
                                      onClick={() => setOpen(!open)}
                                      className="cursor-pointer w-full p-3 border border-[#13498b40] rounded-lg shadow-sm bg-white flex items-center justify-between text-sm text-gray-700 focus:outline-none"
                                    >
                                      <span className="flex items-center pr-7 gap-1 text-gray-500">
                                        <ShieldCheck
                                          size={20}
                                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"
                                        />
                                        الصلاحيات
                                      </span>
                                      <ChevronDown
                                        size={20}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"
                                      />
                                    </button>

                                    {open && (
                                      <ul className="absolute mt-2 w-full border border-gray-200 rounded-md bg-white shadow-lg z-10">
                                        {powers.map((power) => (
                                          <li
                                            key={power}
                                            className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => toggleOption(power)}
                                          >
                                            <span className="text-sm text-gray-700">
                                              {power}
                                            </span>
                                            <input
                                              type="checkbox"
                                              checked={selected.includes(power)}
                                              readOnly
                                              className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="w-full flex justify-center">
                                <button className="cursor-pointer mt-5 w-[120px] bg-[#13498B] text-white font-bold rounded-lg py-3 px-8" onClick={() => setShowDialog(false)}>
                                  إضافة
                                </button>
                              </div>
                            </form>
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
