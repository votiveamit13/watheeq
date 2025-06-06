"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/Button';
import Link from 'next/link';

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white mt-8 py-5 px-10 rounded-[3rem] flex flex-col md:flex-row justify-between text-[28px] font-omnes"
      style={{ boxShadow: '0px 10px 15px rgba(9, 61, 125, 0.1)' }}
    >
      {/* logo */}
      <div className="">
        <img src="/assets/img/logo.png" className="w-full h-full" alt="logo" />
      </div>

      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden text-secondary text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation links */}
      <ul
        className={`flex flex-col text-xl xl:text-3xl md:flex-row gap-3 xl:gap-6 font-medium items-center ${
          isMenuOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <li className="hover:text-secondary transition-all duration-300"><Link href="/">{t('home')}</Link></li>
        <li className="hover:text-secondary transition-all duration-300"><Link href="/">{t('us')}</Link></li>
        <li className="hover:text-secondary transition-all duration-300"><Link href="/">{t('target-professions')}</Link></li>
        <li className="hover:text-secondary transition-all duration-300"><Link href="/">{t('prices')}</Link></li>
      </ul>

      {/* Buttons */}
      <div
        className={`btns flex flex-col md:flex-row items-center gap-3 ${
          isMenuOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <Link href="/login" className="text-secondary text-2xl">
          {t('login')}
        </Link>
        <Link href="/register">
          <Button
            variant={'secondary'}
            className="rounded-3xl font-semibold text-xl h-12 cursor-pointer"
          >
            {t('register')}
          </Button>
        </Link>
      </div>
    </nav>
  );
}

// export default function NavbarPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       {/* Other page content can go here */}
//     </div>
//   );
// }
