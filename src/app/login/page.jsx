import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen flex font-sans text-right">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-10 text-center">
        <img
          src="/watheeq/assets/img/logo.png"
          alt="logo"
          className="w-50 mb-4"
        />
        <img
          src="/watheeq/assets/img/login.png"
          alt="illustration"
          className="w-64 mb-6"
        />
        <h3 className="text-lg text-[#0B2B51] font-medium">
          واجهة تحكم قانونية لإدارة صفحتك كمحام محترف
        </h3>

        <div className="flex justify-center items-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 1 ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
      <div className="w-1/2 bg-[#F5F8FB] flex flex-col justify-center px-20">
        <div className="max-w-md w-full mx-auto space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-[#0B2B51] mb-2">
              تسجيل الدخول
            </h2>
            <p className="text-gray-600">
              مرحبًا مرة أخرى! يرجى إدخال معلومات تسجيل الدخول الخاصة بك.
            </p>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder=" بريدك الالكتروني"
              className="w-full border border-blue-200 rounded-lg p-3 pr-10 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="كلمة مرور"
              className="w-full border border-blue-200 rounded-lg p-3 pr-10 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <button className="w-full bg-[#003D79] text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition">
            دخول
          </button>

          <p className="text-sm text-gray-600 text-center">
            ليس لديك حساب؟{" "}
            <span className="text-blue-700 font-semibold cursor-pointer">
              حساب جديد
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
