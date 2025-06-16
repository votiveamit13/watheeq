import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BiSliderAlt } from "react-icons/bi";
export default function Conversations() {
  return (
    <div className="bg-white mt-5 rounded-lg">
      <div className="flex justify-between">
        <div className="w-[290px] p-5 shadow">
          <h2>الإجتماعات</h2>
          <div className="flex w-full mt-7">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded w-full max-w-md">
             <FiSearch className="text-[#005088] ml-1" />
              <input
                type="text"
                placeholder="ابحث هنا"
                className="bg-transparent flex-1 text-sm text-right placeholder-gray-500 focus:outline-none"
              />

            </div>
            <button className="text-[#005088] text-xl mr-3">
              <BiSliderAlt />
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between p-5 items-center shadow">
            <div className="flex items-center">
              <div className="ml-5">
                <img
                  src="/watheeq/assets/img/profile.png"
                  alt="watheeq"
                  width={50}
                />
              </div>
              <div>
                <h3>سعيد الشيخ</h3>
                <span>009777444411</span>
              </div>
            </div>
            <div>
              <HiOutlineDotsHorizontal />
            </div>
          </div>
          <div className="bg-[#EDF2F6] h-screen p-5">dfhjskdfhkj</div>
        </div>
      </div>
    </div>
  );
}
