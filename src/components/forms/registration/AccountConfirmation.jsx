"use client";
import { useState } from "react";

export default function AccountConfirmation({onNext}) {
  const [otp, setOtp] = useState(["", "", "", "", ""]);

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

    onNext();
  };

  return (
    <section className="max-w-md mx-auto p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-center md:text-right">تأكيد الحساب</h2>
        <p className="text-center md:text-right">أدخل كود التحقق المرسل الى البريد الالكتروني</p>
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

        <button onClick={handleSubmit} className="w-full bg-[#13498B] text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition cursor-pointer">
          تأكيد
        </button>
      </div>
    </section>
  );
}
