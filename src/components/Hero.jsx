"use client";
import React from "react";
import { Button } from "./ui/Button";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="font-omnes bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/img/first-section-img.png)', padding:'80px 0px', paddingTop:'5px', backgroundSize:'cover', paddingBottom:'16%' }}
    >
        <nav className="container mx-auto px-10">
        <Navbar />
      </nav>
      <div className="flex flex-col-reverse md:flex-row relative container mx-auto px-5 md:px-10">
        {/* Text Section */}
        <div className="py-10 md:py-30 flex-1 text-center md:text-start">
          <h1 className="text-3xl md:text-6xl font-semibold md:w-5/6">
            {t("hero-header")}
          </h1>
          <p className="text-lg md:text-[32px] mt-4 md:mt-9">
            {t("hero-subheader")}
          </p>

          <div className="btns flex flex-col md:flex-row items-center gap-3 mt-5">
            <Button
              variant="default"
              className="cursor-pointer rounded-3xl font-semibold text-lg md:text-xl h-12 w-40"
            >
              {t("order-now")}
            </Button>
            <p className="text-sm md:text-base">{t("cancel-anytime")}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="pt-20 md:py-30 flex-1 flex justify-center items-center">
          <img
            src="/assets/img/hero_bg_2.png"
            alt="watheeq"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
