import AOSInit from "@/components/animation/AOSInit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { HiMail } from "react-icons/hi";

export default function WhoWeAre() {
  return (
    <section>
      <AOSInit />
      <div className="bg-[#f8fafc] bg-[url('/watheeq/assets/img/hero_bg.png')] bg-cover">
        <nav className="container mx-auto px-[15px] sm:px-10 p-1 px-20 text-center">
          <Navbar className="" />
          <p
            className="text-3xl mt-15 mb-5 text-[#0a84ff]"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            من نحن
          </p>
          <h2
            className="text-[35px] sm:text-5xl font-bold mb-5"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            رحلتنا بدأت لخدمة المحامين ... تعرف عليها
          </h2>
          <p
            className="text-2xl mb-15 text-[#13498b]"
            data-aos="fade-up"
            data-aos-delay="90"
          >
            وُلدت وثيق من إيماننا بحاجة المحامي العصري إلى حضور رقمي موثوق وقوي
            . منصة وثيق تمكّن المحامين من بناء صفحاتهم القانونية، إدارة طلباتهم،
            واستقبال مستحقاتهم بسهولة، مع تعزيز ثقته في السوق الرقمي
          </p>
          <div
            className="flex items-center justify-center mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-white p-3 pt-5 pb-6 pl-5 pr-5 rounded-lg shadow-md w-100 max-w-md">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-1 border border-blue-300 rounded-lg px-3 py-2">
                  <HiMail className="text-[#0A84FF] w-6 h-6" />
                  <input
                    type="email"
                    className="flex-1 bg-transparent text-right focus:outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
                <Button
                  className="cursor-pointer px-6 py-2 text-sm rounded-lg"
                  style={{ backgroundColor: "#0A84FF", color: "#ffffff" }}
                >
                  اشترك
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <main
        className="p-[20px] sm:p-6 sm:px-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="bg-white p-[20px] sm:p-20 block sm:flex gap-4 items-center m-0 sm:m-5 shadow-xl rounded-3xl mb-[30px]">
          <div className="justify-between flex-1">
            <h3 className="text-[35px] sm:text-5xl font-bold mb-5">حكايتنا</h3>
            <p className="text-3xl sm:text-1xl mb-5 text-[#13498b]">
              منصة " وثيق " منصة إلكترونية مبتكرة مخصصة للمحامين المرخّصين .
              توفر المنصة أدوات رقمية لإدارة الطلبات القانونية، الفواتير ،
              التواصل مع العملاء، وتنظيم الخدمات . كل هذا في بيئة قانونية موثوقة
              وآمنة ، معززة بتقنيات الدفع الإلكترون ي والتسويق الاحترافي لخدمات
              المحامي
            </p>
          </div>
          <div className="w-full sm:w-[500px] items-center mt-10 sm:mt-0">
            <img src="/watheeq/assets/img/whoweare.png" alt="watheeq" />
          </div>
        </div>
      </main>
           <footer className="text-white" data-aos="fade-up"
            data-aos-delay="100">
        <Footer/>
      </footer>
    </section>
  );
}
