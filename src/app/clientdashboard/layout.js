"use client";
import { useState } from "react";
import Navbar from "@/components/clientdashboard/Navbar";
import "./../globals.css";
import Sidebar from "@/components/clientdashboard/Sidebar";
export default function ClientLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <html lang="ar" dir="rtl">
            <body>
                <section className="flex h-screen bg-gray-50">
                    <div className={`${collapsed ? "w-20" : "w-64"} transition-all duration-300`}>
                        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
                    </div>
                    <div className="flex-1 flex flex-col p-5">
                        <Navbar />
                        {children}
                    </div>
                </section>
            </body>
        </html>
    );
}