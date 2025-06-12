import { HiChevronDown } from "react-icons/hi2";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white rounded-3xl px-6 py-3 shadow-sm w-full">
      <div className="text-right">
        <h3 className="text-[#003f7f] text-lg font-bold">أهلا بك</h3>
        <a
          href="https://watheeq.com/u/username"
          className="text-sm text-[#5d7ea1] flex items-center justify-end"
        >
          <span className="ml-1">موقعك</span>

          <span className="mr-1">watheeq.com/u/username</span>
          <img
            src="/watheeq/assets/img/clientdnavicon.png"
            alt="QR"
            className="w-4 h-4 mr-2"
          />
        </a>
      </div>
      <div className="flex items-center bg-[#fff] px-3 py-2 rounded-xl shadow-md space-x-2 space-x-reverse gap-2">
        <div className="relative bg-[#FFFAF1] ">
          <img
            src="/watheeq/assets/img/bell.png"
            alt="bell"
            className="w-5 h-5 m-3"
          />
        </div>
        <img
          src="/watheeq/assets/img/avatar.png"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-right">
          <p className="text-[#003f7f] font-semibold text-sm">أحمد ماضي</p>
          <p className="text-gray-400 text-xs">محامي</p>
        </div>
        <div>
            <HiChevronDown/>
        </div>
      </div>
    </div>
  );
}
