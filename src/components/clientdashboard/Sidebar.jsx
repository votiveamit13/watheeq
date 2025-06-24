"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar({ collapsed, setCollapsed }) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("");

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
    } else if (pathname === "/clientdashboard") {
      setActiveMenu("home");
    }
  }, [pathname]);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleMenuClick = (key) => {
    setActiveMenu(key);
  };

  const menuItems = [
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
      label: "طلباتي",
      icon: "briefcase.png",
      link: "/clientdashboard/request",
    },
    {
      key: "business",
      label: "عروض السعر",
      icon: "price.png",
      link: "/clientdashboard/priceoffers",
    },
    {
      key: "finance",
      label: "الفواتير",
      icon: "clientbills.png",
      link: "/clientdashboard/bills",
    },
    {
      key: "support",
      label: "الدعم الفني",
      icon: "chatsetting.png",
      link: "/clientdashboard",
    },
    {
      key: "settings",
      label: "الإعدادت",
      icon: "settings.png",
      link: "/clientdashboard",
    },
  ];

  return (
    <div className="relative flex" style={{ height: "150vh" }}>
      <div></div>
      <div
        className={`bg-white shadow-lg flex flex-col gap-3 p-4 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex justify-between items-center">
          <img
            src={`/watheeq/assets/img/${
              collapsed ? "favicon" : "sidebaricons/toggle"
            }.png`}
            alt="Toggle"
            className="w-10 h-10 cursor-pointer"
            onClick={toggleSidebar}
            style={{ width: "39px", height: "40px", marginTop: "4px" }}
          />
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
          {menuItems.map((item) => (
            <div key={item.key}>
              <Link href={item.link}>
                <div
                  className={`flex items-center rounded-md px-2 py-2 cursor-pointer transition-all duration-200 ${
                    activeMenu === item.key
                      ? "bg-[#005bac] text-white"
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
                  {!collapsed && <span className="flex-1">{item.label}</span>}
                </div>
              </Link>
            </div>
          ))}

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
