import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { HiMail } from "react-icons/hi";

export default function WhoWeAre() {
  return (
    <section className="bg-[#f8fafc]">
      <nav className="container mx-auto px-[15px] sm:px-10 p-1 px-20 text-center bg-[#F2FAFA] bg-[url('/watheeq/assets/img/hero_bg.png')] bg-cover">
        <Navbar className="" />
        <p className="text-3xl mt-15 mb-5">من نحن</p>
        <h2 className="text-5xl font-bold mb-5">
          رحلتنا بدأت لخدمة المحامين ... تعرف عليها
        </h2>
        <p className="text-2xl mb-15">
          وُلدت وثيق من إيماننا بحاجة المحامي العصري إلى حضور رقمي موثوق وقوي .
          منصة وثيق تمكّن المحامين من بناء صفحاتهم القانونية، إدارة طلباتهم،
          واستقبال مستحقاتهم بسهولة، مع تعزيز ثقته في السوق الرقمي
        </p>
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white p-3 rounded-lg shadow-md w-70 max-w-md">
            <div className="flex items-center justify-between">
            <HiMail className="text-[#0A84FF] w-10 h-12" /> 
              <Button  className="cursor-pointer" style={{ backgroundColor: '#0A84FF', color: '#ffffff' }}>
                اشترك
              </Button>
              </div>
          </div>
        </div>
      </nav>
      <main className="p-6 px-10">
        <div className="bg-white p-5 flex gap-4 items-center m-5 shadow-xl rounded-3xl px-10 p-20 mb-30">
          <div className="justify-between flex-1">
            <h3 className="text-5xl font-bold mb-5">حكايتنا</h3>
            <p className="text-3xl">
              منصة " وثيق " منصة إلكترونية مبتكرة مخصصة للمحامين المرخّصين .
              توفر المنصة أدوات رقمية لإدارة الطلبات القانونية، الفواتير ،
              التواصل مع العملاء، وتنظيم الخدمات . كل هذا في بيئة قانونية موثوقة
              وآمنة ، معززة بتقنيات الدفع الإلكترون ي والتسويق الاحترافي لخدمات
              المحامي
            </p>
          </div>
          <div className="items-center w-[500px]">
            <img src="/watheeq/assets/img/whoweare.png" alt="watheeq" />
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
