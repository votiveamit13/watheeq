"use client";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import AccountData from "./AccountData";
import AccountConfirmation from "./AccountConfirmation";
import OccupationInfo from "./OccupationInfo";
import Successfull from "./Successfull";
import StepDots from "./StepDots";


export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <AccountData onNext={handleNext} />;
      case 2:
        return <AccountConfirmation onNext={handleNext} />;
      case 3:
        return <OccupationInfo onNext={handleNext} />;
      case 4:
        return <Successfull />;
      default:
        return null;
    }
  };
  return (
<section className="flex lg:items-center flex-wrap overflow-hidden">
<div className="w-full md:w-1/2 justify-center px-[45px] bg-white mt-[-80px] h-[100%] md:h-[120vh]">
      {currentStep != 3 && (
          <img
          src="/watheeq/assets/img/logo.png"
          alt="watheeq"
          className="w-[200px] mx-auto my-5 pt-10 md:pt-20 pb-0 md:pb-10 mt-20"
          />

        )}

        {currentStep === 1 && (
          <img
            src="/watheeq/assets/img/registration1.png"
            alt="registration1"
            className="mb-10 w-[350] mx-auto"
          />
        )}

        {currentStep === 2 && (
          <img
            src="/watheeq/assets/img/registration2.png"
            alt="registration2"
            className="mb-10 w-[350] mx-auto"
          />
        )}

        {currentStep === 3 && (
          <img
            src="/watheeq/assets/img/registration3.png"
            alt="registration2"
            className="mb-10 mt-30 w-[450] mx-auto"
          />
        )}

        {currentStep === 4 && (
          <img
            src="/watheeq/assets/img/registration4.png"
            alt="registration2"
            className="mb-10 w-[350] mx-auto"
          />
        )}

        <h3 className="text-3xl font-bold-500 text-center mb-10">
          واجهة تحكم قانونية لإدارة صفحتك كمحام محترف
        </h3>
        {currentStep === 1 && <StepDots activeIndex={0} />}
        {currentStep === 2 && <StepDots activeIndex={1} />}
        {currentStep === 3 && <StepDots activeIndex={2} />}
        {currentStep === 4 && <StepDots activeIndex={3} />}
      </div>

      <div className="bg-[#F5F8FB] w-full md:w-1/2 justify-center">
        <ProgressBar currentStep={currentStep} />
        <div className="mt-4">{renderStepComponent()}</div>
      </div>


    </section>
  );
}