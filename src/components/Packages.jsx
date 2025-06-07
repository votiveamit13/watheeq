"use client";
import React from "react";
import { Switch } from "./ui/Switch";
import { Button } from "./ui/Button";

function WaveHeader({ type = "basic" }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "261px", width: "537px" }}
    >
      {/* Title text */}
      <div className="absolute top-16 w-full text-center z-10">
        <h2 className="text-white text-4xl font-bold">
          {type === "basic" ? "الباقة المتكاملة" : "الباقة الأساسية"}
        </h2>
      </div>

      {/* Price text */}
      <div className="absolute flex items-center bottom-0 right-4 z-10 text-lg font-semibold text-end">
        <div
          className="text-2xl font-semibold capitalize text-right"
          style={{
            fontFamily: "Omnes Arabic",
            background: "linear-gradient(0deg, #76BAFF 0.01%, #0A84FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <span className="text-4xl font-bold">
            {type === "basic" ? 89 : 59}
          </span>{" "}
          <span className="icon-saudi_riyal w-2">
            <img
              src={
                type === "basic"
                  ? "/watheeq/assets/img/currencyRed.png"
                  : "/watheeq/assets/img/currencyBlue.png"
              }
              alt="watheeq"
            />
          </span>
        </div>
        <div className="text-sm">{type === "basic" ? "شهريًا" : "شهريًا"}</div>
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

function PricingCard({ type = "basic" }) {

  return (
    <div className="shadow-custom-blue rounded-2xl py-8">
      <WaveHeader type={type} />
      <p className="text-2xl mt-10">
        {type === "basic"
          ? `باقات متكاملة لبناء موقع احترافي بمميزات غير محدودة`
          : `باقات متكاملة لانطلاقة كل مهني أدوات مرنة وحلول متكاملة
`}
      </p>

      <ul className="flex flex-col gap-8 px-5 mt-20 text-2xl">
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
        {type === "basic" &&
          (
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
        <Button
          variant={"outline"}
          className="mt-10 rounded-xl text-2xl w-44 h-12 border-secondary text-secondary"
        >
          {type === `basic` ? `اشترك` : `اشترك`}
        </Button>
      </div>
    </div>
  );
}

function Packages() {

  return (
    <section className="font-omnes" style={{ margin: "0px 100px" }}>
      <div className="header flex flex-col gap-5">
        <h2 className="text-6xl font-bold">الأسعار</h2>
        <div className="flex justify-between items-center">
          <p className="text-3xl">اختر الباقة التي تناسبك لتبدأ رحلتك في  المنصة</p>

          <div className="period-switch">
            <Switch />
          </div>
        </div>

        <div className="flex gap-5 justify-between mt-10">
          <div className="w-[537px]">
            <PricingCard type="full" />
          </div>
          <div className="w-[537px]">
            <PricingCard type="basic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
