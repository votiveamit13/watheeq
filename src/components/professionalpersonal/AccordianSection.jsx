
'use client';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaTiktok, FaInstagram, FaYoutube, FaLinkedinIn, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { FaUser, FaClipboard, FaBlog, FaStar, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const tabs = [
  { id: 'about', label: 'نبذة عني', icon: <FaUser /> },
  { id: 'services', label: 'خدماتي', icon: <FaClipboard /> },
  { id: 'blog', label: 'مدونتي', icon: <FaBlog /> },
  { id: 'reviews', label: 'التقييمات', icon: <FaStar /> },

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
    image: "/watheeq/assets/img/publication1.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث
في طرق التعاقد، بل تمثل تحولًا جذريًا
في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "أكمل القراءة",
    color: "#AC39D480",
  },
  {
    image: "/watheeq/assets/img/publication2.png",
    title: `تطورات جديدة في مهنة المحاماة
تأثير الذكاء الاصطناعي على أداء المحامين`,
    description: `تشهد مهنة المحاماة تطورًا ملحوظًا بفضل استخدام تقنيات الذكاء الاصطناعي، مما يساعد المحامين على تحسين كفاءاتهم وتوفير الوقت في البحث....`,
    button: "قراءة الخبر كاملا",
    color: "#0A84FF80",
  },
  {
    image: "/watheeq/assets/img/publication3.png",
    title: `مرافعة قضية أسرية شائكة`,
    description: `العقود الإلكترونية ليست مجرد تحديث
في طرق التعاقد، بل تمثل تحولًا جذريًا`,
    button: "تفاصيل المشروع",
    skills: ["مهارة 1", "مهارة 1", "مهارة 1", "مهارة 1", "مهارة 1"],
    color: "#00BC1680",
  },
];

const publication2 = [
  {
    image: "/watheeq/assets/img/publication1.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث
في طرق التعاقد، بل تمثل تحولًا جذريًا
في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "أكمل القراءة",
    color: "#AC39D480",
  },
  {
    image: "/watheeq/assets/img/publication1.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث
في طرق التعاقد، بل تمثل تحولًا جذريًا
في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "أكمل القراءة",
    color: "#AC39D480",
  },
  {
    image: "/watheeq/assets/img/publication1.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث
في طرق التعاقد، بل تمثل تحولًا جذريًا
في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "أكمل القراءة",
    color: "#AC39D480",
  },
];

const publication3 = [
  {
    image: "/watheeq/assets/img/publication3.png",
    title: `مرافعة قضية أسرية شائكة`,
    description: `العقود الإلكترونية ليست مجرد تحديث
في طرق التعاقد، بل تمثل تحولًا جذريًا
`,
    button: "تفاصيل المشروع",
    skills: ["مهارة 1", "مهارة 1", "مهارة 1", "مهارة 1", "مهارة 1"],
    color: "#00BC1680",
  },
  {
    image: "/watheeq/assets/img/publication1.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث
في طرق التعاقد، بل تمثل تحولًا جذريًا
في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "أكمل القراءة",
    color: "#AC39D480",
  },
  {
    image: "/watheeq/assets/img/publication1.png",
    title: `العقود الإلكترونية بين تسهيل التجارة
و التحديات القانونية`,
    description: `العقود الإلكترونية ليست مجرد تحديث
في طرق التعاقد، بل تمثل تحولًا جذريًا
في كيفية تصورنا للعلاقة القانونية بين الأطراف`,
    button: "أكمل القراءة",
    color: "#AC39D480",
  },
];


