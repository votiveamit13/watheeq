export default function StepDots({ activeIndex = 0 }) {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      {[0, 1, 2, 3].map((index) => (
        <span
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === activeIndex ? "bg-[#13498B]" : "bg-gray-300"
          }`}
          
        ></span>
      ))}
    </div>
  );
}
