"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/Button";

function Reason({ content, icon }) {
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
  const { t } = useTranslation();

  return (
    <section className="font-omnes justify-between px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl md:text-6xl font-bold text-center md:text-start">
        {t("why-watheeq-header")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 lg:gap-x-24 gap-y-10">
        <Reason content={t("why-watheeq-reason-1")} icon="/watheeq/assets/img/whychooseus6.png" />
        <Reason content={t("why-watheeq-reason-2")} icon="/watheeq/assets/img/whychooseus5.png" />
        <Reason content={t("why-watheeq-reason-3")} icon="/watheeq/assets/img/whychooseus4.png" />
        <Reason content={t("why-watheeq-reason-4")} icon="/watheeq/assets/img/whychooseus3.png" />
        <Reason content={t("why-watheeq-reason-5")} icon="/watheeq/assets/img/whychooseus2.png" />
        <Reason content={t("why-watheeq-reason-6")} icon="/watheeq/assets/img/whychooseus1.png" />
      </div>

      <div className="mt-10 flex justify-center md:justify-end">
        <Button
          variant="default"
          className="rounded-3xl font-semibold text-lg md:text-xl h-10 md:h-12 w-32 md:w-40 md:rounded-r-3xl md:rounded-l-3xl"
        >
          {t("why-watheeq-btn-text")}
        </Button>
      </div>
    </section>
  );
}

export default WhyChooseUs;
