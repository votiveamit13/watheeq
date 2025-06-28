import React from "react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#0F4C81] p-5 flex justify-between items-center rounded-t-lg">
        <div>
          <img
            src="/watheeq/assets/img/footerlogo.png"
            alt="watheeq"
            width={280}
          />
        </div>
          <div className="flex gap-5 items-center">
            <div className="bg-white rounded-full cursor-pointer p-2">
              <FaYoutube fill="#0F4C81" className="w-5 h-5" />
            </div>
            <div className="bg-white rounded-full cursor-pointer p-2">
              <FaInstagram fill="#0F4C81" className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="bg-white rounded-full cursor-pointer p-2">
              <FaTiktok fill="#0F4C81" className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="bg-white rounded-full cursor-pointer p-2">
              <FaXTwitter fill="#0F4C81" className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
      </div>
      <div className="bg-white p-5 flex justify-center rounded-b-lg">
        <p className="text-[#64748B]">منصة وثيق - جميع الحقوق محفوظة 2025</p>
      </div>
    </div>
  );
}
