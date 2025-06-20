"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { HiChevronDown, HiOutlineUser } from "react-icons/hi2";

export default function Navbar({wish, location, url, username, usertype, profileimage, profilelink}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center bg-white rounded-3xl px-6 py-3 shadow-sm w-full">
      <div className="text-right">
        <h3 className="text-[#003f7f] text-lg font-bold">{wish}</h3>
        <div className="flex items-center">
        <span className="ml-1">{location}</span>
        <a
          href="https://watheeq.com/u/username"
          className="text-sm text-[#5d7ea1] flex items-center justify-end"
        >
          <span className="mr-1">{url}</span>
          {url === null ? "" :
          <img
            src="/watheeq/assets/img/clientdnavicon.png"
            alt="QR"
            className="w-4 h-4 mr-2"
          />
          }
        </a>
        </div>
      </div>

      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center bg-white px-3 py-2 rounded-xl shadow-md gap-2 cursor-pointer">
          <div className="relative bg-[#FFFAF1] rounded-full">
            <img
              src="/watheeq/assets/img/bell.png"
              alt="bell"
              className="w-5 h-5 m-3"
            />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          <div
            className="flex text-right items-center gap-2"
            onClick={toggleDropdown}
          >
            <img
              src={profileimage}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="text-[#003f7f] font-semibold text-sm">{username}</p>
              <p className="text-gray-400 text-xs">{usertype}</p>
            </div>
            <div>
              <HiChevronDown className="text-[#003f7f]" />
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-13 w-35 bg-[#E7EDF3] rounded-br-lg rounded-bl-lg shadow-lg text-right z-50">
            <Link href={profilelink}>
              <div className="block px-4 py-4 text-[#003f7f] hover:bg-[#f0f8ff] font-medium flex items-center justify-end gap-2">
                <HiOutlineUser />
                <span className="text-[13px]">الملف الشخصي</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
