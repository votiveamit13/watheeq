"use client";
import { useState } from "react";
import { PiUpload } from "react-icons/pi";
import { TbFileCertificate } from "react-icons/tb";

export default function CreateServiceRequest() {
  const [submitDialog, setSubmitDialog] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="bg-white p-5 mt-5 rounded-lg mb-30">
      <h2 className="text-2xl font-bold">طلب خدمة</h2>
      <div className="relative mt-5 flex flex-col items-center">
        <div className="relative inline-block w-full">
        <img
  src="/watheeq/assets/img/servicerequest.png"
  alt="watheeq"
  className="w-full h-[250px] object-cover object-right sm:h-auto rounded-lg"
/>


          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[] to-[#13498B]"
            style={{ borderRadius: "10px" }}
          ></div>
        </div>
        <p className="absolute lg:text-3xl text-[16px] text-white font-bold font-center lg:mt-50 mt-[120px]">
          مهارات إعداد وصياغة العقود القانونية
        </p>
        <div className="absolute flex items-center lg:mt-65 mt-40 bg-white py-2 px-5 rounded-lg gap-3 cursor-pointer">
          <button className="text-2xl text-[#13498B] cursor-pointer">45</button>
          <img
            src="/watheeq/assets/img/servicerequest1.png"
            alt="watheeq"
            width={20}
          />
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-bold">تفاصيل الخدمة :</h3>
        <p className="mt-5 leading-[2] text-[#000000B2]">
          هل تحتاج إلى عقد قانوني محكم يحمي حقوقك ويلبي احتياجاتك بدقة؟نقدّم لك
          خدمة صياغة ومراجعة العقود من قبل مهنيين قانونيين ذوي خبرة، لضمان وضوح
          الشروط، وتجنب الثغرات، وحماية مصالحك بالكامل.
        </p>
        <span className="leading-[2] text-[#000000B2]">
          سواء كنت فردًا أو شركة، نساعدك على:
        </span>
        <ul className="leading-[2] text-[#000000B2] list-disc mr-5">
          <li>إعداد عقد جديد من الصفر، يتوافق مع القوانين المحلية والدولية.</li>
          <li>مراجعة عقد قائم واكتشاف أي نقاط ضعف أو بنود مجحفة.</li>
          <li>تقديم اقتراحات تعديل واضحة واحترافية.</li>
          <li>شرح البنود القانونية بلغة مفهومة وغير معقدة.</li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-bold">معلومات المهني</h3>
        <div className="flex items-center justify-start mt-5">
          <div>
            <img src="/watheeq/assets/img/servicerequest2.png" alt="watheeq" />
          </div>
          <div className="flex flex-col text-[#000000B2] leading-[2.5] mr-5">
            <span>اسم المهني </span>
            <span>التخصص :</span>
            <span>عدد الطلبات المنجزة:</span>
            <span>التقييم العام:</span>
          </div>
          <div className="flex flex-col leading-[2.5]">
            <span>أحمد ماضي</span>
            <span>قانون العقود والاتفاقيات</span>
            <span>27 طلب</span>
            <span> (4.7 من 5)</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-5">تعبئة الطلب</h3>
        <form className="mb-5">
          <div className="mb-5">
            <label className="block mb-1 text-lg text-[#0B2B51]">
              عنوان الطلب
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          <div className="w-full flex justify-between mb-5">
            <div className="w-full">
              <div>
                <label className="w-full block mb-3 text-lg text-[#0B2B51]">
                  إرفاق ملفات
                </label>
              </div>
              <div className="flex gap-2 rtl:flex-row-reverse">
                <div className="w-[100px] h-[52px] border border-[#13498b40] rounded-lg flex items-center justify-center">
                  <PiUpload className="top-1/2 w-10 h-8" />
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    name="professionallicense"
                    placeholder="رابط الملف"
                    className="w-full pr-10 rounded-lg p-3 text-right placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    style={{ border: "1px solid #13498b40" }}
                  />
                  <TbFileCertificate className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#13498B] w-6 size-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="block mb-1 text-lg text-[#0B2B51]">
              تفاصيل إضافية
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            ></textarea>
          </div>
        </form>
        <div className="mt-10 mb-5 flex justify-center">
          <button
            className="cursor-pointer bg-[#13498B] text-white py-3 px-8"
            onClick={() => setSubmitDialog(true)}
            style={{ borderRadius: "6px" }}
          >
            تقديم الطلب
          </button>
          {submitDialog && (
            <div className="fixed inset-0 bg-[#0000007d] bg-opacity-30 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-md text-center">
                {!isSuccess ? (
                  <>
                    <h2 className="text-xl font-bold text-[#13498B] mb-4">
                      تسديد الفاتورة
                    </h2>
                    <div className="space-y-4 font-medium text-[#004080]">
                      {[
                        ["سعر الخدمة", "7,290"],
                        ["رسوم المنصة", "2"],
                        ["اجمالي الدفع", "7,290"],
                      ].map(([label, value], i) => (
                        <div
                          key={i}
                          className="flex justify-center ml-15 mr-15 gap-10 items-center"
                        >
                          <div>{label}</div>
                          <div className="flex gap-2 items-center">
                            <span className="text-[#004080] font-bold">
                              {value}
                            </span>
                            <span className="text-gray-400">
                              <img
                                src="/watheeq/assets/img/business1.png"
                                alt="watheeq"
                              />
                            </span>
                          </div>
                        </div>
                      ))}

                      <div className="flex justify-center gap-4 pt-4">
                        <button
                          className="cursor-pointer px-13 py-2 bg-[#004080] text-white rounded-md hover:bg-[#003366]"
                          onClick={handleFinalSubmit}
                        >
                          دفع
                        </button>
                        <button
                          className="cursor-pointer px-13 py-2 border border-[#004080] text-[#004080] rounded-md hover:bg-gray-100"
                          onClick={() => setSubmitDialog(false)}
                        >
                          إلغاء
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center mt-5 mb-5">
                    <div className="rounded-full border-[10px] border-gray-200  mb-4">
                      <div className="bg-[#004080] w-20 h-20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[#004080] text-xl font-bold">
                      تم طلب الخدمة بنجاح
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
