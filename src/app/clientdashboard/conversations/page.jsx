import { HiOutlineDotsHorizontal } from "react-icons/hi";
export default function Conversations() {
  return (
    <div className="bg-white mt-5 p-5 rounded-lg">
      <div className="flex justify-between">
        <div className="w-[230px]">
          <h2>الإجتماعات</h2>
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex ">
            <div className="ml-5">
              <img src="/watheeq/assets/img/profile.png" alt="watheeq" />
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

      </div>
    </div>
  );
}
