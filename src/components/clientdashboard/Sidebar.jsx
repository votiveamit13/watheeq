"use client";
import { useState } from "react";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi2";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const handleSubMenuClick = () => {
    setActiveMenu(null);
  };
  return (
    <div className="w-64 bg-white shadow-lg h-screen flex flex-col p-4">
      <div className="mb-4 p-4 text-center">
        <img src="/watheeq/assets/img/logo.png" alt="watheeq" />
      </div>
      <nav className="space-y-4 text-right items-center text-[#005bac] text-xl">
        <div
          className={`flex items-center cursor-pointer rounded-xl
         ${
           activeMenu === "home"
             ? "bg-[#005bac] text-white p-2"
             : "hover:text-[#003f7f] text-[#005bac]"
         }`}
          onClick={() => setActiveMenu("home")}
        >
          <img
            src="/watheeq/assets/img/sidebaricons/home.png"
            className="ml-5 mr-4"
          />
          <span>لوحة التحكم</span>
        </div>
        <div
          className={`flex items-center cursor-pointer rounded-xl
         ${
           activeMenu === "meetings"
             ? "bg-[#005bac] text-white p-2"
             : "hover:text-[#003f7f] text-[#005bac]"
         }`}
          onClick={() => setActiveMenu("meetings")}
        >
          <img
            src="/watheeq/assets/img/sidebaricons/telephone.png"
            className="ml-5 mr-4"
          />
          <span>الاجتماعات</span>
        </div>
        <div
          className={`flex items-center cursor-pointer rounded-xl
         ${
           activeMenu === "yourpage"
             ? "bg-[#005bac] text-white p-2"
             : "hover:text-[#003f7f] text-[#005bac]"
         }`}
          onClick={() => setActiveMenu("yourpage")}
        >
          <img
            src="/watheeq/assets/img/sidebaricons/globe.png"
            className="ml-5 mr-4"
          />
          <span>صفحتك</span>
          {activeMenu === "yourpage" ? (
            <HiChevronDown className="text-xl" />
          ) : (
            <HiChevronLeft className="text-xl" />
          )}
        </div>
        {activeMenu === "yourpage" && (
          <div className="mr-5 mt-2 space-y-2 text-base text-[#005bac]">
            <div
              className="flex items-center hover:text-[#003f7f] cursor-pointer"
              onClick={handleSubMenuClick}
            >
              <img
                src="/watheeq/assets/img/sidebaricons/rectangleanalytics.png"
                className="ml-5"
              />
              <span>القالب</span>
            </div>
            <div
              className="flex items-center hover:text-[#003f7f] cursor-pointer"
              onClick={handleSubMenuClick}
            >
              <img
                src="/watheeq/assets/img/sidebaricons/document.png"
                className="ml-5"
              />
              <span>الخدمات</span>
            </div>
            <div
              className="flex items-center hover:text-[#003f7f] cursor-pointer"
              onClick={handleSubMenuClick}
            >
              <img
                src="/watheeq/assets/img/sidebaricons/rectanglepencil.png"
                className="ml-5"
              />
              <span>المنشورات</span>
            </div>
          </div>
        )}

        <div
          className={`flex items-center cursor-pointer rounded-xl
         ${
           activeMenu === "business"
             ? "bg-[#005bac] text-white p-2"
             : "hover:text-[#003f7f] text-[#005bac]"
         }`}
          onClick={() => setActiveMenu("business")}
        >
          <img
            src="/watheeq/assets/img/sidebaricons/briefcase.png"
            className="ml-5 mr-4"
          />
          <span>الأعمال</span>
        </div>

        <div
          className={`flex items-center cursor-pointer rounded-xl
         ${
           activeMenu === "finance"
             ? "bg-[#005bac] text-white p-2"
             : "hover:text-[#003f7f] text-[#005bac]"
         }`}
          onClick={() => setActiveMenu("finance")}
        >
          <img
            src="/watheeq/assets/img/sidebaricons/analytics.png"
            className="ml-5 mr-4"
          />
          <span>المالية</span>
                    {activeMenu === "finance" ? (
            <HiChevronDown className="text-xl" />
          ) : (
            <HiChevronLeft className="text-xl" />
          )}
        </div>
        {activeMenu === "finance" && (
          <div className="mr-5 mt-2 space-y-2 text-base text-[#005bac]">
            <div
              className="flex items-center hover:text-[#003f7f] cursor-pointer"
              onClick={handleSubMenuClick}
            >
              <img
                src="/watheeq/assets/img/sidebaricons/bills.png"
                className="ml-5"
              />
              <span>الباقة</span>
            </div>
            <div
              className="flex items-center hover:text-[#003f7f] cursor-pointer"
              onClick={handleSubMenuClick}
            >
              <img
                src="/watheeq/assets/img/sidebaricons/wallet.png"
                className="ml-5"
              />
              <span>المحفظة</span>
            </div>
          </div>
        )}
        <div
          className={`flex items-center cursor-pointer rounded-xl
         ${
           activeMenu === "support"
             ? "bg-[#005bac] text-white p-2"
             : "hover:text-[#003f7f] text-[#005bac]"
         }`}
          onClick={() => setActiveMenu("support")}
        >
          <img
            src="/watheeq/assets/img/sidebaricons/chatsetting.png"
            className="ml-5 mr-4"
          />
          <span>الدعم الفني</span>
        </div>

        <div
          className={`flex items-center cursor-pointer rounded-xl
         ${
           activeMenu === "settings"
             ? "bg-[#005bac] text-white p-2"
             : "hover:text-[#003f7f] text-[#005bac]"
         }`}
          onClick={() => setActiveMenu("settings")}
        >
          <img
            src="/watheeq/assets/img/sidebaricons/settings.png"
            className="ml-5 mr-4"
          />
          <span>الإعدادت</span>
        </div>

        <div
          className="flex items-center hover:text-[#003f7f] cursor-pointer "
          onClick={() => setActiveMenu(null)}
        >
          <img
            src="/watheeq/assets/img/sidebaricons/logout.png"
            className="ml-5 mr-4"
          />
          <span>تسجيل خروج</span>
        </div>
      </nav>
    </div>
  );
}
