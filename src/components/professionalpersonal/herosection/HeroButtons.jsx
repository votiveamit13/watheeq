import { HiDotsVertical } from "react-icons/hi";
import { FaQrcode, FaLink } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="flex justify-end gap-2 p-5">
      <button className="bg-[#0F4C81] text-white flex  rounded-lg cursor-pointer p-2 px-5 items-center gap-2">
        <FaSignOutAlt />
        تسجيل الدخول
      </button>
      <button className="bg-white rounded-full cursor-pointer p-3">
        <FaLink />
      </button>
      <button className="bg-white rounded-full cursor-pointer p-3">
        <FaQrcode />
      </button>
      <button className="bg-white rounded-full cursor-pointer p-3">
        <HiDotsVertical />
      </button>
    </div>
  );
}
