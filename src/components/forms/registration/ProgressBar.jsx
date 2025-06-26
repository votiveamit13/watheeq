export default function ProgressBar({ currentStep = 1 }) {
  const steps = [
    {
      id: 3,
      label: "بيانات المهنة",
    },
    {
      id: 2,
      label: "تأكيد الحساب",
    },

    {
      id: 1,
      label: "بيانات الحساب",
    },
  ];


  return (
    <section>
      {/* <div className="flex justify-center items-center space-x-reverse space-x-0 rtl:space-x-0 rtl:flex-row-reverse text-sm sm:text-base">
        {steps.map((step, index) => (
          <div className="flex items-center" key={step.id}>
            <div className="relative flex items-center justify-center">
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  currentStep === step.id
                    ? "border-blue-500"
                    : "border-gray-300"
                } bg-white z-10`}
              />
              {index !== steps.length - 1 && (
                <div className="w-28 h-px bg-gray-300 absolute top-1/2 left-full -translate-y-1/2 z-0" />
              )}
            </div>
            <div
              className={`mt-10 text-center ${
                currentStep === step.id
                  ? "font-bold"
                  : "text-gray-500"
              }`}
            >
              {step.label}
            </div>
          </div>
          
        ))}
      </div> */}


















      <div className="flex items-center space-x-reverse justify-center space-x-4 rtl:space-x-reverse">
    

    <div className="flex flex-col items-center text-center">
      <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 p-[2px]" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="mt-2 text-sm font-semibold text-blue-900">بيانات الحساب</span>
    </div>

    <div className="h-0.5 w-10 bg-blue-500"></div>


    <div className="flex flex-col items-center text-center">
      <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 p-[2px]" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="mt-2 text-sm font-semibold text-blue-900">تأكيد الحساب</span>
    </div>

    <div className="h-0.5 w-10 bg-gray-300"></div>


    <div className="flex flex-col items-center text-center">
      <div className="relative flex items-center justify-center w-5 h-5 rounded-full border-2 border-blue-500 bg-white">
        <div className="w-1 h-1 rounded-full bg-blue-500"></div>
      </div>
      <span className="mt-2 text-sm font-semibold text-blue-900">بيانات المهنة</span>
    </div>

  </div>
      
    </section>
  );
}
