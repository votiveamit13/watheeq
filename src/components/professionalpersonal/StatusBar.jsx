import { ImHammer2 } from "react-icons/im";
import { FaListCheck } from "react-icons/fa6";
import { FaUsers, FaBuilding } from "react-icons/fa";



export default function StatusBar() {
  return (
    <div className="bg-white p-5 shadow rounded-lg">
      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-center justify-between border rounded-lg py-8 px-18 hover:border-[#FDC06B]">
          <ImHammer2 fill="#0F4C81" size={30}  />
          <span className="font-bold text-4xl text-black">15</span>
          <span>عامًا من الخبرة</span>
        </div>
        <div className="flex flex-col items-center justify-between border rounded-lg py-8 px-18 hover:border-[#FDC06B]">
          <FaListCheck fill="#0F4C81" size={30} />
          <span className="font-bold text-4xl text-black">15</span>
          <span>عامًا من الخبرة</span>
        </div>
        <div className="flex flex-col items-center justify-between border rounded-lg py-8 px-18 hover:border-[#FDC06B]">
          <FaUsers fill="#0F4C81" size={30} />
          <span className="font-bold text-4xl text-black">15</span>
          <span>عامًا من الخبرة</span>
        </div>
        <div className="flex flex-col items-center justify-between border rounded-lg py-8 px-18 hover:border-[#FDC06B]">
          <FaBuilding fill="#0F4C81" size={30} />
          <span className="font-bold text-4xl text-black">15</span>
          <span>عامًا من الخبرة</span>
        </div>
      </div>
      <div className="w-full bg-[#F0F9FF] border border-[#BFDBFE] flex flex-start gap-5 items-center p-2 rounded-lg mt-5">
        <img src="/watheeq/assets/img/personal/ministryofjustice.webp" alt="watheeq" className="w-[140px] h-[50px]"/>
        <p><span className="font-bold">مرخص من وزارة العدل برقم :</span> 5A125JAIUSD</p>
      </div>
    </div>
  );
}
