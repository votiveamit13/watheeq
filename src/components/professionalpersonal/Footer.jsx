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
          <div className="flex lg:gap-5 gap-1 items-center">
            <div className="rounded-full cursor-pointer p-2 bg-[#F0F9FF] hover:bg-[#0F4C81] transition-colors duration-300 group">
              <FaYoutube className="w-5 h-5 transition-colors duration-300 fill-[#0F4C81] group-hover:fill-white" />
            </div>
            <div className="rounded-full cursor-pointer p-2 bg-[#F0F9FF] hover:bg-[#0F4C81] transition-colors duration-300 group">
              <FaInstagram className="w-5 h-5 transition-colors duration-300 fill-[#0F4C81] group-hover:fill-white" />
            </div>
            <div className="rounded-full cursor-pointer p-2 bg-[#F0F9FF] hover:bg-[#0F4C81] transition-colors duration-300 group">
              <FaTiktok className="w-5 h-5 transition-colors duration-300 fill-[#0F4C81] group-hover:fill-white" />
            </div>
            <div className="rounded-full cursor-pointer p-2 bg-[#F0F9FF] hover:bg-[#0F4C81] transition-colors duration-300 group">
              <FaXTwitter className="w-5 h-5 transition-colors duration-300 fill-[#0F4C81] group-hover:fill-white" />
            </div>
          </div>
      </div>
      <div className="bg-white p-5 flex justify-center rounded-b-lg">
        <p className="text-[#64748B]">منصة وثيق - جميع الحقوق محفوظة 2025</p>
      </div>
    </div>
  );
}
