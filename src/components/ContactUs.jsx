"use client";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div
      className="bg-primary flex items-center justify-between font-omnes text-white px-10 py-20 rounded-md"
      style={{ backgroundColor: "#13498B", margin: "35px" }}
    >
      <h2 className="text-[40px]">تواصل معنا لأي استفسارات</h2>
      <div className="flex items-center gap-5">
        <div className="flex gap-5 items-center">
          <FaWhatsapp  className="w-6 h-6"/>
          <FaTiktok className="w-6 h-6"/>
          <img src="/watheeq/assets/img/x.png" alt="X" className="w-6 h-6"/>
          <FaInstagram  className="w-6 h-6"/>
        </div>
        <button
          className="bg-white text-primary font-bold text-3xl w-[200px] hover:text-white hover:bg-white cursor-pointer"
          style={{ color: "#13498B", display:'flex', alignItems:
            'center', justifyContent:'center', gap:'10px', padding:'8px', borderRadius:'4px'
           }}
        >
          تواصل معنا
          <img
            src="/watheeq/assets/img/phone.png"
            alt="phone"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
}
