"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/Button";

function Footer() {
  const { t } = useTranslation();

  return (
    <section
      className="font-omnes px-4 md:px-8 lg:px-16 py-10"
      style={{ backgroundColor: "#13498B", color: "white" }}
    >
      {/* First Row: 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 mb-10">
        <div>
            <div className=" gap-5 mt-16">

            <img
              src="/assets/img/footerlogo.png"
              alt="google play"
              width={250}
              height={20}
            />
             <p>منصة الكترونية مبتكرة تهدف الي تمكين المهنيين المرخصين لأنشاء صفحات الكترونية لعرض خدماتهم أمام عملائهم</p>
          </div>
        </div>
        <div>
            <div className=" gap-5 mt-16">
            <h5>الصفحات الفرعية</h5>
            <p>من نحن</p>
            <p>الأسئلة الشائعة</p>
            <p>الشروط و الأحكام</p>
            <p>سياسة الخصوصية</p>
            <p>تواصل معنا</p>
            </div>
        </div>
        <div>
          <div className=" gap-5 mt-16">
            <h5>تواصل معنا</h5>
            <p>المملكة العربية السعودية- الرياض</p>
            <p>+966-5986-639</p>
            <p>Info@Watheeq.com</p>
            </div>
        </div>
        <div>
          <div className=" gap-5 mt-16">
            <h5>حمل الان :</h5>
            <img
              src="/assets/img/appstore.png"
              alt="app store"
              width={150}
              height={20}
            />
            <img
              src="/assets/img/googleplay.png"
              alt="google play"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* Second Row: Example with 2 Columns */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
        style={{ backgroundColor: "#093D7D" }}
      >
        <div> منصة وثيق - جميع الحقوق محفوظة 2025</div>
      </div>
    </section>
  );
}

export default Footer;
