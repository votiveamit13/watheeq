"use client";
import React, { useState } from 'react';
import { Button } from './ui/Button';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className="bg-white mt-8 py-4 px-6 pl-10 pr-10 rounded-[2rem] flex flex-col md:flex-row justify-between text-[28px] font-omnes relative z-40"
        style={{ boxShadow: '0px 10px 15px rgba(9, 61, 125, 0.1)' }}
      >
        {/* Logo */}
        <div className="navbar-add w-[200px] mr-[90px] sm:w-auto sm:mr-0">
          <Link href="/">
            <img src="/watheeq/assets/img/logo.png" className="w-55 h-full" alt="logo" />
          </Link>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden text-secondary text-3xl absolute top-6 right-8 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-[19px]" style={{justifyContent:'space-between', width:'65%'}}>
          <ul className="flex gap-6 font-medium items-center">
            <li className="hover:text-secondary transition-all duration-300">
              <Link href="/">الرئيسية</Link>
            </li>
            <li className="hover:text-secondary transition-all duration-300">
              <Link href="/whoweare">من نحن</Link>
            </li>
            <li className="hover:text-secondary transition-all duration-300">
              <Link href="/prices">الأسعار</Link>
            </li>
            <li className="hover:text-secondary transition-all duration-300">
              <Link href="/">تواصل معنا</Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-secondary">دخول</Link>
            <Link href="/registration">
              <Button
                variant="secondary"
                className="rounded-3xl font-semibold text-xl h-12 cursor-pointer md:rounded-r-3xl md:rounded-l-3xl pl-8 pr-8 bg-[#1E88E5]"
              >
                حساب جديد
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-10 transition-all duration-300">
          <button
            className="absolute top-6 right-6 text-4xl text-gray-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>

          <ul className="flex flex-col gap-6 text-2xl font-medium items-center">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/">الرئيسية</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/whoweare">من نحن</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/prices">الأسعار</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/">تواصل معنا</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/login" className="text-secondary">دخول</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/register">
                <Button
                  variant="secondary"
                  className="rounded-3xl  cursor-pointer font-semibold text-xl h-12 pl-8 pr-8 bg-[#1E88E5]"
                >
                  حساب جديد
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
