import { FaStar } from "react-icons/fa";

export default function ProfileBar() {
  return (
    <div className="relative flex items-center justify-center -mt-12 z-10">
      <div className="bg-[#0A3156B2] w-[80%] text-white rounded-lg lg:mt-0 mt-[-23px] px-6 py-6 block md:flex hover:bg-[#0A3156E5] cursor-pointer justify-between items-center shadow-md mr-33 max-w-[max-content] md:max-w-full">
        <div className="flex items-center gap-4 lg:mb-0 mb-5">
          <div className="text-right">
            <h2 className="text-lg font-bold">محمد أحمد</h2>
            <p className="text-sm text-gray-200">مستشار قانوني</p>
          </div>
        </div>

        <div
          className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full text-sm"
          dir="ltr"
        >
          <div className="flex text-yellow-400">
            {Array.from({ length: 4 }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <FaStar className="text-gray-300" />
          </div>
          <span className="font-bold text-[#0F4C81]">4.5</span>
          <span className="text-gray-500">(540 تقييم)</span>
        </div>
      </div>

      <div
        className="absolute -start-6 right-10 w-24 h-24 rounded-full border-[6px] border-white bg-white shadow-md overflow-hidden sm:right-10 sm:bottom-auto right-[18px] bottom-[28px]"
      >
        <img
          src="/watheeq/assets/img/personal/profile.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
