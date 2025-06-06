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
      <main>
        <Hero />
        <div className="container mx-auto px-10">
          <HowToStart/>
          <WhyChooseUs/>
          <div className="py-20">
            <PaymentMethods />
          </div>
          <div className="py-20">
            <DownloadApp/>
          </div>
          <div className="py-20">
            <Packages/>
          </div>
          <div className="py-20">
            <ContactUs/>
          </div>
          <div className="py-20">
            <Footer/>
          </div>
        </div>
      </main>
    </>
  );
}
