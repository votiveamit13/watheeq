import { FaArrowUpLong } from "react-icons/fa6";

export default function StatusBar({
  professionalsCount,
  earnings,
  clientsCount,
}) {
  return (
    <div className="bg-white flex flex-between items-center gap-10">
      <div className="w-full bg-white shadow py-3 px-6 rounded-lg">
        <div>
          <p className="text-2xl font-bold mb-3">عدد المهنيين</p>
        </div>
        <div className="flex justify-between  gap-3">
          <p className="text-3xl">{professionalsCount}</p>
          <span>
            <span className="flex items-center gap-1 bg-[#11CD00] text-white text-[10px] py-1 px-3 rounded-xl">
              20%
              <FaArrowUpLong size={9} />
            </span>
          </span>
        </div>
      </div>
      <div className="w-full bg-[#13498B] text-white  shadow py-3 px-6 rounded-lg">
        <div>
          <p className="text-2xl font-bold mb-3">أرباح هذا الشهر</p>
        </div>
        <div className="flex justify-between  gap-3">
          <div className="flex items-center gap-2">
            <p className="text-3xl">{earnings}</p>
            <img
              src="/watheeq/assets/img/reports.png"
              alt="watheeq"
              width={25}
            />
          </div>
          <span className="mt-3">
            <span className="flex items-center gap-1 bg-[#11CD00] text-white text-[10px] py-1 px-3 rounded-xl">
              50%
              <FaArrowUpLong size={9} />
            </span>
          </span>
        </div>
      </div>
      <div className="w-full bg-white shadow py-3 px-6 rounded-lg">
        <div>
          <p className="text-2xl font-bold mb-3">عدد العملاء</p>
        </div>
        <div className="flex justify-between  gap-3">
          <p className="text-3xl">{clientsCount}</p>
          <span>
            <span className="flex items-center gap-1 bg-[#11CD00] text-white text-[10px] py-1 px-3 rounded-xl">
              20%
              <FaArrowUpLong size={9} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
