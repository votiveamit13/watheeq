"use client";
import React from "react";
import { Button } from "./ui/Button";
import Navbar from "./Navbar";

function Hero() {

  return (
<section
  className="font-omnes bg-no-repeat bg-cover bg-pos-unset sm:bg-contain mb-[-50px] sm:mb-0"
  style={{
    backgroundImage: 'url(/watheeq/assets/img/first-section-img.png)',
    paddingTop: '5px',
    paddingBottom: '16%',
    paddingLeft: '0',
    paddingRight: '0',
  }}
>


  
        <nav className="container mx-auto px-[15px] sm:px-10">
        <Navbar />
      </nav>
      <div className="flex flex-col-reverse md:flex-row relative container mx-auto px-5 md:px-10">
        {/* Text Section */}

        <div className="pb-[180px] md:pb-0 py-10 md:py-30 flex-1 text-center md:text-start">
        <h1 className="text-[25px] sm:text-[45px] font-semibold w-full sm:w-5/6 leading-[1.3]">
        كن جزءًا من منصة وثيق وقدّم خدماتك القانونية بثقة {/*Hero Header */}
          </h1>
          <p className="text-lg md:text-[32px] mt-4 md:mt-9">
            أنشئ صفحتك القانونية الموثوقة عبر منصة وثيق وابدأ باستقبال العملاء وطلبات الاستشارات خلال دقائق .  {/* hero-subheader */}
          </p>
            <p className="text-sm md:text-base">احصل على تجربة مجانية لمدة 21 يوم بإمكانك الإلغاء في أي وقت. {/* Free Trial */}</p>

          <div className="btns flex flex-col md:flex-row items-center gap-3 mt-5">
          <Button
            variant="default"
            className="cursor-pointer font-semibold text-lg md:text-xl h-12 w-40 rounded-[50px]" style={{borderRadius:'50px'}}
          >
            ابدأ الآن {/* Order Now */}
          </Button>


          </div>
        </div>

        {/* Image Section */}
        <div className="pt-20 md:py-30 flex-1 flex justify-center items-center">
          <img
            src="/watheeq/assets/img/hero_bg_2.png"
            alt="watheeq"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
