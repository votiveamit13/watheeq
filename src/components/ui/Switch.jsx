"use client";
import { useState } from "react";

export function Switch() {
  const [active, setActive] = useState("monthly");

  return (
    <div className="flex items-center justify-center shadow-custom-blue">
      <div className="bg-[#F6F9FC] rounded-full p-1 flex">
        <button
          onClick={() => setActive("monthly")}
          className={`px-6 py-2 rounded-full transition-colors duration-300 ${
            active === "monthly" ? "bg-primary text-white" : "text-primary"
          }`}
        >
          شهري
        </button>
        <button
          onClick={() => setActive("yearly")}
          className={`px-6 py-2 rounded-full transition-colors duration-300 ${
            active === "yearly" ? "bg-primary text-white" : "text-primary"
          }`}
        >
          سنوي
        </button>
      </div>
    </div>
  );
}
