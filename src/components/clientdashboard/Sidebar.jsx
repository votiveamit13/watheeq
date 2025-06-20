"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi2";

export default function Sidebar({ collapsed, setCollapsed }) {
  const [activeMenu, setActiveMenu] = useState("home");
  const itemRefs = useRef({});
  const [submenuTop, setSubmenuTop] = useState(0);
  const [showSubmenu, setShowSubmenu] = useState(null);


  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleMenuClick = (menu) => {
    if (activeMenu === menu && showSubmenu === menu) {
      setShowSubmenu(null);
      return;
    }
    setActiveMenu(menu);
    setShowSubmenu(menu);
    const rect = itemRefs.current[menu]?.getBoundingClientRect();
    if (rect) {
      setSubmenuTop(rect.top);
    }
  };

  const handleSubMenuClick = () => {
    setShowSubmenu(null);
  };

  const submenus = {
    yourpage: [
      { label: "القالب", icon: "rectangleanalytics.png", link: "/clientdashboard/template" },
      { label: "الخدمات", icon: "document.png", link: "/clientdashboard/services" },
      { label: "المنشورات", icon: "rectanglepencil.png", link: "/clientdashboard/publications" },
    ],
    finance: [
      { label: "الباقة", icon: "bills.png", link: "/clientdashboard/package" },
      { label: "المحفظة", icon: "wallet.png", link: "/clientdashboard/wallet" },
    ],
  };

  return (
    <div className="relative flex" style={{height:'150vh'}}>
      <div></div>
      <div
        className={`bg-white shadow-lg flex flex-col gap-3 p-4 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex justify-between items-center">
          <img
            src={`/watheeq/assets/img/${collapsed ? "favicon" : "sidebaricons/toggle"}.png`}
            alt="Toggle"
            className="w-10 h-10 cursor-pointer"
            onClick={toggleSidebar}
          style={{width:"39px",height:'40px', marginTop:'4px' }}/>
          {!collapsed && (
            <img
              src="/watheeq/assets/img/logo.png"
              alt="Logo"
              className="w-43 pl-4"
            />
          )}
        </div>

        <nav
          className={`space-y-4 text-[#005bac] text-xl pt-10 pl-2 ${
            collapsed ? "text-center" : "text-right"
          }`}
        >
          {[
            { key: "home", label: "لوحة التحكم", icon: "home.png", link: "/clientdashboard" },
            { key: "meetings", label: "الاجتماعات", icon: "telephone.png", link: "/clientdashboard/conversations" },
            { key: "yourpage", label: "صفحتك", icon: "globe.png", hasSub: true },
            { key: "business", label: "الأعمال", icon: "briefcase.png", link: "/clientdashboard/business" },
            { key: "finance", label: "المالية", icon: "analytics.png", hasSub: true },
            { key: "support", label: "الدعم الفني", icon: "chatsetting.png", link: "/clientdashboard/support" },
            { key: "settings", label: "الإعدادت", icon: "settings.png", link: "/clientdashboard/settings" },
          ].map((item) => (
            <div key={item.key} ref={(el) => (itemRefs.current[item.key] = el)}>
              {item.hasSub ? (
                <div
                  className={`flex items-center rounded-md px-2 py-2 cursor-pointer transition-all duration-200 ${
                    activeMenu === item.key ? "bg-[#005bac] text-white" : "hover:text-[#003f7f]"
                  }`}
                  onClick={() => handleMenuClick(item.key)}
                >
                  <img
                    src={`/watheeq/assets/img/sidebaricons/${item.icon}`}
                    className={`w-5 h-5 ${
                      collapsed ? "mx-auto" : "ml-4 mr-4"
                    }       transition-all duration-300
        ${activeMenu === item.key ? "invert brightness-0" : "filter"}
      `}
                    alt={item.label}
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
                <Link href={item.link}>
                  <div
                    className={`flex items-center rounded-md px-2 py-2 cursor-pointer transition-all duration-200 ${
                      activeMenu === item.key ? "bg-[#005bac] text-white" : "hover:text-[#003f7f]"
                    }`}
                    onClick={() => handleMenuClick(item.key)}
                  >
                    <img
                      src={`/watheeq/assets/img/sidebaricons/${item.icon}`}
                      className={`w-5 h-5 ${
                        collapsed ? "mx-auto" : "ml-4 mr-4"
                      }       transition-all duration-300
        ${activeMenu === item.key ? "invert brightness-0" : "filter"}
      }`}
                      alt={item.label}
                    />
                    {!collapsed && <span className="flex-1">{item.label}</span>}
                  </div>
                </Link>
              )}

              {/* Collapsed Submenu */}
              {collapsed &&
                showSubmenu === item.key &&
                item.hasSub &&
                submenus[item.key]?.length > 0 && (
                  <div
                    className="absolute space-y-3 z-50"
                    style={{ top: `${submenuTop}px`, left: "-60%" }}
                  >
                    {submenus[item.key].map((sub, index) => (
                      <Link href={sub.link} key={index}>
                        <div
                          className="w-10 h-10 bg-white shadow-md rounded-md flex items-center justify-center mb-2 cursor-pointer hover:bg-[#e6f0ff] transition"
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

              {/* Expanded Submenu */}
              {!collapsed &&
                showSubmenu === item.key &&
                item.hasSub &&
                submenus[item.key]?.length > 0 && (
                  <div className="mr-5 mt-2 space-y-2 text-base text-[#005bac]">
                    {submenus[item.key].map((sub, index) => (
                      <Link href={sub.link} key={index}>
                        <div
                          className="flex items-center gap-2 hover:text-[#003f7f] cursor-pointer px-2"
                          onClick={handleSubMenuClick}
                         style={{marginBottom:'10px',marginRight:'10px'}}>
                          <img
                            src={`/watheeq/assets/img/sidebaricons/${sub.icon}`}
                            className="w-4 h-4"
                            alt={sub.label}
                          />
                          <span>{sub.label}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}

          {/* Logout */}
          <div
            className="flex items-center gap-2 hover:text-[#003f7f] cursor-pointer px-2 py-2 rounded-md"
            onClick={() => setActiveMenu(null)}
          >
            <img
              src="/watheeq/assets/img/sidebaricons/logout.png"
              className={`w-5 h-5 ${collapsed ? "mx-auto" : "ml-2"}`}
              alt="Logout"
            />
            {!collapsed && <span>تسجيل خروج</span>}
          </div>
        </nav>
      </div>
    </div>
  );
}
