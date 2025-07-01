"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function Sidebar({ collapsed, setCollapsed }) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("");
  const itemRefs = useRef({});
  const [submenuTop, setSubmenuTop] = useState(0);
  const [showSubmenu, setShowSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setCollapsed(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setCollapsed]);

  useEffect(() => {
    if (
      pathname.includes("template") ||
      pathname.includes("services") ||
      pathname.includes("publications")
    ) {
      setActiveMenu("yourpage");
    } else if (pathname.includes("package") || pathname.includes("wallet")) {
      setActiveMenu("finance");
    } else if (pathname.includes("business")) {
      setActiveMenu("business");
    } else if (pathname.includes("conversations")) {
      setActiveMenu("meetings");
    } else if (pathname.includes("support")) {
      setActiveMenu("support");
    } else if (pathname.includes("settings")) {
      setActiveMenu("settings");
    } else if (pathname === "/professionaldashboard") {
      setActiveMenu("home");
    }
  }, [pathname]);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleMenuClick = (menu, link = null) => {
    if (link) {
      router.push(link);
      if (isMobile) setCollapsed(true);
    }

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
    if (isMobile) setCollapsed(true);
  };

  const submenus = {
    yourpage: [
      {
        label: "القالب",
        icon: "rectangleanalytics.png",
        link: "/professionaldashboard/template",
      },
      {
        label: "الخدمات",
        icon: "document.png",
        link: "/professionaldashboard/services",
      },
      {
        label: "المنشورات",
        icon: "rectanglepencil.png",
        link: "/professionaldashboard/publications",
      },
    ],
    finance: [
      {
        label: "الباقة",
        icon: "bills.png",
        link: "/professionaldashboard/package",
      },
      {
        label: "المحفظة",
        icon: "wallet.png",
        link: "/professionaldashboard/wallet",
      },
    ],
  };

  return (
    <div
      className={`relative flex ${
        isMobile ? "fixed top-0 right-0 h-full z-50" : ""
      } transition-all duration-300`}
    >
      <div
        className={`bg-white shadow-lg flex flex-col gap-3 p-4 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        } h-full`}
      >
        {/* Logo + Toggle */}
        <div className="flex justify-between items-center">
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
              className="w-43 pl-4"
            />
          )}
        </div>

        {/* Navigation */}
        <nav
          className={`space-y-4 text-[#005bac] text-xl pt-10 ${
            collapsed ? "text-center" : "text-right"
          }`}
        >
          {[
            {
              key: "home",
              label: "لوحة التحكم",
              icon: "home.png",
              link: "/professionaldashboard",
            },
            {
              key: "meetings",
              label: "الاجتماعات",
              icon: "telephone.png",
              link: "/professionaldashboard/conversations",
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
              link: "/professionaldashboard/business",
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
              link: "/professionaldashboard/support",
            },
            {
              key: "settings",
              label: "الإعدادت",
              icon: "settings.png",
              link: "/professionaldashboard/settings",
            },
          ].map((item) => (
            <div key={item.key} ref={(el) => (itemRefs.current[item.key] = el)}>
              {item.hasSub ? (
                <div
                  className={`flex items-center rounded-md px-2 py-2 cursor-pointer transition-all duration-200 ${
                    activeMenu === item.key
                      ? "bg-[#13498B] text-white"
                      : "hover:text-[#003f7f]"
                  }`}
                  onClick={() => handleMenuClick(item.key)}
                >
                  <img
                    src={`/watheeq/assets/img/sidebaricons/${item.icon}`}
                    className={`w-5 h-5 ${
                      collapsed ? "mx-auto" : "ml-4 mr-4"
                    } transition-all duration-300 ${
                      activeMenu === item.key ? "invert brightness-0" : "filter"
                    }`}
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
                      activeMenu === item.key
                        ? "bg-[#13498B] text-white"
                        : "hover:text-[#003f7f]"
                    }`}
                    onClick={() => handleMenuClick(item.key, item.link)}
                  >
                    <img
                      src={`/watheeq/assets/img/sidebaricons/${item.icon}`}
                      className={`w-5 h-5 ${
                        collapsed ? "mx-auto" : "ml-4 mr-4"
                      } transition-all duration-300 ${
                        activeMenu === item.key
                          ? "invert brightness-0"
                          : "filter"
                      }`}
                      alt={item.label}
                    />
                    {!collapsed && (
                      <span className="flex-1">{item.label}</span>
                    )}
                  </div>
                </Link>
              )}

              {/* Submenus */}
              {showSubmenu === item.key &&
                submenus[item.key]?.map((sub, index) =>
                  collapsed ? (
                    <div
                      className="absolute z-50 bg-white rounded shadow p-2 right-20 top-0"
                      style={{ top: `${submenuTop}px` }}
                      key={index}
                    >
                      <Link href={sub.link}>
                        <div
                          className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-100"
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
                    </div>
                  ) : (
                    <div className="mr-5 mt-2 space-y-2" key={index}>
                      <Link href={sub.link}>
                        <div
                          className="flex items-center gap-2 hover:text-[#003f7f] cursor-pointer px-2"
                          onClick={handleSubMenuClick}
                        >
                          <img
                            src={`/watheeq/assets/img/sidebaricons/${sub.icon}`}
                            className="w-4 h-4"
                            alt={sub.label}
                          />
                          <span>{sub.label}</span>
                        </div>
                      </Link>
                    </div>
                  )
                )}
            </div>
          ))}

          {/* Logout */}
          <div
            className="flex items-center gap-2 hover:text-[#003f7f] cursor-pointer px-2 py-2 rounded-md"
            onClick={() => setActiveMenu(null)}
          >
            <TbLogout
              className={`w-5 h-5 ${collapsed ? "mx-auto" : "ml-4 mr-4"}`}
            />
            {!collapsed && <span>تسجيل خروج</span>}
          </div>
        </nav>
      </div>
    </div>
  );
}
