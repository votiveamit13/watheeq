import { FaSignOutAlt, FaGraduationCap  } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav
        className="bg-[#0F4C81] py-2 px-6 pl-10 pr-10 rounded-[2rem] flex flex-col md:flex-row justify-between  font-omnes relative z-40"
        style={{ boxShadow: "0px 10px 15px rgba(9, 61, 125, 0.1)" }}
      >
        <div className="navbar-add w-[200px] mr-[90px] sm:w-auto sm:mr-0">
            <div className="flex gap-2 items-center text-white">
                <FaGraduationCap size={50}/>
                <h2 className="font-bold text-xl">أ /محمد أحمد</h2>
            </div>
            <span className="text-white">مستشار قانوني</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white flex rounded-lg cursor-pointer p-2 px-5 items-center gap-2">
            <FaSignOutAlt />
            تسجيل الدخول
          </button>
        </div>
      </nav>
    </>
  );
}
