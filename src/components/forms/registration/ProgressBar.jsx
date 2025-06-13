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
      <div className="flex justify-center items-center space-x-reverse space-x-0 rtl:space-x-0 rtl:flex-row-reverse text-sm sm:text-base">
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
      </div>
    </section>
  );
}
