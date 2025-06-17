"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi2";

export default function Sidebar({ collapsed, setCollapsed }) {
  const [activeMenu, setActiveMenu] = useState("home");

  const itemRefs = useRef({});
  const [submenuTop, setSubmenuTop] = useState(0);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      return;
    }

    setActiveMenu(menu);

    const rect = itemRefs.current[menu]?.getBoundingClientRect();
    if (rect) {
      setSubmenuTop(rect.top - 0);
    }
  };

  const handleSubMenuClick = () => {
    setActiveMenu(null);
  };

  const submenus = {
    yourpage: [
      { label: "القالب", icon: "rectangleanalytics.png", link: "/clientdashboard/#" },
      { label: "الخدمات", icon: "document.png", link: "/clientdashboard/#" },
      { label: "المنشورات", icon: "rectanglepencil.png", link: "/clientdashboard/#" },
    ],
    finance: [
      { label: "الباقة", icon: "bills.png", link: "/clientdashboard/#" },
      { label: "المحفظة", icon: "wallet.png", link: "/clientdashboard/wallet" },
    ],
  };

  return (
    <div className="relative flex">
      <div
        className={`bg-white shadow-lg h-200 flex flex-col p-4 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex justify-between items-center mb-10 mt-5">
          <img
            src={`/watheeq/assets/img/${
              collapsed ? "favicon" : "sidebaricons/toggle"
            }.png`}
            alt="Toggle"
            className="w-10 h-10 cursor-pointer"
            onClick={toggleSidebar}
          />
          {!collapsed && (
            <img
              src="/watheeq/assets/img/logo.png"
              alt="Logo"
              className="w-40"
            />
          )}
        </div>

        <nav
          className={`space-y-4 text-[#005bac] text-xl ${
            collapsed ? "text-center" : "text-right"
          }`}
        >
          {[
            {
              key: "home",
              label: "لوحة التحكم",
              icon: "home.png",
              link: "/clientdashboard",
            },
            {
              key: "meetings",
              label: "الاجتماعات",
              icon: "telephone.png",
              link: "/clientdashboard/conversations",
            },
            {
              key: "yourpage",
              label: "صفحتك",
              icon: "globe.png",
              hasSub: true,
            },
            {
              key: "business",
              label: "الأعمال",
              icon: "briefcase.png",
              link: "/clientdashboard/business",
            },
            {
              key: "finance",
              label: "المالية",
              icon: "analytics.png",
              hasSub: true,
            },
            {
              key: "support",
              label: "الدعم الفني",
              icon: "chatsetting.png",
              link: "/clientdashboard/#",
            },
            {
              key: "settings",
              label: "الإعدادت",
              icon: "settings.png",
              link: "/clientdashboard/#",
            },
          ].map((item) => (
            <div key={item.key} ref={(el) => (itemRefs.current[item.key] = el)}>
              {item.hasSub ? (
                <div
                  className={`flex items-center cursor-pointer rounded-xl transition-all duration-200 ${
                    activeMenu === item.key
                      ? "bg-[#005bac] text-white p-2 "
                      : "hover:text-[#003f7f]"
                  }`}
                  onClick={() => handleMenuClick(item.key)}
                  ref={(el) => (itemRefs.current[item.key] = el)}
                >
                  <img
                    src={`/watheeq/assets/img/sidebaricons/${item.icon}`}
                    className={`
        ml-5
        ${collapsed ? "mx-auto" : "mr-4"}
        transition-all duration-300
        ${activeMenu === item.key ? "invert brightness-0" : "filter"}
      `}
                  />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {activeMenu === item.key ? (
                        <HiChevronDown className="text-xl" />
                      ) : (
                        <HiChevronLeft className="text-xl" />
                      )}
                    </>
                  )}
                </div>
              ) : (
                <Link href={`${item.link}`}>
                  <div
                    className={`flex items-center cursor-pointer rounded-xl transition-all duration-200 ${
                      activeMenu === item.key
                        ? "bg-[#005bac] text-white p-2 "
                        : "hover:text-[#003f7f]"
                    }`}
                    ref={(el) => (itemRefs.current[item.key] = el)}
                    onClick={() => handleMenuClick(item.key)}
                  >
                    <img
                      src={`/watheeq/assets/img/sidebaricons/${item.icon}`}
                      className={`
          ml-5
          ${collapsed ? "mx-auto" : "mr-4"}
          transition-all duration-300
          ${activeMenu === item.key ? "invert brightness-0" : "filter"}
        `}
                    />
                    {!collapsed && (
                      <>
                        <span className="flex-1">{item.label}</span>
                      </>
                    )}
                  </div>
                </Link>
              )}

              {collapsed &&
                activeMenu === item.key &&
                item.hasSub &&
                submenus[item.key]?.length > 0 && (
                  <div
                    className="absolute space-y-3 z-50"
                    style={{ top: `${submenuTop}px`, left: "-60%" }}
                  >
                    {submenus[item.key].map((sub, index) => (
                      <Link href={`${sub.link}`} key={index}>
                      <div
                        key={index}
                        className="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#e6f0ff]"
                        onClick={handleSubMenuClick}
                        title={sub.label}
                      >
                        <img
                          src={`/watheeq/assets/img/sidebaricons/${sub.icon}`}
                          alt={sub.label}
                          className="w-5 h-5"
                        />
                      </div>
                      </Link>
                    ))}
                  </div>
                )}

              {!collapsed &&
                activeMenu === item.key &&
                item.hasSub &&
                submenus[item.key]?.length > 0 && (
                  <div className="mr-5 mt-2 space-y-2 text-base text-[#005bac]">
                    {submenus[item.key].map((sub, index) => (
                      <Link href={`${sub.link}`} key={index}>
                      <div
                        key={index}
                        className="flex items-center hover:text-[#003f7f] cursor-pointer mr-5"
                        onClick={handleSubMenuClick}
                      >
                        <img
                          src={`/watheeq/assets/img/sidebaricons/${sub.icon}`}
                          className="ml-5"
                        />
                        <span>{sub.label}</span>
                      </div>
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}

          <div
            className="flex items-center hover:text-[#003f7f] cursor-pointer"
            onClick={() => setActiveMenu(null)}
          >
            <img
              src="/watheeq/assets/img/sidebaricons/logout.png"
              className={`ml-5 ${collapsed ? "mx-auto" : "mr-4"}`}
            />
            {!collapsed && <span>تسجيل خروج</span>}
          </div>
        </nav>
      </div>
    </div>
  );
}
