"use client";
import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import "./../globals.css";
import Sidebar from "@/components/admindashboard/Sidebar";
export default function ClientLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <html lang="ar" dir="rtl">
            <body className="overflow-x-hidden">
                <section className="flex h-screen bg-gray-50 custom-scrollbar">
                    <div
                        className={`z-50 ${collapsed ? "w-20" : "lg:w-64 w:100"
                            } transition-all duration-300`}
                    >
                        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
                    </div>
                    <div className="flex-1 flex flex-col custom-scrollbar lg:p-5 p-2 overflow-x-hidden">
                        <Navbar wish={"أهلا بك"} location={"لوحة تحكم وثيق"} url={null} username={"محمد سعيد"} usertype={"أدمن"} profileimage={"/watheeq/assets/img/admin.png"} profilelink={"/admindashboard/profile"} />
                        {children}
                    </div>
                </section>
            </body>
        </html>
    );
}