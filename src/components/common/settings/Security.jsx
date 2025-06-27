"use client";
import { ChevronDown } from "lucide-react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useState } from "react";

export default function Security() {
  const [twoFactorDialog, setTwoFactorDialog] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+966");
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [otpDialog, setOtpDialog] = useState(false);
  const [twoFactorStatus, setTwoFactorStatus] = useState("غير مفعل");
  const getStatusColor = (status) => {
    return status === "مفعل" ? "#0BB41F" : "#FF5852";
  };

  const countryOptions = [
    { code: "+966", iso: "sa", name: "KSA" },
    { code: "+971", iso: "ae", name: "UAE" },
    { code: "+965", iso: "kw", name: "Kuwait" },
    { code: "+20", iso: "eg", name: "Egypt" },
    { code: "+91", iso: "in", name: "India" },
  ];

  const selectedCountry = countryOptions.find((c) => c.code === countryCode);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <span className="text-2xl font-bold">الأمان</span>
      <div className="flex justify-between items-center bg-white shadow p-5 mt-5 pl-10 rounded-t border-b">
        <div className="flex flex-col">
          <span>المصادقة الثنائية</span>
          <span
            className="font-semibold"
            style={{ color: getStatusColor(twoFactorStatus) }}
          >
            {twoFactorStatus}
          </span>
        </div>
        <div>
          <IoIosArrowDropleft size={30}
            onClick={() => setTwoFactorDialog(true)}
            className="cursor-pointer"
            style={{padding:'1px'}}/>
          {twoFactorDialog && (
            <div className="fixed inset-0 bg-[#0000007d] bg-opacity-30 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <div>
                  <h2 className="text-xl font-bold text-center text-[#13498B] mb-4">
                    {twoFactorStatus === "غير مفعل"
                      ? "المصادقة الثنائية"
                      : "إيقاف  المصادقة الثنائية"}
                  </h2>
                </div>
                <label className="block mb-3 text-l text-[#0B2B51]">
                  {twoFactorStatus === "غير مفعل"
                    ? "رقم الجوال"
                    : "هل تريد ايقاف المصادقة  برقم جوال  المسجل لدينا"}
                </label>
                <div className="flex gap-2 rtl:flex-row-reverse">
                  <div className="relative w-[130px] h-[52px]">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full h-full pl-2 pr-2 bg-white border border-[#13498b40] rounded-lg text-sm flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-1">
                        <ChevronDown size={16} className="text-[#13498B]" />
                        <span dir="ltr">{selectedCountry?.code}</span>
                        <img
                          src={`https://flagcdn.com/w40/${selectedCountry?.iso}.png`}
                          alt={selectedCountry?.name}
                          className="w-5 h-4"
                        />
                      </div>
                    </button>

                    {dropdownOpen && (
                      <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow">
                        {countryOptions.map((opt) => (
                          <li
                            key={opt.code}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setCountryCode(opt.code);
                              setDropdownOpen(false);
                            }}
                          >
                            <span dir="ltr">{opt.code}</span>
                            <img
                              src={`https://flagcdn.com/w40/${opt.iso}.png`}
                              alt={opt.name}
                              className="w-5 h-4"
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="relative w-full">
                    <input
                      type="tel"
                      placeholder="58877777"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      style={{ border: "1px solid #13498b40" }}
                    />
                    <img
                      src="/watheeq/assets/img/accountdata3.png"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  {twoFactorStatus === "غير مفعل" ? (
                    <button
                      className="bg-[#003F77] text-white text-sm px-10 py-2 rounded-md cursor-pointer"
                      onClick={() => setOtpDialog(true)}
                    >
                      التالي
                    </button>
                  ) : (
                    <div className="flex justify-center gap-4">
                      {" "}
                      <button
                        className="bg-[#003F77] text-white text-sm px-10 py-2 rounded-md cursor-pointer"
                        onClick={() => setOtpDialog(true)}
                      >
                        نعم
                      </button>
                      <button
                        className="bg-[#F8FAFC] text-[#13498B] text-sm px-10 py-2 border border-[#13498B] rounded-md cursor-pointer"
                        onClick={() => setTwoFactorDialog(false)}
                      >
                        لا
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {otpDialog && (
            <div className="fixed inset-0 bg-[#0000007d] bg-opacity-30 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <div>
                  <h2 className="text-xl font-bold text-center text-[#13498B] mb-6">
                    تأكيد الحساب
                  </h2>
                  <p className="text-center mb-4">
                    أدخل كود التحقق المرسل الى رقم الجوال
                  </p>
                </div>
                <div className="w-full  text-center space-y-6">
                  <div className="flex justify-center gap-8">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        className="w-full h-12 text-center bg-white border border-blue-200 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                      />
                    ))}
                  </div>

                  {twoFactorStatus === "غير مفعل" ? (
                    <button
                      onClick={() => {
                        setOtpDialog(false);
                        setTwoFactorDialog(false);
                        setTwoFactorStatus("مفعل");
                      }}
                      className="bg-[#003F77] text-white text-sm px-8 py-2 rounded-md cursor-pointer"
                    >
                      تأكيد
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setOtpDialog(false);
                        setTwoFactorDialog(false);
                        setTwoFactorStatus("غير مفعل");
                      }}
                      className="bg-[#003F77] text-white text-sm px-8 py-2 rounded-md cursor-pointer"
                    >
                      تأكيد
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center bg-white shadow p-5 rounded-b mb-8 pl-10">
        <div>
          <span>تسجيل الخروج من جميع الأجهزة</span>
        </div>
        <div>
          <IoIosArrowDropleft size={30} className="cursor-pointer"  style={{padding:'1px'}}/>
        </div>
      </div>
    </div>
  );
}