export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('about');
  return (
    <div className="w-full mx-auto bg-white shadow rounded- text-right" dir="rtl">
      <div dir="rtl" className="w-full mx-auto mt-6">
        <div className="flex justify-start gap-2 bg-[#f8fcff] p-0 rounded-t-lg pt-3 pr-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-4 py-2 cursor-pointer rounded-t-lg text-sm font-medium transition-all 
              ${activeTab === tab.id
                  ? 'bg-[#0F4C81] text-white shadow-md'
                  : 'bg-white text-[#0A3156] hover:bg-gray-100'
                }`}
              style={{ border: '8px 8px 0px 0px', border: 'solid 1px #E5E7EB', fontWeight: '400' }}>
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="rounded-b-lg bg-white p-4 text-right" style={{ borderRight: 'solid 5px #FBB040', borderRadius: '5px' }}>
          {activeTab === 'about' && (
            <>
              <div dir="rtl" className="w-full mb-6">
                <h2 className="text-[#0F4C81] font-bold text-[25px] pt-3 pb-5">نبذة عني</h2>


                <div className="relative w-full bg-gray-200 rounded-full" style={{ background: '#2A6CA5', height: '2px' }}>

                  <div className="absolute top-0 left-0 rounded-full bg-[#FBB040] w-[60%]" style={{ height: '2px' }}></div>

                  <div
                    className="absolute top-1/2 left-[40%]"
                    style={{ background: '#0F4C81' }}></div>
                </div>


                <div className="flex items-center justify-end gap-4">



                  <div className="flex-1 relative">

                    <div className="absolute right-0 top-0 h-0.5 w-[30%]">
                    </div>
                    <p className='pt-8' style={{ color: '#334155' }}>حاصل على درجة الماجستير في تعليم العلوم من جامعة الملك سعود، وشهادة بكالوريوس في الرياضيات. أؤمن بأن كل طالب لديه القدرة على التفوق في المواد العلمية عندما يتم تقديم المعلومات بطريقة
                      مبسطة وجذابة.</p>
                    <p className='pt-5' style={{ color: '#334155' }}>أقدم دروسًا خصوصية في الرياضيات والفيزياء والكيمياء، وأعمل على تطوير مهارات الطلاب وتعزيز ثقتهم بأنفسهم من خلال أساليب تعليمية حديثة ومبتكرة.</p>

                    <p className='pt-5' style={{ color: '#334155' }}>أمتلك سجلًا حافلًا من النجاحات مع طلابي، حيث ساعدت المئات منهم على تحسين درجاتهم وتحقيق معدلات عالية في الاختبارات المدرسية واختبارات القدرات والتحصيلي.</p>



                    <div dir="rtl" className="w-full mx-auto space-y-6">
                      {/* Section Title */}
                      <div className="flex items-center justify-start pt-4 gap-2 pt-15">
                        <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>
                        <h3 className="text-[#0F4C81] font-semibold text-lg">المؤهلات الدراسية</h3>
                      </div>

                      {/* Cards */}
                      <div className="space-y-4">
                        {qualifications.map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-md flex items-center justify-between"
                            style={{ border: 'solid 1px #E5E7EB' }}>
                            {/* Year Badge */}

                            <div className="text-[#0F4C81] text-xl" style={{ background: '#2A6CA51A', padding: '8px', borderRadius: '50px' }}>{item.icon}</div>


                            {/* Text Content */}
                            <div className="text-right flex-1 pr-4">
                              <p className="font-semibold text-[#0F4C81]">{item.title}</p>
                              <p className="text-sm text-gray-500 mt-1">{item.institution}</p>
                            </div>

                            {/* Icon */}
                            <span className="bg-[#0F4C81] text-white text-sm px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                          </div>
                        ))}
                      </div>


                      <div dir="rtl" className="w-full max-w-5xl mx-auto space-y-6">
                        {/* المهارات والتخصصات */}
                        <div>
                          <div className="flex items-center justify-start gap-2 mb-8">
                            <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>
                            <h3 className="text-[#0F4C81] font-semibold text-lg">المهارات والتخصصات</h3>
                          </div>
                          <div className="flex flex-wrap justify-start gap-2">
                            {skills.map((skill, index) => (
                              <span
                                key={index}
                                className="bg-blue-50 text-blue-700 border border-blue-200 text-sm px-3 py-1 rounded-full"
                                style={{ border: 'solid 1px #BFDBFE', background: '#F0F9FF', color: '#0F4C81' }}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* تواصل اجتماعي */}
                        <div>
                          <div className="flex items-center justify-start gap-2 mb-2 pt-3">
                            <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>

                            <p className="text-[#0F4C81] font-medium">تواصل معي عبر وسائل التواصل الاجتماعي</p>
                          </div>
                          <div className="flex gap-5 items-center pt-5">
                            <div className="bg-white rounded-full cursor-pointer p-2" style={{ background: '#F0F9FF' }}>
                              <FaXTwitter fill="#0F4C81" className="w-5 h-5 cursor-pointer" />
                            </div>
                            <div className="bg-white rounded-full cursor-pointer p-2" style={{ background: '#F0F9FF' }}>
                              <FaTiktok fill="#0F4C81" className="w-5 h-5 cursor-pointer" />
                            </div>
                            <div className="bg-white rounded-full cursor-pointer p-2" style={{ background: '#F0F9FF' }}>
                              <FaInstagram fill="#0F4C81" className="w-5 h-5 cursor-pointer" />
                            </div>
                            <div className="bg-white rounded-full cursor-pointer p-2" style={{ background: '#F0F9FF' }}>
                              <FaYoutube fill="#0F4C81" className="w-5 h-5" />
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
          {activeTab === 'services' && (
            <p>hello services ...</p>
          )}
          {activeTab === 'blog' && (
            <>
                  <div className="bg-white mt-5 p-5 rounded-lg">
      <div className="flex justify-between">
        <div>
          <h2 className="text-[#13498B] text-2xl font-bold">المنشورات</h2>
        </div>
        <div>

        </div>
      </div>

      {/* Publication1 */}
      <div className="mt-5">
        <h3 className="text-xl mb-3">تصنيف 1</h3>
        <div className="flex gap-5 w-full justify-center mt-4">
          {publication1.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg flex flex-col items-center text-center w-1/3"
            >
              <div
                className="w-full h-7 absolute rounded-t-lg"
                style={{ backgroundColor: item.color }}
              >
               
              </div>

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

              <button className="cursor-pointer border border-[#13498B80] w-1/2 text-sm py-2 px-5 mt-1 rounded-lg" style={{position:'absolute', bottom:'-40px' }}>
                {item.button}
              </button>
            </div>
          ))}
        </div>

        <div dir="ltr" className="mt-20">
          <button className="flex gap-2 items-center py-2 px-10 rounded-lg border border-[#13498B80] bg-[#F8FAFC] cursor-pointer">
            عرض المزيد
          </button>
        </div>
      </div>

      {/* Publication2 */}
      <div className="mt-10">
        <h3 className="text-xl mb-3">تصنيف 2</h3>
        <div className="flex gap-5 w-full justify-center mt-4">
          {publication2.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg flex flex-col items-center text-center w-1/3"
            >
              <div
                className="w-full h-7 absolute rounded-t-lg"
                style={{ backgroundColor: item.color }}
              >

              </div>

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

              <button className="cursor-pointer border border-[#13498B80] w-1/2 text-sm py-2 px-5 rounded-lg">
                {item.button}
              </button>
            </div>
          ))}
        </div>

        <div dir="ltr" className="mt-15">
          <button className="flex gap-2 items-center mt-7 py-2 px-10 rounded-lg border border-[#13498B80] bg-[#13498B] text-[white] cursor-pointer" style={{marginTop:'-20px'}}>
            عرض المزيد
          </button>
        </div>
      </div>

      {/* Publication3 */}
      <div className="mt-10 mb-30">
        <h3 className="text-xl mb-3">تصنيف 3</h3>
        <div className="flex gap-5 w-full justify-center mt-4">
          {publication3.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg flex flex-col items-center text-center w-1/2"
            >
              <div
                className="w-full h-7 absolute rounded-t-lg"
                style={{ backgroundColor: item.color }}
              >

              </div>

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

              <button className="cursor-pointer border border-[#13498B80] w-1/2 text-sm py-2 px-5 rounded-lg">
                {item.button}
              </button>
            </div>
          ))}
        </div>

        <div dir="ltr" className="mt-15">
          <button className="flex gap-2 items-center mt-7 py-2 px-10 rounded-lg border border-[#13498B80] bg-[#13498B] text-[white] cursor-pointer" style={{marginTop:'-35px'}}>
            عرض المزيد
          </button>
        </div>
      </div>
    </div>
            </>
          )}
          {activeTab === 'reviews' && (
            <p>hello ...</p>
          )}
        </div>
      </div>



    </div>
  );
}
