import AOSInit from "@/components/animation/AOSInit";
import ContactUs from "@/components/ContactUs";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToStart from "@/components/HowToStart";
import Packages from "@/components/Packages";
import PaymentMethods from "@/components/PaymentMethods";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <AOSInit />
      <main>
        <Hero />
        <div className="container mx-auto">
          <div data-aos="fade-up">
            <HowToStart /></div>
          <div data-aos="fade-up" data-aos-delay="100">
            <WhyChooseUs /></div>
          <div className="py-10 sm:py-10" data-aos="fade-up" data-aos-delay="100">
            <PaymentMethods />
          </div>
          <div className="py-5" data-aos="fade-up" data-aos-delay="100">
            <DownloadApp />
          </div>
          <div className="py-5 sm:py-10" data-aos="fade-up" data-aos-delay="100">

            <div className="[&>section]:mx-5 [&>section]:lg:mx-0 [&>section]:md:mx-8 mx-auto overflow-x-hidden">
              <Packages heading={"الأسعار"} subheading={"اختر الباقة التي تناسبك لتبدأ رحلتك في  المنصة"} />
            </div>
          </div>
          <div className="py-2" data-aos="fade-up" data-aos-delay="100">
            <ContactUs />
          </div>
        </div>
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <Footer />
        </div>
      </main>
    </>
  );
}
