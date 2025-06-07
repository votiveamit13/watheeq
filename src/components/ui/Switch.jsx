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
    <div className="flex items-center justify-center shadow-custom-blue"  style={{backgroundColor:'#F8FAFC'}}>
      <div className="bg-[#F6F9FC] rounded-full p-1 flex" style={{padding:'20px',borderRadius:'15px' }}>
        <button
          onClick={() => handleToggle("monthly")}
          className={`px-6 py-2 rounded-full w-40 cursor-pointer transition-colors text-2xl duration-300 ${
            active === "monthly" ? "bg-primary text-white" : "text-primary"
          }`}
        >
          شهري
        </button>
        <button
          onClick={() => handleToggle("yearly")}
          className={`px-6 py-2 rounded-full w-40 cursor-pointer transition-colors text-2xl duration-300 ${
            active === "yearly" ? "bg-primary text-white" : "text-primary"
          }`} style={{paddingLeft:'20px',paddingRight:'20px' }}
        >
          سنوي
        </button>
      </div>
    </div>
  );
}
