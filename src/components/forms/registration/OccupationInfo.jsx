import { FaUpload } from "react-icons/fa";
import axios from "axios";
import {BackendUrl} from '../../../config/url';

export default function OccupationInfo({ onNext, formData, setFormData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("number", formData.number);
    form.append("password", formData.password);
    form.append("specialty", formData.specialty);
    form.append("experience", formData.experience);
    if (formData.certificates)
      form.append("certificates", formData.certificates);
    if (formData.license) form.append("license", formData.license);

    try {
      const res = await axios.post(`${BackendUrl}/api/register`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onNext();
    } catch (err) {
      alert("فشل التسجيل. حاول مرة أخرى.");
      console.error(err.response?.data || err.message);
    }
  };
  return (
    <section className="max-w-md mx-auto p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">معلومات المهنة</h2>
        <p>قم بإدخال معلومات مهنتك لاستكمال حسابك في وثيق</p>
      </div>
      <div className="w-full  space-y-6">
        <div className="flex justify-center gap-8">
          <form className="space-y-5 rounded-lg onSubmit={handleSubmit}">
            <div className="w-full">
              <label className="w-full block mb-1 text-sm font-semibold text-[#0B2B51]">
                التخصص
              </label>
              <input
                type="text"
                placeholder="ادخل تخصصك"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    specialty: e.target.value,
                  }))
                }
                className="w-full text-right border border-blue-200 rounded-lg p-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-[#0B2B51]">
                عدد سنوات الخبرة
              </label>
              <input
                type="number"
                placeholder="2"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    experience: e.target.value,
                  }))
                }
                className="w-full text-right border border-blue-200 rounded-lg p-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-[#0B2B51]">
                الشهادات الأكاديمية أو المهنية
              </label>
              <input
                type="file"
                className="w-full text-right border border-blue-200 rounded-lg p-3 file:hidden placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="رفع الملفات"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    certificates: e.target.files[0],
                  }))
                }
              />
              <div className="flex items-center mt-1 text-sm text-gray-400">
                <FaUpload className="ml-2" />
                <span>رفع الملفات</span>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-[#0B2B51]">
                التراخيص المهنية
              </label>
              <input
                type="file"
                className="w-full text-right border border-blue-200 rounded-lg p-3 file:hidden placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="رفع الملفات"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    license: e.target.files[0],
                  }))
                }
              />
              <div className="flex items-center mt-1 text-sm text-gray-400">
                <FaUpload className="ml-2" />
                <span>رفع الملفات</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="accent-blue-700 mt-1"
                defaultChecked
              />
              <p className="text-sm text-[#0B2B51]">
                من خلال إنشاء حساب، فإنك توافق على
                <span className="text-blue-700 font-semibold cursor-pointer">
                  {" "}
                  الشروط والأحكام وسياسة الخصوصية
                </span>
              </p>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#003D79] text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
            >
              تسجيل
            </button>

            <p className="text-center text-sm text-gray-600 mt-2">
              لديك حساب بالفعل؟{" "}
              <span className="text-blue-700 font-semibold cursor-pointer">
                تسجيل الدخول
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
