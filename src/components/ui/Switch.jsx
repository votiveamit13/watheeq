"use client";
import { useState } from "react";

export function Switch({ onToggle }) {
  const [active, setActive] = useState("monthly");

  const handleToggle = (value) => {
    setActive(value);
    if (onToggle) {
      onToggle(value); // Call parent callback
    }
  };

  return (
    <div className="flex items-center justify-center shadow-custom-blue">
      <div className="bg-[#F6F9FC] rounded-full p-1 flex">
        <button
          onClick={() => handleToggle("monthly")}
          className={`px-6 py-2 rounded-full transition-colors duration-300 ${
            active === "monthly" ? "bg-primary text-white" : "text-primary"
          }`}
        >
          شهري
        </button>
        <button
          onClick={() => handleToggle("yearly")}
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
