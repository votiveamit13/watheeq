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
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showIbanDropdown, setShowIbanDropdown] = useState(false);
  const countryRef = useRef(null);
  const ibanRef = useRef(null);

  const [ibanOptions, setIbanOptions] = useState([
    "0000-0000-0000-0000",
    "000-0000-00000-0000",
  ]);
  const [showAddIbanDialog, setShowAddIbanDialog] = useState(false);
  const [accountHolder, setAccountHolder] = useState("");
  const [bankName, setBankName] = useState("");
  const [ibanInput, setIbanInput] = useState("");

  const countryOptions = [
    { code: "+966", label: "sa", name: "KSA" },
    { code: "+971", label: "ae", name: "UAE" },
    { code: "+965", label: "kw", name: "Kuwait" },
    { code: "+20", label: "eg", name: "Egypt" },
    { code: "+91", label: "in", name: "India" },
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
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
      if (ibanRef.current && !ibanRef.current.contains(event.target)) {
        setShowIbanDropdown(false);
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
      <h2 className="text-2xl text-bold">الملف الشخصي</h2>
      <div className="lg:flex block justify-between mt-5">
        <div className="flex items-center">
          <div className="ml-5 relative w-fit">
            <BiPencil
              fill="red"
              className="cursor-pointer absolute top-0 left-0 bg-[#F242421A] rounded-xl p-1 w-8 h-8"
             style={{borderRadius:'5px',marginTop:'5px', marginLeft:'-10px' }}/>
            <img
              src="/watheeq/assets/img/profile.png"
              alt="watheeq"
              className="lg:w-16 lg:h-16 mt-3 object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl">أحمد ماضي</h3>
            <span className="text-[#000000]">ahmedmadi@gmail.com</span>
          </div>
        </div>
        <div className="lg:mt-0 mt-5">
          <button className="bg-primary text-white font-bold py-3 px-10 rounded-md cursor-pointer">
            تعديل
          </button>
        </div>
      </div>

      <form className="space-y-6 mt-10">
        <div className="lg:flex block justify-between w-full gap-8">
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
              <FaRegCircleUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"  style={{width:'25px'}}/>
            </div>
          </div>

          <div className="relative w-full">
            <label className="block mb-3 text-l text-[#0B2B51]">
              رقم الجوال
            </label>
            <div className="flex gap-2 rtl:flex-row-reverse">
              <div ref={countryRef} className="relative w-[130px] h-[52px]">
                <div
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  className="flex items-center justify-between w-full h-full px-2 bg-white border border-[#13498b40] rounded-lg cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <ChevronDown size={16} className="text-[#13498B]" />
                    <span className="text-sm text-[#4C3A74] font-medium" dir="ltr">
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
                        <span className="text-sm text-[#4C3A74] font-medium" dir="ltr">
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
                <AiOutlinePhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]" style={{width:'25px'}}/>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex block justify-between w-full gap-8">
          {["الرخصة المهنية", "الشهادة الأكاديمية"].map((label, i) => (
            <div className="relative w-full" key={i}>
              <label className="block mb-3 text-l text-[#0B2B51]">
                {label}
              </label>
              <div className="flex gap-2 rtl:flex-row-reverse">
                <div className="relative w-[130px] h-[52px] border border-[#13498b40] rounded-lg flex items-center justify-center">
                  <PiUpload className="w-10 h-8" />
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder={`رابط ملف ${label}`}
                    className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 bg-white border border-[#13498b40]"
                  />
                  <TbFileCertificate className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]" style={{width:'25px'}}/>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:flex block justify-between p-3 w-full">
          <div className="mail-address lg:w-1/2 w-full lg:flex block justify-between">
            <label className="block mb-3 text-l text-[#0B2B51]">
              البريد الإلكتروني
            </label>
            <div>
            <p className="text-[#0B2B51]">ahmedmadi@gmail.com</p>
            <span className="text-[#0B2B51]">قبل شهر</span>
            <div className="mt-3">
              <button className="font-bold border py-2 px-3 rounded-md cursor-pointer">
                + إضافة بريد الكتروني
              </button>
            </div>
            </div>

          </div>
        </div>

        <div className="relative lg:w-1/2 w-full" ref={ibanRef}>
          <label className="block mb-3 text-l text-[#0B2B51]">
            الحساب البنكي
          </label>
          <span>الآيبان</span>
          <div
            className="w-full pr-10 rounded-lg p-3 text-right bg-white flex justify-between items-center cursor-pointer border border-[#13498b40]"
            onClick={() => setShowIbanDropdown((prev) => !prev)}
          >
            {selectedIban || "0000-0000-0000-0000"}
            <ChevronDown className="text-[#13498B]" size={16} />
          </div>
          {showIbanDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#13498b40] shadow">
              {ibanOptions.map((iban, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-right"
                  onClick={() => {
                    setSelectedIban(iban);
                    setShowIbanDropdown(false);
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
      </form>

      {showAddIbanDialog && (
        <div className="fixed inset-0 bg-[#0000007d] flex justify-center items-center z-50 p-10">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#13498B]">
                الحساب البنكي
              </h2>
              <ChevronLeft
                onClick={() => setShowAddIbanDialog(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-[#0B2B51]">
                اسم صاحب الحساب
              </label>
              <input
                type="text"
                value={accountHolder}
                onChange={(e) => setAccountHolder(e.target.value)}
                className="w-full border border-[#13498b40] rounded-lg p-2 text-right placeholder:text-gray-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-[#0B2B51]">اسم البنك</label>
              <select
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full border border-[#13498b40] rounded-lg p-2 text-right bg-white"
              >
                <option value="">اختر البنك</option>
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
                className="w-full border border-[#13498b40] rounded-lg p-2 text-right placeholder:text-gray-400"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="bg-[#13498B] text-white px-4 py-2 rounded cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  if (ibanInput) {
                    setIbanOptions([...ibanOptions, ibanInput]);
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
    </div>
  );
}
