"use client";
import { PiUpload } from "react-icons/pi";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { ChevronDown} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Profile() {
  const [countryCode, setCountryCode] = useState("+966");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const countryRef = useRef(null);
  const ibanRef = useRef(null);


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
      <div className="flex justify-between mt-5">
        <div className="flex items-center">
          <div className="ml-5 relative w-fit">
            <BiPencil
              fill="red"
              className="cursor-pointer absolute top-0 left-0 bg-[#F242421A] rounded-[5px] p-1 w-8 h-8"
             style={{marginLeft:'-8px',marginTop:'3px', zIndex:'999', background:'#FFDFDF', borderRadius:'8px'}}/>
            <img
              src="/watheeq/assets/img/admin.png"
              alt="watheeq"
              className="w-16 h-16 mt-3 object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl">محمد سعيد</h3>
            <span className="text-[#000000]">mohammed@gmail.com</span>
          </div>
        </div>
        <div>
          <button className="bg-primary text-white font-bold py-2 px-13 rounded-md cursor-pointer">
            تعديل
          </button>
        </div>
      </div>

      <form className="space-y-6 mt-10 mb-50">
        <div className="flex flex-col justify-between w-full gap-8">
          <div className="relative w-1/2">
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

          <div className="relative w-1/2">
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
                    <ChevronDown size={20} className="text-[#13498B]" />
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
                <AiOutlinePhone size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]"/>
              </div>
            </div>
          </div>

                    <div className="relative w-1/2">
            <label className="block mb-3 text-l text-[#0B2B51]">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="mohmedmad@gmail.com"
                className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 bg-white border border-[#13498b40]"
              />
              <MdOutlineMail size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B]" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
