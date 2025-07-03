import { ImHammer2 } from "react-icons/im";
import { FaListCheck } from "react-icons/fa6";
import { FaUsers, FaBuilding } from "react-icons/fa";



export default function StatusBar() {
  return (
    <div className="bg-white p-5 shadow rounded-lg">
      <div className="block md:flex justify-center gap-4">
        <div className="flex flex-col items-center justify-between border cursor-pointer  rounded-lg hover:border-[#FDC06B] lg:w-[25%] w-[100%] lg:mb-0 mb-5" style={{padding:'15px 0px'}}>
        <div className="rotate-[83deg]">
          <ImHammer2 fill="#0F4C81" size={28}  />
          </div>
          <span className="font-bold text-2xl text-black pt-2">15</span>
          <span className="pt-3" style={{color:'#64748B'}}>عامًا من الخبرة</span>
        </div>
        <div className="flex flex-col items-center justify-between border cursor-pointer rounded-lg hover:border-[#FDC06B] lg:w-[25%] w-[100%] lg:mb-0 mb-5" style={{padding:'15px 0px'}}>
          <FaListCheck fill="#0F4C81" size={28} />
          <span className="font-bold text-2xl text-black pt-2">15</span>
          <span className="pt-3" style={{color:'#64748B'}}>عامًا من الخبرة</span>
        </div>
        <div className="flex flex-col items-center justify-between border cursor-pointer rounded-lg hover:border-[#FDC06B] lg:w-[25%] w-[100%] lg:mb-0 mb-5" style={{padding:'15px 0px'}}>
          <FaUsers fill="#0F4C81" size={28} />
          <span className="font-bold text-2xl text-black pt-2">15</span>
          <span className="pt-3" style={{color:'#64748B'}}>عامًا من الخبرة</span>
        </div>
        <div className="flex flex-col items-center justify-between border cursor-pointer rounded-lg hover:border-[#FDC06B] lg:w-[25%] w-[100%] lg:mb-0 mb-5" style={{padding:'15px 0px'}}>
            <FaBuilding fill="#0F4C81" size={28} />
          <span className="font-bold text-2xl pt-2" style={{color:'#1E293B'}}>عامًا من الخبرة</span>
          <span className="pt-3" style={{color:'#64748B'}}>المدينة</span>
          
        </div>
      </div>
      <div className="w-full bg-[#F0F9FF] border border-[#BFDBFE] flex flex-start gap-5 items-center p-2 rounded-lg mt-5">
        <img src="/watheeq/assets/img/personal/ministryofjustice.webp" alt="watheeq" className="w-[140px] h-[50px]"/>
        <p><span className="font-bold">مرخص من وزارة العدل برقم :</span> 5A125JAIUSD</p>
      </div>
    </div>
  );
}
