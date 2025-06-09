"use client";
import React from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {

  return (
    <section
      className="font-omnes"
      style={{ backgroundImage: 'url(/watheeq/assets/img/third-section-img.png)', color: "white", paddingTop:'10px', backgroundSize:'cover', backgroundRepeat:'no-repeat' }}
    >
      {/* First Row: 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 mb-10 pt-[150px] pb-[30px] pr-[22px] sm:pr-[150px]">
      <div>
      <div className="gap-1 sm:gap-5 mt-16">
            <img
              src="/watheeq/assets/img/footerlogo.png"
              alt="google play"
              width={250}
              height={20}
            />
<p className="text-[18px] sm:text-[18px]">
  منصة الكترونية مبتكرة تهدف الي تمكين المهنيين المرخصين لأنشاء صفحات الكترونية لعرض خدماتهم أمام عملائهم
</p>
          </div>
        </div>
        <div>
        <div className="mt-1 sm:mt-16 gap-5">
        <h3 className="text-2xl font-bold text-800 mb-4">الصفحات الفرعية</h3>

        <p className="text-[18px] sm:text-[18px]">من نحن</p>
        <p className="text-[18px] sm:text-[18px]">الأسئلة الشائعة</p>
            <p className="text-[18px] sm:text-[18px]">الشروط و الأحكام</p>
            <p className="text-[18px] sm:text-[18px]">سياسة الخصوصية</p>
            <p className="text-[18px] sm:text-[18px]">تواصل معنا</p>
            </div>
        </div>
        <div>
          <div className="mt-1 sm:mt-16 gap-5">
          <h3 className="text-2xl font-bold text-800 mb-4">تواصل معنا</h3>
          
            <p className="pb-2 text-[18px] sm:text-[18px]"  style={{display:'flex', alignItems:'center', gap:'10px'}}> <FiMapPin />المملكة العربية السعودية- الرياض</p>
          
            <p className="pb-2 text-[18px] sm:text-[18px]" style={{display:'flex', alignItems:'center', gap:'10px'}}><FiPhone /> +966-5986-639   </p>
           
            <p className="pb-2 text-[18px] sm:text-[18px]" style={{display:'flex', alignItems:'center', gap:'10px'}}> <HiOutlineMail className="fw-600"/> Info@Watheeq.com </p>
            </div>
        </div>
        <div>
          <div className="mt-1 sm:mt-16 gap-5">
          <h4 className="text-2xl font-bold text-800 mb-4">حمل الان :</h4>
            <img
              src="/watheeq/assets/img/appstore.png"
              alt="app store"
              width={150}
              height={20} className="mb-4 mt-2"
            />
            <img
              src="/watheeq/assets/img/googleplay.png"
              alt="google play"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* Second Row: Example with 2 Columns */}
      <div
        className="grid"
        style={{ backgroundColor: "#093D7D" }}
      >
<div className="text-center text-[12px] sm:text-[18px] text-700 pt-8 pb-8">
  منصة وثيق - جميع الحقوق محفوظة 2025
</div>
      </div>
    </section>
  );
}

export default Footer;
