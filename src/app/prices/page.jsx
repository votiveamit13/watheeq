"use client";
import AOSInit from "@/components/animation/AOSInit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";

export default function Prices() {
  return (
    <section className="bg-[#f8fafc]">
      <AOSInit />
      <div className="container mx-auto">
      <nav className="container mx-auto lg:px-10 px-5">
        <Navbar />
      </nav>
      <main className="px-5 md:px-[50px]">
        <div className="text-center justify-center">
          <p
            className="text-3xl mt-15 mb-5 text-[#0A84FF]"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            الأسعار
          </p>
          <h2
            className="text-[25px] md:text-5xl font-bold mb-5"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            باقات متكاملة لانطلاقة كل مهني
          </h2>
          <p
            className="mb-5 md:mb-15 text-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            استكشف مميزات باقتنا واختر أفضل باقة تناسبك
          </p>
        </div>
        <div
          className="relative w-full shadow-xl mb-10 rounded-3xl p-0 px-0 lg:p-0 lg:px-0 sm:p-5 sm:px-10 mt-10 md:mt-0"
          style={{
            boxShadow:
              "0 20px 25px 5px rgba(0, 0, 0, 0.15), 0 8px 10px 5px rgba(0, 0, 0, 0.1)",
            gap: "20px",
            backgroundColor: "#fff",
          }} data-aos="fade-up"
            data-aos-delay="150"
        >
          <Packages heading={null} subheading={null} />
          <style jsx global>{`
            .period-switch {
              width: 100%;
              display: flex;
              justify-content: center !important;
            }
            .second-price {
              padding-bottom: 50px;
            }

            @media (max-width: 767px) {
              .period-switch {
                margin-top: 20px;
                margin-bottom: 30px;
              }
              .second-price {
                padding-bottom: 20px;
              }
                .aos-animate .second-price {
                  padding: 0px;
                  width:98%;
              }
            }
          `}</style>
        </div>
      </main>
      </div>
      <footer className="container-fluid text-white" data-aos="fade-up" data-aos-delay="100">
        <Footer />
      </footer>
    </section>
  );
}
