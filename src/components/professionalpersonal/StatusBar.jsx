import { ImHammer2 } from "react-icons/im";
import { FaListCheck } from "react-icons/fa6";
import { FaUsers, FaBuilding } from "react-icons/fa";



export default function StatusBar() {
  return (
    <div className="bg-white p-5 shadow rounded-lg">
      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-center justify-between border rounded-lg py-8 px-17">
          <ImHammer2 fill="#0F4C81" size={30}  />
          <span className="font-bold text-4xl text-black">15</span>
          <span>عامًا من الخبرة</span>
        </div>
        <div className="flex flex-col items-center justify-between border rounded-lg py-8 px-17">
          <FaListCheck fill="#0F4C81" size={30} />
          <span className="font-bold text-4xl text-black">15</span>
          <span>عامًا من الخبرة</span>
        </div>
        <div className="flex flex-col items-center justify-between border rounded-lg py-8 px-17">
          <FaUsers fill="#0F4C81" size={30} />
          <span className="font-bold text-4xl text-black">15</span>
          <span>عامًا من الخبرة</span>
        </div>
        <div className="flex flex-col items-center justify-between border rounded-lg py-8 px-17">
          <FaBuilding fill="#0F4C81" size={30} />
          <span className="font-bold text-4xl text-black">15</span>
          <span>عامًا من الخبرة</span>
        </div>
      </div>
    </div>
  );
}
