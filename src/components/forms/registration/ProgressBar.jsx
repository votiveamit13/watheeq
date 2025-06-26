export default function ProgressBar({ currentStep = 0 }) {

  const steps = [
    { id: 1, label: "بيانات الحساب" },
    { id: 2, label: "تأكيد الحساب" },
    { id: 3, label: "معلومات المهنة" },

  ];

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
<div className="px-4 pt-2 pb-4 items-center justify-center" style={{width:'380px', margin:'auto', marginTop:'40px'}}>

      <div className="relative h-4 flex items-center">

        <div className="absolute w-full h-[1.5px] bg-gray-300"></div>

        <div
          className="absolute h-[1.5px] bg-[#13498B]"
          style={{
            width: `100%`,
            transition: 'width 0.3s ease'
          }}
        ></div>


        <div className="flex justify-between w-full absolute">
          {steps.map((step) => {
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;

            return (
              <div
                key={step.id}
                className={`w-4 h-4 rounded-full ${isCompleted ? 'bg-[#13498B]' : isActive ? 'border-2 border-[#13498B] bg-white' : 'border-2 border-gray-300 bg-white'}`}
              >
                {isCompleted && (
                  <svg
                    className="w-full h-full text-white p-[2px]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      </div>


      <div className="flex justify-between mt-3 rtl:space-x-reverse" style={{width:'488px', marginRight:'-68px'}}>
        {steps.map((step) => (
          <span
            key={step.id}
            className={`text-[15px] ${currentStep >= step.id ? 'text-[#13498B] font-medium' : 'text-[#5A80AE]'}`}
            style={{ flex: 1, textAlign: 'center' }}
          >
            {step.label}
          </span>
        ))}
      </div>
    </div>
  );
}