import { MdVerifiedUser, MdOutlineDownloadForOffline } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";

export default function Verification({professional, onSubmit}) {
  return (
    <div className="bg-white mt-5 p-5 rounded-lg mb-30">
      <h2 className="text-2xl font-bold">التحقق من هوية المهني</h2>
      <div className="mt-5 shadow flex items-center justify-between py-5 px-3 rounded-lg">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src="/watheeq/assets/img/user.jpg"
              alt="watheeq"
              width={70}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-[#2D3748] font-bold text-2xl">{professional.name}</p>
            <span>{professional.email}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="cursor-pointer flex items-center gap-2 bg-[#13498B] text-white py-2 px-5" onClick={onSubmit} style={{borderRadius:'7px'}}>
            <MdVerifiedUser size={25} />
            قبول المستندات
          </button>
          <button className="cursor-pointer flex items-center gap-2 border border-[#13498BCC] bg-[#F8FAFC] py-2 px-5 mr-4" style={{borderRadius:'7px'}}>
            <MdOutlineDownloadForOffline size={25} />
            تنزيل المستندات
          </button>
        </div>
      </div>
      <div className="shadow rounded-lg">
        <div className="mt-5 py-5 px-3">
          <div className="flex items-center w-1/2 mb-4" style={{justifyContent:'space-around'}}>
            <div className="text-[#0B2B51]">
              <p>اسم المهني</p>
            </div>
            <div className="border text-[#13498B] px-4 py-3 w-[250px] rounded-lg">
              <p>أحمد جمال ماضي</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-1/2 mb-4">
            <div className="text-[#0B2B51]">
              <p>المسمى الوظيفي</p>
            </div>
            <div className="border text-[#13498B] px-4 py-3 w-[250px] rounded-lg">
              <p>محامي</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-1/2 mb-4">
            <div className="text-[#0B2B51]">
              <p>البريد الالكتروني</p>
            </div>
            <div className="border text-[#13498B] px-4 py-3 w-[250px] rounded-lg">
              <p>ahmedmadi@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-1/2 mb-4">
            <div className="text-[#0B2B51]">
              <p>رقم الجوال</p>
            </div>
            <div className="border text-[#13498B] px-4 py-3 w-[250px] rounded-lg">
              <p>978520000000+</p>
            </div>
          </div>
        </div>

        <div className="py-3 px-3">
          <h3 className="text-2xl font-bold mb-5">الشهادات والرخص</h3>
          <div className="flex items-center justify-between w-1/2 mb-4">
            <div className="text-[#0B2B51]">
              <p>الشهادة الأكاديمية</p>
            </div>
            <div className="cursor-pointer border text-[#13498B] px-4 py-3 w-[250px] rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p>certificate.pdf</p>
                <FaFilePdf fill="red" size={20} />
              </div>
              <div>
                <MdOutlineDownloadForOffline size={25} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-1/2 mb-4">
            <div className="text-[#0B2B51]">
              <p>الرخصة المهنية</p>
            </div>
            <div className="cursor-pointer border text-[#13498B] px-4 py-3 w-[250px] rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p>file.pdf</p>
                <FaFilePdf fill="red" size={20} />
              </div>
              <div>
                <MdOutlineDownloadForOffline size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
