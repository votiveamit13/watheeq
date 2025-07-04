"use client";
import { useState } from "react";
import {
  FaUser,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaChalkboardTeacher,
  FaNewspaper,
  FaStar,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const tabs = [
  { id: "about", label: "نبذة عني", icon: <FaUser /> },
  { id: "services", label: "خدماتي", icon: <FaChalkboardTeacher /> },
  { id: "blog", label: "مدونتي", icon: <FaNewspaper /> },
  { id: "reviews", label: "التقييمات", icon: <FaStar /> },
];

const qualifications = [
  {
    year: "2015",
    title: "ماجستير في تعليم العلوم",
    institution: "جامعة الملك سعود",
    icon: <FaGraduationCap />,
  },
  {
    year: "2010",
    title: "بكالوريوس في الرياضيات",
    institution: "جامعة الملك عبدالعزيز",
    icon: <FaGraduationCap />,
  },
  {
    year: "2011",
    title: "دبلوم عالي في طرق التدريس",
    institution: "كلية المعلمين",
    icon: <FaCertificate />,
  },
];

const skills = [
  "الرياضيات المتقدمة",
  "الفيزياء",
  "الكيمياء",
  "الإحصاء",
  "الجبر",
  "حساب التفاضل والتكامل",
  "الهندسة",
  "اختبارات القدرات",
  "الاختبار التحصيلي",
];

const publication1 = [
  {
    image: "/watheeq/assets/img/publication-two.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
 و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث في طرق التعاقد، بل تمثل تحولًا جذريًا في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "أكمل القراءة",
    color: "#13498B80",
  },
  {
    image: "/watheeq/assets/img/publication1.png",
    title: `تطورات جديدة في مهنة المحاماة
تأثير الذكاء الاصطناعي على أداء المحامين`,
    description: `تشهد مهنة المحاماة تطورًا ملحوظًا بفضل استخدام تقنيات الذكاء الاصطناعي، مما يساعد المحامين على تحسين كفاءاتهم وتوفير الوقت في البحث....`,
    button: "قراءة الخبر كاملا",
    color: "#AC39D480",
  },
  {
    image: "/watheeq/assets/img/publication-three.png",
    title: `تصميم منهج تفاعلي قانوني لطلاب الجامعة`,
    description: `مع التطور السريعة لتكنولوجيا المعلومات، التي كانت نتيجة لإندماج تكنولوجيا الحاسوب والأجهزة `,
    button: "تفاصيل المشروع",
    skills: ["مهارة 1", "مهارة 2", "مهارة 3"],
    color: "#00BC1680",
  },
];

const publication2 = [
  {
    image: "/watheeq/assets/img/publication-two.png",
    title: `تأثير الذكاء الاصطناعي على أداء المحامين`,
    description: `تشهد مهنة المحاماة تطورًا ملحوظًا بفضل استخدام تقنيات الذكاء الاصطناعي، مما يساعد المحامين على تحسين كفاءاتهم وتوفير الوقت في البحث....`,
    button: "قراءة الخبر كاملا",
    color: "#13498B80",
  },
  {
    image: "/watheeq/assets/img/publication-two.png",
    title: `تأثير الذكاء الاصطناعي على أداء المحامين`,
    description: `تشهد مهنة المحاماة تطورًا ملحوظًا بفضل استخدام تقنيات الذكاء الاصطناعي، مما يساعد المحامين على تحسين كفاءاتهم وتوفير الوقت في البحث....`,
    button: "قراءة الخبر كاملا",
    color: "#13498B80",
  },
  {
    image: "/watheeq/assets/img/publication-three.png",
    title: `الدمج بين التعليم الإلكتروني والتعليم القانوني `,
    description: `مع التطور السريعة لتكنولوجيا المعلومات، التي كانت نتيجة لإندماج تكنولوجيا الحاسوب والأجهزة `,
    button: "تفاصيل المشروع",
    skills: ["مهارة 1", "مهارة 2", "مهارة 3"],
    color: "#00BC1680",
  },
];

const publication3 = [
  {
    image: "/watheeq/assets/img/publication1.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
 و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث في طرق التعاقد، بل تمثل تحولًا جذريًا في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "تفاصيل المشروع",
    color: "#AC39D480",
  },
  {
    image: "/watheeq/assets/img/publication1.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
 و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث في طرق التعاقد، بل تمثل تحولًا جذريًا في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "أكمل القراءة",
    color: "#AC39D480",
  },
  {
    image: "/watheeq/assets/img/publication1.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
 و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث في طرق التعاقد، بل تمثل تحولًا جذريًا في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "أكمل القراءة",
  },
];

const services = [
  {
    title: " إعداد وصياغة العقود القانونية ",
    description:
      "دروس متخصصة للتمرس بالمفاهيم المتقدمة لصياغة جميع أنواع العقود القانونية",
    price: 45,
    image: "/watheeq/assets/img/publication1.png",
  },

  {
    title: "إعداد البحوث القانونية",
    description:
      "شرح مفصل لمحاور البحوث بطريقة منهجية مع التركيز على المصادر المعتمدة وطرق الصياغة الصحيحة",
    price: 45,
    image: "/watheeq/assets/img/three-tab.png",
  },

  {
    title: "استشارات قانونية للأفراد",
    description:
      "ترسيخ مفاهيم القانون وشرح التحديات والمشكلات القانونية بطريقة مبسطة مع التركيز على المسارات القضائية",
    price: 45,
    image: "/watheeq/assets/img/four-tab.png",
  },

  {
    title: "كتابة مذكرة",
    description:
      "يقوم بمساعدة المتدرب في إدخال القدرات مع التركيز على المهارات الأكاديمية وفهم نماذج عمل المذكرات",
    price: 45,
    image: "/watheeq/assets/img/servicerequest.png",
  },

  {
    title: "تحضير للاختبار التحصيلي",
    description: `برنامج شامل للتحضير للاختبار التحصيلي في
المسار العلمي يغطي الرياضيات، الفيزياء،
الكيمياء، والأحياء.`,
    price: 45,
    image: "/watheeq/assets/img/six-tab.png",
  },

  {
    title: " حقوق جميع الأطرافصياغة الأنظمة لحفظ",
    description: `لتشجيع التعلم التعاوني وتبادل الخبرات بين
الطلاب بتكلفة أقل.`,
    price: 45,
    image: "/watheeq/assets/img/seven-tab.png",
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div
      className="w-full mx-auto bg-white shadow rounded- text-right"
      dir="rtl"
    >
      <div dir="rtl" className="w-full mx-auto mt-6">
        <div className="flex justify-start gap-2 bg-[#f8fcff] p-0 rounded-t-lg pt-3 pr-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-4 py-2 cursor-pointer rounded-t-lg text-sm font-medium transition-all hover:shadow-[0_-2px_4px_rgba(0,0,0,0.1)]
              ${
                activeTab === tab.id
                  ? "bg-[#0F4C81] text-white shadow-md"
                  : "bg-white text-[#0A3156] hover:bg[#F8FAFC] hover:border-[#CBD5E1]"
              }`}
              style={{
                border: "8px 8px 0px 0px",
                border: "solid 1px #E5E7EB",
                fontWeight: "400",
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="rounded-b-lg bg-white p-4 text-right hover:shadow"
          style={{ borderRight: "solid 5px #FBB040", borderRadius: "5px" }}
        >
          {activeTab === "about" && (
            <>
              <div dir="rtl" className="w-full mb-6">
                <h2 className="text-[#0F4C81] font-bold text-[25px] pt-3 pb-5">
                  نبذة عني
                </h2>

                <div
                  className="relative w-full bg-gray-200 rounded-full"
                  style={{ background: "#2A6CA5", height: "2px" }}
                >
                  <div
                    className="absolute top-0 left-0 rounded-full bg-[#FBB040] w-[60%]"
                    style={{ height: "2px" }}
                  ></div>

                  <div
                    className="absolute top-1/2 left-[40%]"
                    style={{ background: "#0F4C81" }}
                  ></div>
                </div>

                <div className="flex items-center justify-end gap-4">
                  <div className="flex-1 relative">
                    <div className="absolute right-0 top-0 h-0.5 w-[30%]"></div>
                    <p className="pt-8" style={{ color: "#334155" }}>
                      حاصل على درجة الماجستير في تعليم العلوم من جامعة الملك
                      سعود، وشهادة بكالوريوس في الرياضيات. أؤمن بأن كل طالب لديه
                      القدرة على التفوق في المواد العلمية عندما يتم تقديم
                      المعلومات بطريقة مبسطة وجذابة.
                    </p>
                    <p className="pt-5" style={{ color: "#334155" }}>
                      أقدم دروسًا خصوصية في الرياضيات والفيزياء والكيمياء، وأعمل
                      على تطوير مهارات الطلاب وتعزيز ثقتهم بأنفسهم من خلال
                      أساليب تعليمية حديثة ومبتكرة.
                    </p>

                    <p className="pt-5" style={{ color: "#334155" }}>
                      أمتلك سجلًا حافلًا من النجاحات مع طلابي، حيث ساعدت المئات
                      منهم على تحسين درجاتهم وتحقيق معدلات عالية في الاختبارات
                      المدرسية واختبارات القدرات والتحصيلي.
                    </p>

                    <div dir="rtl" className="w-full mx-auto space-y-6">
                      <div className="flex items-center justify-start pt-4 gap-2 pt-15">
                        <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>
                        <h3 className="text-[#0F4C81] font-semibold text-lg">
                          المؤهلات الدراسية
                        </h3>
                      </div>

                      <div className="space-y-4">
                        {qualifications.map((item, index) => (
                          <div
                            key={index}
                            className="bg-[#F8FAFC] border border-[#E5E7EB] p-4 rounded-md flex items-center justify-between hover:bg-white hover:border-[#FDC06B]"
                          >
                            <div
                              className="text-[#0F4C81] text-xl"
                              style={{
                                background: "#2A6CA51A",
                                padding: "8px",
                                borderRadius: "50px",
                              }}
                            >
                              {item.icon}
                            </div>

                            <div className="text-right flex-1 pr-4">
                              <p className="font-semibold text-[#0F4C81]">
                                {item.title}
                              </p>
                              <p className="text-sm text-gray-500 mt-1">
                                {item.institution}
                              </p>
                            </div>

                            <span className="bg-[#0F4C81] text-white text-sm px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div
                        dir="rtl"
                        className="w-full mx-auto space-y-6"
                      >
                        <div>
                          <div className="flex items-center justify-start gap-2 mb-8">
                            <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>
                            <h3 className="text-[#0F4C81] font-semibold text-lg">
                              المهارات والتخصصات
                            </h3>
                          </div>
                          <div className="flex flex-wrap justify-start gap-2">
                            {skills.map((skill, index) => (
                              <span
                                key={index}
                                className="bg-[#F0F9FF] text-[#0F4C81] border border-[#BFDBFE] text-sm px-3 py-1 rounded-full hover:bg-[#FDC06B] hover:border-[#BFDBFE] cursor-pointer"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-start gap-2 mb-2 pt-3">
                            <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>

                            <p className="text-[#0F4C81] font-medium">
                              تواصل معي عبر وسائل التواصل الاجتماعي
                            </p>
                          </div>
                          <div className="flex gap-5 items-center pt-5">
                            <div className="rounded-full cursor-pointer p-2 bg-[#F0F9FF] hover:bg-[#0F4C81] transition-colors duration-300 group">
                              <FaXTwitter className="w-5 h-5 transition-colors duration-300 fill-[#0F4C81] group-hover:fill-white" />
                            </div>

                            <div className="rounded-full cursor-pointer p-2 bg-[#F0F9FF] hover:bg-[#0F4C81] transition-colors duration-300 group">
                              <FaTiktok className="w-5 h-5 transition-colors duration-300 fill-[#0F4C81] group-hover:fill-white" />
                            </div>
                            <div className="rounded-full cursor-pointer p-2 bg-[#F0F9FF] hover:bg-[#0F4C81] transition-colors duration-300 group">
                              <FaInstagram className="w-5 h-5 transition-colors duration-300 fill-[#0F4C81] group-hover:fill-white" />
                            </div>
                            <div className="rounded-full cursor-pointer p-2 bg-[#F0F9FF] hover:bg-[#0F4C81] transition-colors duration-300 group">
                              <FaYoutube className="w-5 h-5 transition-colors duration-300 fill-[#0F4C81] group-hover:fill-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "services" && (
            <>
              <h2 className="text-[#0F4C81] font-bold text-[25px] lg:pt-8 pb-5 pt-4">
                الخدمات القانونية
              </h2>

              <div
                className="relative w-full bg-gray-200 rounded-full"
                style={{ background: "#2A6CA5", height: "2px" }}
              >
                <div
                  className="absolute top-0 left-0 rounded-full bg-[#FBB040] w-[60%]"
                  style={{ height: "2px" }}
                ></div>

                <div
                  className="absolute top-1/2 left-[40%]"
                  style={{ background: "#0F4C81" }}
                ></div>
              </div>

              <div
                dir="rtl"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4"
              >
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow rounded-lg overflow-hidden border border-gray-200 hover:border-[#FDC06B]"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-start gap-0 pb-0">
                        <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>
                        <h3
                          className="text-md font-semibold text-gray-800 mb-1 pr-2"
                          style={{ height: "30px" }}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <p
                        className="text-sm text-gray-600 mb-4 pt-3"
                        style={{ height: "65px" }}
                      >
                        {service.description}
                      </p>
                      <div
                        className="flex items-center justify-between mt-auto pt-3"
                        style={{ borderTop: "solid 1px #E5E7EB" }}
                      >
                        <span
                          className="font-semibold text-md flex items-center gap-1"
                          style={{ color: "#13498B" }}
                        >
                          {service.price}
                          <img
                            src="/watheeq/assets/img/servicerequest1.png"
                            style={{ width: "15px" }}
                          />
                        </span>
                        <button className="bg-[#FBB040] hover:bg-yellow-500 text-white cursor-pointer text-sm font-medium px-5 py-2 rounded hover:bg-[#FDC06B]">
                          طلب الخدمة
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {activeTab === "blog" && (
            <>
              <div className="bg-white lg:mt-5 mt-0 p-5 rounded-lg">
                <div className="flex justify-between">
                  <div className="w-full">
                    <div className="flex items-center justify-start gap-2 pb-5">
                      <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>
                      <h3 className="text-[#0F4C81] font-semibold text-lg">
                        المنشورات
                      </h3>
                    </div>

                    <div
                      className="relative w-full bg-gray-200 rounded-full"
                      style={{ background: "#2A6CA5", height: "2px" }}
                    >
                      <div
                        className="absolute top-0 left-0 rounded-full bg-[#FBB040] w-[60%]"
                        style={{ height: "2px" }}
                      ></div>

                      <div
                        className="absolute top-1/2 left-[40%]"
                        style={{ background: "#0F4C81" }}
                      ></div>
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl mb-3">تصنيف 1</h3>
                  <div className="block md:flex gap-5 w-full justify-center mt-4">
                    {publication1.map((item, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg flex flex-col items-center text-center lg:w-1/3 w-1/1"
                      >
                        <div
                          className="w-full h-7 absolute rounded-t-lg"
                          style={{ backgroundColor: item.color }}
                        ></div>

                        <img
                          src={item.image}
                          alt="watheeq"
                          className="mb-3 rounded-t-lg w-full h-50 object-cover"
                        />

                        <h4 className="text-[#13498B] text-base font-semibold mb-2 whitespace-pre-line">
                          {item.title}
                        </h4>

                        <p className="text-[#3A3A38] text-sm whitespace-pre-line mb-3">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-3">
                          {item.skills?.map((skill, i) => (
                            <span
                              key={i}
                              className="border border-[#00BC1680] text-xs font-medium px-7 py-2 rounded"
                              style={{
                                color: "#0BB41F",
                                background: "#0BB41F1A",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <button
                          className="cursor-pointer border border-[#13498B80] w-1/2 lg:w-[50%] md:w-full text-sm py-2 px-5 mt-1 rounded-lg"
                          style={{ position: "absolute", bottom: "-40px" }}
                        >
                          {item.button}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div dir="ltr" className="lg:mt-28 mt-20 lg:mb-0 mb-8">
                    <button
                      className="flex gap-2 items-center py-2 px-10 rounded-lg border border-[#13498B80] bg-[#13498B] text-white cursor-pointer
  justify-center mx-auto w-full
  md:justify-start md:mx-0 md:w-auto"
                    >
                      عرض المزيد
                    </button>
                  </div>
                </div>

                <div className="mt-0">
                  <div className="flex items-center justify-start pt-4 gap-2 pt-0">
                    <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>
                    <h3 className="text-[#0F4C81] font-semibold text-lg">
                      مقالات عني
                    </h3>
                  </div>

                  <div className="block md:flex gap-5 w-full justify-center mt-4">
                    {publication2.map((item, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg flex flex-col items-center text-center lg:w-1/3 w-1/1 lg:mb-0 mb-8"
                      >
                        <div
                          className="w-full h-7 absolute rounded-t-lg"
                          style={{ backgroundColor: item.color }}
                        ></div>

                        <img
                          src={item.image}
                          alt="watheeq"
                          className="mb-3 rounded-t-lg w-full h-50 object-cover"
                        />

                        <h4 className="text-[#13498B] text-base font-semibold mb-2 whitespace-pre-line">
                          {item.title}
                        </h4>

                        <p className="text-[#3A3A38] text-sm whitespace-pre-line mb-3">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-3">
                          {item.skills?.map((skill, i) => (
                            <span
                              key={i}
                              className="border border-[#00BC1680] text-xs font-medium px-7 py-2 rounded"
                              style={{
                                color: "#0BB41F",
                                background: "#0BB41F1A",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <button className="cursor-pointer border border-[#13498B80] w-1/2 lg:w-[50%] md:w-full text-sm py-2 px-5 mt-1 rounded-lg">
                          {item.button}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div
                    dir="ltr"
                    className="lg:mt-25 mt-18 lg:mb-0 mb-8 md:mt-8"
                  >
                    <button
                      className="flex gap-2 items-center py-2 px-10 rounded-lg border border-[#13498B80] bg-[#13498B] text-white cursor-pointer
  justify-center mx-auto w-full
  md:justify-start md:mx-0 md:w-auto"
                      style={{ marginTop: "-20px" }}
                    >
                      عرض المزيد
                    </button>
                  </div>
                </div>

                <div className="mt-0 lg:mb-15 mb-4">
                  <div className="flex items-center justify-start pt-4 gap-2 pt-0">
                    <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>
                    <h3 className="text-[#0F4C81] font-semibold text-lg">
                      مقالات عملية
                    </h3>
                  </div>

                  <div className="block md:flex gap-5 w-full justify-center mt-4">
                    {publication3.map((item, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg flex flex-col items-center text-center lg:w-1/2 w-1/1 lg:mb-0 mb-8"
                      >
                        <div
                          className="w-full h-7 absolute rounded-t-lg"
                          style={{ backgroundColor: item.color }}
                        ></div>

                        <img
                          src={item.image}
                          alt="watheeq"
                          className="mb-3 rounded-t-lg w-full h-50 object-cover"
                        />

                        <h4 className="text-[#13498B] text-base font-semibold mb-2 whitespace-pre-line">
                          {item.title}
                        </h4>

                        <p className="text-[#3A3A38] text-sm whitespace-pre-line mb-3">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-3">
                          {item.skills?.map((skill, i) => (
                            <span
                              key={i}
                              className="border border-[#00BC1680] text-xs font-medium px-7 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <button className="cursor-pointer border border-[#13498B80] w-1/2 lg:w-[50%] md:w-full text-sm py-2 px-5 mt-1 rounded-lg">
                          {item.button}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div dir="ltr" className="lg:mt-28 mt-20 md:mt-13">
                    <button
                      className="flex gap-2 items-center py-2 px-10 rounded-lg border border-[#13498B80] bg-[#13498B] text-white cursor-pointer
                        justify-center mx-auto w-full
                        md:justify-start md:mx-0 md:w-auto"
                      style={{ marginTop: "-35px" }}
                    >
                      عرض المزيد
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "reviews" && (
            <>
              <h2 className="text-[#0F4C81] font-bold text-[25px] pt-3 pb-5">
                آراء الطلاب وأولياء الأمور
              </h2>

              <div
                className="relative w-full bg-gray-200 rounded-full"
                style={{ background: "#2A6CA5", height: "2px" }}
              >
                <div
                  className="absolute top-0 left-0 rounded-full bg-[#FBB040] w-[60%]"
                  style={{ height: "2px" }}
                ></div>
                <div
                  className="absolute top-1/2 left-[40%]"
                  style={{ background: "#0F4C81" }}
                ></div>
              </div>

              <div className="space-y-4 bg-gray-50 p-4">
                <div className="bg-[#F8FAFC] p-6 rounded-md border hover:shadow space-y-4">
                  <div className="flex justify-normal gap-18 items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src="/watheeq/assets/img/rating-one.png"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-sm font-bold text-right">
                        عبدالرحمن السعيد
                      </div>
                    </div>
                    <div
                      className="text-sm text-gray-500"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <span>2025</span>
                      <div
                        className="flex justify-end gap-0 text-yellow-400 text-sm"
                        style={{ fontSize: "15px" }}
                      >
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-right text-gray-700 leading-relaxed">
                    الأستاذ محمد من أفضل من درست معهم في حياتي. أسلوبه في الشرح
                    بسيط وممتع، ويستخدم طرقًا مبتكرة لتوصيل المعلومات. بفضله
                    ارتفع مستواي في الرياضيات بشكل ملحوظ وحصلت على درجة كاملة في
                    اختبار القدرات.{" "}
                  </p>
                </div>

                <div className="bg-[#F8FAFC] p-6 rounded-md border hover:shadow space-y-4">
                  <div className="flex justify-normal gap-18 items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src="/watheeq/assets/img/rating-two.png"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-sm font-bold text-right">
                        نورة الفهد (ولية أمر)
                      </div>
                    </div>
                    <div
                      className="text-sm text-gray-500"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <span>2025</span>
                      <div
                        className="flex justify-end gap-0 text-yellow-400 text-sm"
                        style={{ fontSize: "15px" }}
                      >
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-right text-gray-700 leading-relaxed">
                    كان ابني يعاني من صعوبة في فهم الفيزياء، وبعد عدة جلسات مع
                    الأستاذ محمد، أصبح يحب المادة ويتفوق فيها. أقدر صبره
                    واهتمامه بتعزيز ثقة الطالب بنفسه وتشجيعه على التفكير النقدي.{" "}
                  </p>
                </div>

                <div
                  className="bg-[#F8FAFC] p-6 rounded-md border hover:shadow space-y-4"
                  style={{ fontSize: "15px" }}
                >
                  <div className="flex justify-normal gap-18 items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src="/watheeq/assets/img/rating-three.png"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-sm font-bold text-right">
                        فيصل المطيري
                      </div>
                    </div>
                    <div
                      className="text-sm text-gray-500"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <span>2025</span>
                      <div className="flex justify-end gap-0 text-yellow-400 text-sm">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-right text-gray-700 leading-relaxed">
                    الأستاذ محمد ساعدني كثيرًا في فهم الكيمياء العضوية التي كنت
                    أعتبرها من أصعب المواد. يتميز بقدرته على تبسيط المفاهيم
                    المعقدة وربطها بأمثلة عملية. ملتزم جدًا بالمواعيد ومتعاون مع
                    الطلاب حتى خارج أوقات الدروس.{" "}
                  </p>
                </div>

                <div
                  className="bg-[#F8FAFC] p-6 rounded-md border hover:shadow space-y-4"
                  style={{ fontSize: "15px" }}
                >
                  <div className="flex justify-normal gap-18 items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src="/watheeq/assets/img/rating-four.png"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-sm font-bold text-right">
                        سارة العتيبي
                      </div>
                    </div>
                    <div
                      className="text-sm text-gray-500"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <span>2025</span>
                      <div className="flex justify-end gap-0 text-yellow-400 text-sm">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-right text-gray-700 leading-relaxed">
                    أخذت دورة تحضيرية للاختبار التحصيلي مع الأستاذ محمد، وكانت
                    تجربة رائعة. المادة العلمية منظمة وشاملة، والأستاذ يعرف
                    تمامًا نقاط الضعف الشائعة عند الطلاب ويركز عليها. أنصح به
                    بشدة لأي طالب يريد تحسين مستواه العلمي.{" "}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
