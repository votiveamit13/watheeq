"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar({ collapsed, setCollapsed }) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("");

useEffect(() => {
  const sortedItems = [...menuItems].sort(
    (a, b) => b.link.length - a.link.length
  );

  const matched = sortedItems.find((item) =>
    pathname.startsWith(item.link)
  );

  setActiveMenu(matched?.key || "");
}, [pathname]);


  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    {
      key: "home",
      label: "لوحة التحكم",
      icon: "home.png",
      link: "/admindashboard",
    },
    {
      key: "professionals",
      label: "المهنيين",
      icon: "professionals.png",
      link: "/admindashboard/professionals",
    },
    {
      key: "clients",
      label: "العملاء",
      icon: "clients.png",
      link: "/admindashboard/clients",
    },
    {
      key: "subscriptions",
      label: "الاشتراكات",
      icon: "subscriptions.png",
      link: "/admindashboard/subscriptions",
    },
    {
      key: "support",
      label: "الدعم الفني",
      icon: "chatsetting.png",
      link: "/admindashboard/support",
    },
    {
      key: "reports",
      label: "التقارير",
      icon: "reports.png",
      link: "/admindashboard/reports",
    },
    {
      key: "packages",
      label: "الباقات",
      icon: "bills.png",
      link: "/admindashboard/packages",
    },
    {
      key: "payments",
      label: "المدفوعات",
      icon: "clientbills.png",
      link: "/admindashboard/payments",
    },
    {
      key: "portfolio",
      label: "إدارة المحافظ",
      icon: "wallet.png",
      link: "/admindashboard/portfoliomanagement",
    },
    {
      key: "reportrequests",
      label: "طلبات البلاغات",
      icon: "reportrequest.png",
      link: "/admindashboard/reportrequests",
    },
    {
      key: "managers",
      label: "المدراء",
      icon: "managers.png",
      link: "/admindashboard/managers",
    },
    {
      key: "settings",
      label: "الإعدادت",
      icon: "settings.png",
      link: "/admindashboard/settings",
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
                  onClick={() => setActiveMenu(item.key)}
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
