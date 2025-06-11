"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {BackendUrl} from '@/config/url';
import axios from "axios";

export default function RegisterForm({ onNext, formData, setFormData, setOtpFromServer }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+966");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

    const handlePhoneChange = (value) => {
    const fullNumber = countryCode + value.replace(/^0+/, "");
    setFormData((prev) => ({ ...prev, number: fullNumber }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, number, password, confirmPassword } = formData;
    if (!name || !email || !number || !password || !confirmPassword) {
      alert("يرجى ملء جميع الحقول");
      return;
    }

     if (password !== confirmPassword) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }


    try {
    const res = await axios.post(`${BackendUrl}/api/send-otp`, {
      email,
    });
    setOtpFromServer(res.data.otp);
    onNext();
  } catch (err) {
  if (err.response) {
    console.error("Backend error:", err.response.data);
    alert(`خطأ من الخادم: ${JSON.stringify(err.response.data)}`);
  } else if (err.request) {
    console.error("No response received:", err.request);
    alert("لم يتم تلقي استجابة من الخادم. تحقق من الاتصال.");
  } else {
    console.error("Request setup error:", err.message);
    alert("حدث خطأ أثناء إعداد الطلب: " + err.message);
  }
}
  };

  return (
    <section className="max-w-md mx-auto p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">حساب جديد</h2>
        <p>قم بإدخال معلوماتك لإنشاء حساب في وثيق</p>
      </div>

      <div className="bg-[#F7FBFD] rounded-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="اسمك بالكامل"
              value={formData.name}
              onChange={handleChange}
              className="w-full pr-10 border border-blue-200 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="بريدك الالكتروني"
              value={formData.email}
              onChange={handleChange}
              className="w-full pr-10 border border-blue-200 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                inputClass="!w-full !text-center !rounded-lg !py-3 !border !border-blue-200 !text-sm !text-gray-700"
                buttonClass="!border-blue-200"
                containerClass="!w-full"
                placeholder=""
              />
            </div>

            <div className="relative w-full">
              <input
                type="tel"
                placeholder="رقم الجوال"
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="w-full pr-10 border border-blue-200 rounded-lg p-3 text-right"
              />
              <FaPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="كلمة المرور"
              value={formData.password}
              onChange={handleChange}
              className="w-full pr-10 border border-blue-200 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pr-10 border border-blue-200 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
            className="w-full bg-[#13498B] text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
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
