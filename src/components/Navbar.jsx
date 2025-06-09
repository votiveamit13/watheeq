"use client";
import React, { useState } from 'react';
import { Button } from './ui/Button';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white mt-8 py-5 px-10 rounded-[3rem] flex flex-col md:flex-row justify-between text-[28px] font-omnes"
      style={{ boxShadow: '0px 10px 15px rgba(9, 61, 125, 0.1)' }}
    >
<div className="navbar-add w-[200px] mr-[90px] sm:w-auto sm:mr-0">
<Link href="/"><img src="/watheeq/assets/img/logo.png" className="w-full h-full" alt="logo" /></Link>
      </div>
      <button
  className="md:hidden text-secondary text-2xl float-right w-[5%] mt-[-50px] pb-[25px] text-[28px] sm:text-2xl"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
style={{marginRight:'-15px'}} >
  ☰
</button>


      <ul
        className={`flex flex-col text-xl xl:text-1xl md:flex-row gap-3 xl:gap-6 font-medium items-center ${
          isMenuOpen ? 'block' : 'hidden md:flex'
        }`} style={{fontSize:'19px'}}
      >
        <li className="hover:text-secondary transition-all duration-300"><Link href="/">الرئيسية {/* Home */}</Link></li>
        <li className="hover:text-secondary transition-all duration-300"><Link href="/">من نحن {/* Whoe We Are */}</Link></li>
        <li className="hover:text-secondary transition-all duration-300"><Link href="/">الأسعار {/* Prices */}</Link></li>
        <li className="hover:text-secondary transition-all duration-300"><Link href="/">تواصل معنا {/* Contact Us*/}</Link></li>
      </ul>


      <div
        className={`btns flex flex-col md:flex-row items-center gap-3 ${
          isMenuOpen ? 'block' : 'hidden md:flex'
        }`} style={{fontSize:'19px'}}
      >
        <Link href="/login" className="text-secondary" style={{fontSize:'19px'}}>
          دخول {/*Login */}
        </Link>
        <Link href="/register">
          <Button
            variant={'secondary'}
            className="rounded-3xl font-semibold text-xl h-12 cursor-pointer md:rounded-r-3xl md:rounded-l-3xl pl-8 pr-8 bg-[#1E88E5]"
          >
            حساب جديد {/*Register*/}
          </Button>
        </Link>
      </div>
    </nav>
  );
}
