"use client";
import { PiUpload } from "react-icons/pi";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbFileCertificate } from "react-icons/tb";
import { BiPencil } from "react-icons/bi";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Profile() {
  const [countryCode, setCountryCode] = useState("+966");
  const [selectedIban, setSelectedIban] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const [ibanOptions, setIbanOptions] = useState([
    "0000-0000-0000-0000",
    "000-0000-00000-0000",
  ]);
  const [showAddIbanDialog, setShowAddIbanDialog] = useState(false);
  const [accountHolder, setAccountHolder] = useState("");
  const [bankName, setBankName] = useState("");
  const [ibanInput, setIbanInput] = useState("");

  const countryOptions = [
    { code: "+966", label: "🇸🇦", name: "KSA" },
    { code: "+971", label: "🇦🇪", name: "UAE" },
    { code: "+965", label: "🇰🇼", name: "Kuwait" },
    { code: "+20", label: "🇪🇬", name: "Egypt" },
    { code: "+91", label: "🇮🇳", name: "India" },
  ];

  const bankOptions = [
    "البنك الأهلي السعودي",
    "مصرف الراجحي",
    "بنك الرياض",
    "بنك ساب",
    "البنك العربي الوطني",
    "مصرف الإنماء",
    "البنك السعودي الفرنسي",
    "البنك السعودي للاستثمار",
    "بنك الجزيرة",
    "بنك الخليج الدولي",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-white mt-5 p-5 rounded-lg">
      <h2 className="text-2xl text-bold">الملف الشخصي</h2>
      <div className="flex justify-between mt-5">
        <div className="flex items-center">
          <div className="ml-5 relative w-fit">
            <BiPencil
              fill="red"
              className="absolute top-0 left-0 bg-[#F242421A] rounded-xl p-1 w-8 h-8"
            />

            <img
              src="/watheeq/assets/img/profile.png"
              alt="watheeq"
              className="w-16 h-16 mt-3 object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl">أحمد ماضي</h3>
            <span className="text-[#000000]">ahmedmadi@gmail.com</span>
          </div>
        </div>
        <div>
          <button className="bg-primary text-white font-bold py-3 px-10  items-center justify-center md:rounded-r-1xl md:rounded-l-1xl rounded-md">
            تعديل
          </button>
        </div>
      </div>
      <div>
        <div className="rounded-lg mt-10">
          <form className="space-y-4">
            <div className="flex justify-between w-full gap-8">
              <div className="relative w-full">
                <div>
                  <label className="w-full block mb-3 text-l text-[#0B2B51]">
                    اسمك بالكامل
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="أحمد جمال ماضي"
                    className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    style={{ border: "1px solid #13498b40" }}
                  />
                  <FaRegCircleUser className="absolute right-3 top-1/2 bottom-1 transform -translate-y-1/2 text-[#13498B] w-5 size-10" />
                </div>
              </div>
              <div className="relative w-full">
                <div>
                  <label className="w-full block mb-3 text-l text-[#0B2B51]">
                    رقم الجوال
                  </label>
                </div>
                <div className="relative flex gap-2 rtl:flex-row-reverse">
                  <div className="relative ">
                    <div className="relative w-[100px] h-[52px]">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="appearance-none w-full h-full pl-2 pr-6 bg-white border border-[#13498b40] rounded-lg text-[#4C3A74] text-sm font-medium flex items-center justify-between"
                      >
                        {countryOptions.map((opt) => (
                          <option key={opt.code} value={opt.code}>
                            {opt.label} {opt.code}
                          </option>
                        ))}
                      </select>

                      <div className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-[#13498B]">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="tel"
                      name="name"
                      placeholder="58877777"
                      className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      style={{ border: "1px solid #13498b40" }}
                    />
                    <AiOutlinePhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B] w-8 size-10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full gap-8">
              <div className="relative w-full">
                <div>
                  <label className="w-full block mb-3 text-l text-[#0B2B51]">
                    الرخصة المهنية
                  </label>
                </div>
                <div className="relative flex gap-2 rtl:flex-row-reverse">
                  <div className="relative ">
                    <div className="relative w-[100px] h-[52px] border border-[#13498b40] rounded-lg flex items-center justify-center">
                      <PiUpload className="top-1/2 w-10 h-8" />
                    </div>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="professionallicense"
                      placeholder="رابط ملف الرخصة "
                      className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      style={{ border: "1px solid #13498b40" }}
                    />
                    <TbFileCertificate className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B] w-6 size-10" />
                  </div>
                </div>
              </div>

              <div className="relative w-full">
                <div>
                  <label className="w-full block mb-3 text-l text-[#0B2B51]">
                    الشهادة الأكاديمية
                  </label>
                </div>
                <div className="relative flex gap-2 rtl:flex-row-reverse">
                  <div className="relative ">
                    <div className="relative w-[100px] h-[52px] border border-[#13498b40] rounded-lg flex items-center justify-center">
                      <PiUpload className="top-1/2 w-10 h-8" />
                    </div>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="academiccertificate"
                      placeholder="رابط ملف الشهادة "
                      className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      style={{ border: "1px solid #13498b40" }}
                    />
                    <TbFileCertificate className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B] w-6 size-10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-1/2 justify-between p-3">
              <div>
                <label className="w-full block mb-3 text-l text-[#0B2B51]">
                  البريد الإلكتروني
                </label>
              </div>
              <div className="ml-7">
                <div>
                  <p className="text-[#0B2B51]">ahmedmadi@gmail.com</p>
                  <span className="text-[#0B2B51]">1 month ago</span>
                </div>
                <div className="mt-3">
                  <button className="font-bold border py-2 px-3 items-center justify-center md:rounded-r-1xl md:rounded-l-1xl rounded-md">
                    + إضافة بريد الكتروني
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-1/2" ref={dropdownRef}>
              <div className="mb-3">
                <label className="w-full block text-l text-[#0B2B51]">
                  الحساب البنكي
                </label>
                <span>الآيبان</span>
              </div>
              <div
                className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white flex justify-between items-center cursor-pointer"
                style={{ border: "1px solid #13498b40" }}
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                {selectedIban || "0000-0000-0000-0000"}
                <ChevronDown className="text-[#13498B]" size={16} />
              </div>

              {showDropdown && (
                <div className="absolute z-10 w-1/2 ml-0 bg-white border border-[#13498b40] shadow">
                  {ibanOptions.map((iban, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-right"
                      onClick={() => {
                        setSelectedIban(iban);
                        setShowDropdown(false);
                      }}
                    >
                      {iban}
                    </div>
                  ))}
                  <div
                    className="px-4 py-2 text-[#13498B] font-medium flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setShowAddIbanDialog(true)}
                  >
                    <span className="text-xl">+</span> أضف جديد
                  </div>
                </div>
              )}
            </div>
            {showAddIbanDialog && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg w-full max-w-md">
                  <div className="flex w-full justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-[#13498B] mb-4">
                        الحساب البنكي
                      </h2>
                    </div>
                    <div>
                      <ChevronLeft />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-[#0B2B51]">
                      اسم صاحب الحساب
                    </label>
                    <input
                      type="text"
                      value={accountHolder}
                      onChange={(e) => setAccountHolder(e.target.value)}
                      placeholder="ادخال"
                      className="w-full border border-[#13498b40] rounded-lg p-2 text-right placeholder:text-gray-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-[#0B2B51]">
                      اسم البنك
                    </label>
                    <select
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="w-full border border-[#13498b40] rounded-lg p-2 text-right bg-white"
                    >
                      <option value="" className="w-1/2">
                        اختر البنك
                      </option>
                      {bankOptions.map((bank, idx) => (
                        <option key={idx} value={bank}>
                          {bank}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-[#0B2B51]">الآيبان</label>
                    <input
                      type="text"
                      value={ibanInput}
                      onChange={(e) => setIbanInput(e.target.value)}
                      placeholder="0000-0000-0000-0000"
                      className="w-full border border-[#13498b40] rounded-lg p-2 text-right placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      className="bg-[#13498B] text-white px-4 py-2 rounded"
                      onClick={() => {
                        if (ibanInput) {
                          setIbanOptions((prev) => [...prev, ibanInput]);
                          setSelectedIban(ibanInput);
                          setAccountHolder("");
                          setBankName("");
                          setIbanInput("");
                          setShowAddIbanDialog(false);
                        }
                      }}
                    >
                      اضافة
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
