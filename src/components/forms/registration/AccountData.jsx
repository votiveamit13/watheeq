"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function RegisterForm({ onNext }) {
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [countryCode, setCountryCode] = useState("+966");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const countryOptions = [
    { code: "+966", iso: "sa", name: "KSA" },
    { code: "+971", iso: "ae", name: "UAE" },
    { code: "+965", iso: "kw", name: "Kuwait" },
    { code: "+20", iso: "eg", name: "Egypt" },
    { code: "+91", iso: "in", name: "India" },
  ];

  const selectedCountry = countryOptions.find((c) => c.code === countryCode);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }
    onNext();
    console.log("Form submitted:", { ...form, phone });
  };

  return (
    <section className="max-w-md mx-auto p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold hover:text-blue-600 text-center md:text-right cursor-pointer">
          بيانات الحساب
        </h2>
        <p className="text-center md:text-right">قم بإدخال معلوماتك لإنشاء حساب في وثيق</p>
      </div>

      <div className="bg-[#F7FBFD] rounded-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="اسمك بالكامل"
              value={form.name}
              onChange={handleChange}
              className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ border: "1px solid #13498b40" }}
            />
            <img
              src="/watheeq/assets/img/accountdata1.png"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5"
              alt=""
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="بريدك الالكتروني"
              value={form.email}
              onChange={handleChange}
              className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ border: "1px solid #13498b40" }}
            />
            <img
              src="/watheeq/assets/img/accountdata2.png"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5"
              alt=""
            />
          </div>


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
                placeholder="رقم الجوال"
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

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="كلمة المرور"
              value={form.password}
              onChange={handleChange}
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
                onClick={() => setShowPassword(false)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setShowPassword(true)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              />
            )}
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="تأكيد كلمة مرور"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ border: "1px solid #13498b40" }}
            />
            <img
              src="/watheeq/assets/img/accountdata4.png"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5"
              alt=""
            />
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible
                onClick={() => setShowConfirmPassword(false)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setShowConfirmPassword(true)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#13498B] text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition cursor-pointer"
          >
            تسجيل
          </button>
        </form>

        <div className="w-full text-center mt-5 cur">
          <p>لديك حساب بالفعل <span className="cursor-pointer"> ؟ تسجيل الدخول</span></p>
        </div>
      </div>
    </section>
  );
}
