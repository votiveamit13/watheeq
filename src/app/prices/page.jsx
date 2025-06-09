"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";

export default function Prices() {
  return (
    <section className="bg-[#f8fafc]">
        <nav className="container mx-auto px-[15px] sm:px-10">
        <Navbar />
      </nav>
      <main className="p-6 px-20" style={{padding:'50px'}}>
        <div className="text-center justify-center">
          <p className="text-3xl mt-5 mb-5 text-[#0A84FF]">الأسعار</p>
          <h2 className="text-5xl font-bold mb-5">
            باقات متكاملة لانطلاقة كل مهني
          </h2>
          <p className="text-2xl mb-15">
            استكشف مميزات باقتنا واختر أفضل باقة تناسبك
          </p>
        </div>
        <div
  className="relative shadow-xl rounded-3xl px-10 p-5"
  style={{
    boxShadow:
      '0 20px 25px 5px rgba(0, 0, 0, 0.15), 0 8px 10px 5px rgba(0, 0, 0, 0.1)', gap:'20px', backgroundColor:'#fff'
  }}
>
          <Packages heading={null} subheading={null} />
          <style jsx global>{`
            .period-switch {
              width: 100%;
              display: flex;
              justify-content: center !important;
            }
          `}</style>
        </div>
      </main>
      <Footer />
    </section>
  );
}
