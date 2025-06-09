"use client";
import React from "react";
import { Button } from "./ui/Button";

function ReasonCards({ content, icon }) {
  return (
    <div className="flex flex-col gap-4 shadow-custom-blue p-8 rounded-2xl">
      <div className="bg-primary h-[73px] w-[73px] rounded-full flex justify-center items-center">
        <img height={47} width={47} src={`/${icon}`} alt="watheeq" />
      </div>
      <p className="text-2xl font-semibold">{content}</p>
    </div>
  );
}

function WhyChooseUs() {

  return (
<section className="font-omnes justify-between mt-[50px] sm:mt-25 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl md:text-6xl font-bold text-center md:text-start">
        لماذا تختار وثيق ؟
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 lg:gap-x-24 gap-y-10 mt-10">
        <ReasonCards content="واجهة إلكترونية مخصصة للمحامي برابط دومين خاص وصفحة تعريفية مميزة" icon="watheeq/assets/img/whychooseus3.png" />
        <ReasonCards content="إدارة كاملة لجميع خدماتك القانونية" icon="watheeq/assets/img/whychooseus2.png" />
        <ReasonCards content="نظام دفع إلكتروني لاستقبال مستحقاتك بأمان" icon="watheeq/assets/img/whychooseus1.png" />
        <ReasonCards content="تواصل آمن وموثوق مع العملاء عبر المحادثة النصية أو الصوتية أو المرئية" icon="watheeq/assets/img/whychooseus6.png" />
        <ReasonCards content="إدارة كاملة لجدول الاجتماعات والاستشارات مع العملاء" icon="watheeq/assets/img/whychooseus5.png" />
        <ReasonCards content="منصة معتمدة لزيادة موثوقيتك وظهورك الرقمي القانوني" icon="watheeq/assets/img/whychooseus4.png" />
      </div>
      <div className="mt-10 flex justify-center md:justify-end">
        <Button
          variant="default"
          className="rounded-3xl font-semibold cursor-pointer text-lg md:text-xl h-10 md:h-12 w-32 md:w-40 md:rounded-r-3xl md:rounded-l-3xl"
        >
          سجل الان
        </Button>
      </div>
    </section>
  );
}

export default WhyChooseUs;
