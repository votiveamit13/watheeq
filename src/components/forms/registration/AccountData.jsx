"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { HiOutlineUser, HiOutlineEnvelope, HiOutlinePhone, HiOutlineLock } from "react-icons/hi2";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function RegisterForm({ onNext }) {
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+966");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (
    //   !form.name ||
    //   !form.email ||
    //   !phone ||
    //   !form.password ||
    //   !form.confirmPassword
    // ) {
    //   alert("الرجاء ملء جميع الحقول");
    //   return;
    // }

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
      <h2 className="text-2xl font-bold hover:text-blue-600 cursor-pointer">
  بيانات الحساب
</h2>
        <p>قم بإدخال معلوماتك لإنشاء حساب في وثيق</p>
      </div>

      <div className="bg-[#F7FBFD] rounded-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="اسمك بالكامل"
              value={form.name}
              onChange={handleChange}
              className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ border: '1px solid #13498b40' }}
              />
            <img src="/watheeq/assets/img/accountdata1.png" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5" />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="بريدك الالكتروني"
              value={form.email}
              onChange={handleChange}
              className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              style={{ border: '1px solid #13498b40' }}            />
            <img src="/watheeq/assets/img/accountdata2.png" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5" />
          </div>
          <div className="flex gap-2 rtl:flex-row-reverse">
            <div className="w-[100px]">
              <PhoneInput
                country="sa"
                enableSearch
                value={countryCode}
                onChange={(value, country) =>
                  setCountryCode("+" + country.dialCode)
                }
                disableCountryCode
                disableDropdown={false}
                inputClass="!w-full !h-[50px] !text-center !rounded-lg !py-3 !border !border-blue-200 !text-sm !text-gray-700"
                class="border border-blue-200 !rounded-[10px_10px_10px_10px] p-2"                containerClass="!w-full"
                placeholder=""
              />
            </div>

            {/* Phone Number Input */}
            <div className="relative w-full">
              <input
                type="tel"
                placeholder="رقم الجوال"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                style={{ border: '1px solid #13498b40' }}              />
              <img src="/watheeq/assets/img/accountdata3.png" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5" />
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
              style={{ border: '1px solid #13498b40' }}            />
            <img src="/watheeq/assets/img/accountdata4.png" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5" />
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
              style={{ border: '1px solid #13498b40' }}            />
            <img src="/watheeq/assets/img/accountdata4.png" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5" />
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
            className="w-full bg-[#13498B] cursor-pointer text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
          >
            تسجيل
          </button>
        </form>
        <div className="w-full text-center mt-5">
          <p> لديك حساب بالفعل ؟ تسجيل الدخول</p>
        </div>
      </div>
    </section>
  );
}
