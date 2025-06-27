import { FaStar } from "react-icons/fa";

export default function ProfileBar() {
  return (
    <div className="relative mt-[-40px] z-10">
      <div className="bg-[#0F4C81] text-white rounded-lg p-4 flex justify-between items-center shadow-md mx-5">
        <div className="flex items-center gap-4">
          <div className="text-right">
            <h2 className="text-lg font-bold">محمد أحمد</h2>
            <p className="text-sm text-gray-200">مستشار قانوني</p>
          </div>

        </div>
        <div className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full text-sm">
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
    </div>
  );
}
