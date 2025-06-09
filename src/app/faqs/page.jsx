"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const faqData = [
  {
    question: "هل استخدام المنصة مجاني أم مدفوع؟",
    answer:
      "استخدام منصة وثيق يتضمن خيارات مدفوعة، حيث توفر خطط اشتراك تختلف حسب احتياجات المستخدمين، مع بعض المزايا المجانية المحدودة.",
  },
  {
    question: "ماهي وثيق, وما الخدمات التي تقدمها ؟",
    answer:
      "وثيق هي منصة رقمية تربط المهنيين بالعملاء، وتوفر ملفات موثقة، حجز مواعيد، إدارة مدفوعات، تقييمات، وأدوات تسويقية مما يسهل تقديم الخدمات بكفاءة",
  },
  {
    question: "هل يجب أن أكون مرخصًا لمزاولة مهنتي حتى أتمكن من التسجيل؟",
    answer:
      "نعم، يتطلب التسجيل في وثيق أن تكون مرخصًا لمزاولة مهنتك، حيث أن المنصة مخصصة للمهنيين الذين يمتلكون تراخيص سارية لممارسة أنشطتهم المهنية.",
  },
  {
    question: "كيف يتم حجز المواعيد من قبل العملاء؟",
    answer:
      "استخدام منصة وثيق يتضمن خيارات مدفوعة، حيث توفر خطط اشتراك تختلف حسب احتياجات المستخدمين،مع بعض المزايا المجانية المحدودة.",
  },
  {
    question: "ماذا أفعل إذا واجهت مشكلة في حسابي؟",
    answer:
      "تواصل مع فريق الدعم الفني عبر القنوات المحددة على المنصة (مثل البريد الإلكتروني ).",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <nav className="container mx-auto px-10">
        <Navbar />
      </nav>
      <main className="p-6 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="shadow-md rounded-2xl p-6 bg-white transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-right"
              >
                <h3 className="text-lg font-semibold text-[#0B2B51]">
                {faq.question}
              </h3>
<AiOutlineDown
  className={`text-xl transform transition-transform duration-200 ${
    openIndex === index ? "rotate-180" : ""
  }`}
/>
            </button>
            {openIndex === index && (
              <p className="text-sm mt-4 text-[#4B5563] leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      </main>
      <Footer />
    </section>
  );
}
