"use client";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddPost from "@/components/professionaldashboard/publications/AddPost";
import { useState } from "react";

export default function Publications() {
  const [showAddPost, setShowAddPost] = useState(false);

   if(showAddPost){
      return <AddPost onBack={() => setShowAddPost(false)} />;
    }

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

  return (
    <div className="bg-white mt-5 p-5 rounded-lg">
      <div className="flex justify-between gap-5">
        <div>
          <h2 className="text-[#13498B] text-2xl font-bold">المنشورات</h2>
        </div>
        <div>
<button
  className="flex gap-2 items-center py-2 px-10 rounded-lg border border-[#13498B80] bg-[#F8FAFC] cursor-pointer w-full md:w-auto"
  onClick={() => setShowAddPost(true)}
>
            <FaPlus />
            إضافة
          </button>
        </div>
      </div>

      {/* Publication1 */}
      <div className="mt-5">
        <h3 className="text-xl mb-3">تصنيف 1</h3>
        <div className="block md:flex gap-5 w-full justify-center mt-4">
          {publication1.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg flex flex-col items-center text-center w-full md:w-1/3 mb-[80px] md:mb-0"
              >
              <div
                className="w-full h-7 absolute rounded-t-lg"
                style={{ backgroundColor: item.color }}
              >
                <div dir="ltr" className="cursor-pointer absolute top-2 left-1 flex gap-1">
                  <BsThreeDotsVertical fill="white" stroke="white" />
                </div>
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

              <button
  className="cursor-pointer border border-[#13498B80] w-[150px] md:w-1/2 text-sm py-2 px-5 mt-1 rounded-lg"
  style={{ position: 'absolute', bottom: '-40px' }}
>
                {item.button}
              </button>
            </div>
          ))}
        </div>

        <div dir="ltr" className="mt-20">
        <button className="flex gap-2 items-center py-2 px-10 rounded-lg border border-[#13498B80] bg-[#F8FAFC] cursor-pointer w-full md:w-auto justify-center
        ">
        عرض المزيد
          </button>
        </div>
      </div>

      {/* Publication2 */}
      <div className="mt-10">
        <h3 className="text-xl mb-3">تصنيف 2</h3>
        <div className="block md:flex gap-5 w-full justify-center mt-4">
          {publication2.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg flex flex-col items-center text-center w-full md:w-1/3 mb-[25px] md:mb-0"
              >
              <div
                className="w-full h-7 absolute rounded-t-lg"
                style={{ backgroundColor: item.color }}
              >
                <div dir="ltr" className="cursor-pointer absolute top-2 left-1 flex gap-1">
                  <BsThreeDotsVertical fill="white" stroke="white" />
                </div>
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

              <button className="cursor-pointer border border-[#13498B80] w-[150px] md:w-1/2 text-sm py-2 px-5 rounded-lg">
              {item.button}
              </button>
            </div>
          ))}
        </div>

        <div dir="ltr" className="mt-15">
          <button className="flex gap-2 items-center mt-7 py-2 px-10 rounded-lg border border-[#13498B80] bg-[#13498B] text-[white] cursor-pointer w-full md:w-auto justify-center" style={{marginTop:'-20px'}}>
            عرض المزيد
          </button>
        </div>
      </div>

      {/* Publication3 */}
      <div className="mt-10 mb-30">
        <h3 className="text-xl mb-3">تصنيف 3</h3>
        <div className="block md:flex gap-5 w-full justify-center mt-4">
          {publication3.map((item, index) => (
            <div
              key={index}
                className="relative rounded-lg flex flex-col items-center text-center w-full md:w-1/3 mb-[30px] md:mb-0"
            >
              <div
                className="w-full h-7 absolute rounded-t-lg"
                style={{ backgroundColor: item.color }}
              >
                <div dir="ltr" className="cursor-pointer absolute top-2 left-1 flex gap-1">
                  <BsThreeDotsVertical fill="white" stroke="white" />
                </div>
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

              <button className="cursor-pointer border border-[#13498B80] w-[150px] md:w-1/2 text-sm py-2 px-5 rounded-lg">
              {item.button}
              </button>
            </div>
          ))}
        </div>

        <div dir="ltr" className="mt-15">
          <button className="flex gap-2 items-center mt-7 py-2 px-10 rounded-lg border border-[#13498B80] bg-[#13498B] text-[white] cursor-pointer w-full md:w-auto justify-center" style={{marginTop:'-35px'}}>
            عرض المزيد
          </button>
        </div>
      </div>
    </div>
  );
}
