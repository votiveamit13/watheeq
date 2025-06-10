"use client";
import React, { useState } from "react";
import { Switch } from "./ui/Switch";

function WaveHeader({ type = "basic", plan = "monthly" }) {
  return (
    <div
      className="relative overflow-hidden w-full sm:w-[537px]"
      style={{ height: "261px" }}
    >

      {/* Title text */}
      <div className="absolute top-16 w-full text-center z-10">
        <h2 className="text-white text-4xl font-bold">
          {type === "basic" ? "الباقة المتكاملة" : "الباقة الأساسية"}
        </h2>
      </div>

      {/* Price text */}

      <div className="absolute bottom-0 right-4 z-10 pr-8">
        <div className="flex items-center gap-2 text-end text-lg font-semibold">
          <div
            className="flex items-center gap-1 text-2xl font-semibold capitalize"
            style={{
              fontFamily: "Omnes Arabic",
              WebkitBackgroundClip: "text",
              //        WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <span
              className="text-5xl font-bold pl-5"
              style={{
                background: type === "basic"
                  ? "linear-gradient(to right, #ac136f, #f72585)"
                  : "linear-gradient(to right, #76BAFF, #0A84FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {type === "basic"
                ? plan === "monthly"
                  ? 89
                  : 890
                : plan === "monthly"
                  ? 59
                  : 590}
            </span>


            <img
              src={
                type === "basic"
                  ? "/watheeq/assets/img/currencyRed.png"
                  : "/watheeq/assets/img/currencyBlue.png"
              }
              alt="watheeq"
              className="w-5 h-5"
            />
            <p style={{ color: '#0B2B51', fontWeight: '400' }}>
              {type === "basic"
                ? plan === "monthly"
                  ? "/ شهريًا"
                  : "/ شهريًا"
                : plan === "monthly"
                  ? "/ شهريًا"
                  : "/ شهريًا"}
            </p>
          </div>
        </div>
      </div>


      {type === "basic" ? <BasicHeader /> : <FullHeader />}
    </div>
  );
}

function FullHeader() {
  return (
    <svg
      width="537"
      height="261"
      viewBox="0 0 537 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full"
    >
      <path
        d="M0 33.0758V175.978C17.5115 179.903 36.2441 190.769 57.1681 214.827C73.6019 233.685 92.8735 254.923 125.059 259.279C220.078 272.21 231.331 151.812 415.767 155.333C458.998 156.15 501.609 165.84 537 182.273V33.0758C537.001 28.8165 536.163 24.5988 534.534 20.6635C532.905 16.7282 530.517 13.1523 527.505 10.1402C524.494 7.12805 520.919 4.73863 516.984 3.10842C513.049 1.47822 508.832 0.63916 504.572 0.63916H32.3917C23.7967 0.651058 15.5579 4.07372 9.4845 10.1555C3.41119 16.2372 0 24.4808 0 33.0758Z"
        fill="url(#paint0_linear_33_2367)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_33_2367"
          x1="268.453"
          y1="260.235"
          x2="268.453"
          y2="0.647113"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#76BAFF" />
          <stop offset="1" stopColor="#0A84FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BasicHeader() {
  return (
    <svg
      width="537"
      height="261"
      viewBox="0 0 537 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full pl-[0px] sm:pl-0"

    >
      <path
        d="M0 33.0758V175.978C17.5115 179.903 36.2441 190.769 57.1681 214.827C73.6019 233.685 92.8735 254.923 125.059 259.279C220.078 272.21 231.331 151.812 415.767 155.333C458.998 156.15 501.609 165.84 537 182.273V33.0758C537.001 28.8165 536.163 24.5988 534.534 20.6635C532.905 16.7282 530.517 13.1523 527.505 10.1402C524.494 7.12805 520.919 4.73863 516.984 3.10842C513.049 1.47822 508.832 0.63916 504.572 0.63916H32.3917C23.7967 0.651058 15.5579 4.07372 9.4845 10.1555C3.41119 16.2372 0 24.4808 0 33.0758Z"
        fill="url(#paint0_linear_30911_365)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_30911_365"
          x1="268.5"
          y1="260.255"
          x2="268.5"
          y2="0.647114"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#99005C" />
          <stop offset="1" stopColor="#D53B98" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PricingCard({ type = "basic", plan = "monthly" }) {
  return (
    <div
      className="shadow-custom-blue rounded-2xl w-full p-[15px] sm:py-10 sm:px-0"
      style={{ height: '100%' }}
    >


      <WaveHeader type={type} plan={plan} />
      <p className="text-2xl mt-10 pr-8">
        {type === "basic"
          ? `باقات متكاملة لبناء موقع احترافي بمميزات غير محدودة`
          : `باقات متكاملة لانطلاقة كل مهني أدوات مرنة وحلول متكاملة
`}
      </p>

      <ul className="flex flex-col gap-8 px-5 mt-10 text-2xl pr-10" style={{ height: '55%' }}>
        <li className="flex items-center gap-2">
          <img src="/watheeq/assets/img/check-icon.svg" alt="item" />
          <p>
            {type === `basic`
              ? `صفحة إلكترونية موثوقة مخصصة لك`
              : `صفحة إلكترونية موثوقة مخصصة لك`}
          </p>
        </li>
        <li className="flex items-center gap-2">
          <img src="/watheeq/assets/img/check-icon.svg" alt="item" />
          <p>
            {type === `basic`
              ? `رابط مباشر + باركود خاص`
              : `رابط مباشر + باركود خاص`}
          </p>
        </li>
        <li className="flex items-center gap-2">
          <img src="/watheeq/assets/img/check-icon.svg" alt="item" />
          <p>{type === `basic` ? `مدونة خاصة` : `مدونة خاصة`}</p>
        </li>
        <li className="flex items-center gap-2">
          <img src="/watheeq/assets/img/check-icon.svg" alt="item" />
          <p>
            {type === `basic`
              ? `استقبال طلبات العملاء  لخدماتك بسهولة`
              : `استقبال طلبات العملاء  لخدماتك بسهولة`}
          </p>
        </li>
        <li className="flex items-center gap-2">
          <img src="/watheeq/assets/img/check-icon.svg" alt="item" />
          <p>
            {type === `basic`
              ? `تفعيل الدفع الإلكتروني

`
              : `تفعيل الدفع الإلكتروني

`}
          </p>
        </li>
        <li className="flex items-center gap-2">
          <img src="/watheeq/assets/img/check-icon.svg" alt="item" />
          <p>
            {type === `basic` ? `فوترة تلقائية معتمدة` : `فوترة تلقائية معتمدة`}
          </p>
        </li>
        <li className="flex items-center gap-2">
          <img src="/watheeq/assets/img/check-icon.svg" alt="item" />
          <p>{type === `basic` ? `شهادة الأمنية` : `شهادة الأمنية`}</p>
        </li>
        {type === "basic" && (
          <>
            <li className="flex items-center gap-2">
              <img src="/watheeq/assets/img/check-icon.svg" alt="item" />
              <p>
                التواصل والاجتماع عن طريق وسائل المنصة (محادثة نصية، صوتية،
                مرئية )
              </p>
            </li>

            <li className="flex items-center gap-2">
              <img src="/watheeq/assets/img/check-icon.svg" alt="item" />
              <p>حجز دومين )رابط( خاص بصفحتك.</p>
            </li>
          </>
        )}
      </ul>

      <div className="flex justify-center">
        <button
          className={`mt-10 rounded-[15px] text-2xl w-44 h-14 border-2 cursor-pointer
    ${type === "basic" ? "text-[#D53B98] border-[#D53B98]" : "text-[#1E88E580] border-[#1E88E580]"}`}
        >
          اشترك
        </button>
      </div>
    </div>
  );
}


function Packages({heading, subheading}) {
  const [plan, setPlan] = useState("monthly");

  return (
    <section className="font-omnes mx-0 sm:mx-[100px]">
      <div className="header flex flex-col gap-5">
      <h2 className="pr-[20px] sm:pr-0 text-right sm:text-right text-[30px] sm:text-6xl font-bold">{heading}</h2>
      <div className="block md:flex text-center sm:text-righ justify-between items-center">
      <p className="pr-[20px] text-right sm:pr-0 text-[20px] sm:text-3xl">
      {subheading}
          </p>

          <div className="period-switch">
            <Switch onToggle={(value) => setPlan(value)} />
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row justify-center mt-0 sm:mt-10 w-full lg:w-[80%] gap-0 sm:gap-[50px] lg:gap-[60px] mx-auto second-price"
        >
          <div className="w-full sm:w-[500px] lg:w-full mb-6 lg:mb-0 sm:p-[15px]">
            <PricingCard type="full" plan={plan} />
          </div>
          <div className="w-full sm:w-[500px] lg:w-full mb-6 lg:mb-0 sm:p-[15px]">
            <PricingCard type="basic" plan={plan} />
          </div>
        </div>


      </div>
    </section>
  );
}

export default Packages;
