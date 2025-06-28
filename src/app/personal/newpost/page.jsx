import Footer from "@/components/professionalpersonal/Footer";
import Navbar from "@/components/professionalpersonal/Navbar";

export default function NewPost() {
  return (
    <div className="bg-[#F0F9FF] pt-5">
      <div className="mr-40 ml-40">
        <div className="bg-white p-5 rounded-lg mb-5">
          <Navbar />
          <h1 className="text-l mt-5 font-bold">
            تأثير الذكاء الاصطناعي على أداء المحامين
          </h1>
          <div className="relative mt-5 flex flex-col items-center">
            <div className="relative inline-block w-full">
              <img
                src="/watheeq/assets/img/publication5.png"
                alt="watheeq"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-5">
            <p className="mt-5 leading-[2] text-[#000000B2]">
              يشهد العالم تطورًا غير مسبوق في تقنيات الذكاء الاصطناعي، مما يثير
              تساؤلات حول تأثيره على مختلف المجالات، ومن بينها مهنة المحاماة.
              فهل يمكن للذكاء الاصطناعي أن يحل محل المحامين، أم أنه مجرد أداة
              تعزز من كفاءتهم؟ تناول بحث بعنوان AI-Powered Lawyering: AI
              Reasoning Models, Retrieval Augmented Generation, and the Future
              of Legal Practice  هذا الموضوع بعمق، حيث استعرض أحدث التقنيات
              القانونية المدعومة بالذكاء الاصطناعي، مثل نماذج التفكير والاستدلال
              (AI Reasoning Models)  وتقنية استرجاع البيانات المعزز بالتوليد
              (RAG). وقد صدر البحث عام 2024 بدعم من جامعة مينيسوتا، جامعة
              ميشيغان، وشركات قانونية رائدة، ويعد من الدراسات المميزة التي تقيس
              تأثير هذه الأدوات على جودة وسرعة العمل القانوني.
            </p>
              <h3 className="font-bold mt-20">الذكاء الاصطناعي في المحاماة: تطور أم تهديد؟</h3>
            <p className="mt-2 leading-[2] text-[#000000B2] mb-100">
              يرى البعض أن الذكاء الاصطناعي قد يحدث تحولًا جذريًا في المحاماة،
              حيث يمكنه تنفيذ المهام القانونية الروتينية بسرعة وكفاءة أكبر. لكن
              بالمقابل، يحذر آخرون من أن هذه التقنيات قد تؤدي إلى (هلوسات)
              قانونية، أي تقديم معلومات غير دقيقة أو مختلقة. تناول البحث مقارنة
              بين نموذجين رئيسيين
            </p>
          </div>
        </div>
      </div>
      <div className="mr-40 ml-40 pb-5">
        <Footer />
      </div>
    </div>
  );
}
