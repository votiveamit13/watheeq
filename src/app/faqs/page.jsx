"use client";
import AOSInit from "@/components/animation/AOSInit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const faqData = [
  {
    question: "ماهي وثيق, وما الخدمات التي تقدمها ؟",
    answer:
      "وثيق هي منصة رقمية تربط المهنيين بالعملاء، وتوفر ملفات موثقة، حجز مواعيد، إدارة مدفوعات، تقييمات، وأدوات تسويقية مما يسهل تقديم الخدمات بكفاءة",
  },
  {
    question: "هل استخدام المنصة مجاني أم مدفوع؟",
    answer:
      "استخدام منصة وثيق يتضمن خيارات مدفوعة، حيث توفر خطط اشتراك تختلف حسب احتياجات المستخدمين، مع بعض المزايا المجانية المحدودة.",
  },
  {
    question: "هل يجب أن أكون مرخصًا لمزاولة مهنتي حتى أتمكن من التسجيل؟",
    answer:
      "نعم، يتطلب التسجيل في وثيق أن تكون مرخصًا لمزاولة مهنتك، حيث أن المنصة مخصصة للمهنيين الذين يمتلكون تراخيص سارية لممارسة أنشطتهم المهنية.",
  },
  {
    question: "ماذا أفعل إذا واجهت مشكلة في حسابي؟",
    answer:
      "تواصل مع فريق الدعم الفني عبر القنوات المحددة على المنصة (مثل البريد الإلكتروني ).",
  },
  {
    question: "كيف يتم حجز المواعيد من قبل العملاء؟",
    answer:
      "استخدام منصة وثيق يتضمن خيارات مدفوعة، حيث توفر خطط اشتراك تختلف حسب احتياجات المستخدمين،مع بعض المزايا المجانية المحدودة.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderCard = (faq, index) => (
    <div
      key={index}
      className="flex-1 min-w-[280px] shadow-custom-blue rounded-2xl p-6 bg-white transition-all duration-300 w-[93%] mx-auto mt-[15px] md:w-auto md:mt-0"
    >
      <button
        onClick={() => toggle(index)}
        className="flex justify-between items-center w-full text-right cursor-pointer"
      >
        <h3 className="w-[80%] md:w-auto text-[22px] md:text-[28px] font-normal text-[#13498B]">
          {faq.question}
        </h3>
        <IoIosArrowDropdown size={30}
          className={` p-[0px]  text-xl transform transition-transform duration-700 ease-in-out rounded-2xl  cursor-pointer   ${
            openIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>
      {openIndex === index && (
        <p className="text-2xl mt-4 text-[#0B2B51] leading-relaxed">
          {faq.answer}
        </p>
      )}
    </div>
  );

  return (
    <section>
      <AOSInit/>

      <div className="bg-[#f8fafc] bg-[url('/watheeq/assets/img/hero_bg.png')] bg-cover">
        <nav className="container mx-auto lg:px-10 px-5 text-center ">
          <Navbar />
          <h2 className="text-[30px] md:text-5xl font-bold mt-25 mb-4" data-aos="fade-up"
            data-aos-delay="60">
            الأسئلة الشائعة
          </h2>
          <p className="text-2xl mb-35 md:mb-50" data-aos="fade-up"
            data-aos-delay="80">
            إجابات على الأسئلة المتكررة التي يطرحها الجميع
          </p>
        </nav>
      </div>
      <main className="p-0 md:p-6 md:px-20 pb-15 mb-10 space-y-6 bg-white rounded-2xl shadow-custom-blue w-[90%] mx-auto -mt-30">
        <div className="lg:flex md:block block gap-6 items-start" data-aos="fade-up"
            data-aos-delay="80">
          {renderCard(faqData[0], 0)}
          {renderCard(faqData[1], 1)}
        </div>

        <div className="flex gap-6 items-start" data-aos="fade-up"
            data-aos-delay="120">
          {renderCard(faqData[2], 2)}
        </div>

        <div className="lg:flex md:block block gap-6 items-start" data-aos="fade-up"
            data-aos-delay="100">
          {renderCard(faqData[3], 3)}
          {renderCard(faqData[4], 4)}
        </div>
      </main>
      <Footer />
    </section>
  );
}
