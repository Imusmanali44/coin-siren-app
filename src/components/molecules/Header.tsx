'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/images/logo.png';
import Hamburger from '../../assets/images/hamburger.png';
import DropDownIcon from '../../assets/images/dropdown-icon.svg';

import Button from '../atoms/Button';

const headerLinks = [
  {
    href: '/',
    label: '채용',
    dropdown: [
      { href: '/', label: '해외 개발자 원격 용' },
      { href: '/', label: '외국인 원격 채용 (비개발 직군)' },
      { href: '/', label: '해외 개발자 원격 용 (비개발)' },
    ],
  },
  { href: '/', label: '해외 개발자 활용 서비스' },
];

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-3 ">
      <div className="container flex items-center justify-between px-5">
        <Image className="cursor-pointer" src={Logo} alt="Arrow Right" priority />

        <nav className="hidden lg:flex space-x-6">
          {headerLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.dropdown ? (
                <>
                  <Button
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    className="text-white text-base font-black focus:outline-none flex items-center gap-2">
                    <span>{link.label}</span>
                    <Image src={DropDownIcon} alt="Icon" priority />
                  </Button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-lg py-2 z-10">
                      {link.dropdown.map((dropdownLink, idx) => (
                        <li key={idx}>
                          <Link
                            href={dropdownLink.href}
                            className="block px-4 py-2 text-sm font-medium text-highlightText hover:bg-gray-100 border-b">
                            {dropdownLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={link.href} className="text-white text-base font-black">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <Button className="hidden lg:block bg-white rounded-lg px-5 py-2 max-h-9 text-base text-[#4A77FF] font-black">
          문의하기
        </Button>

        <Button className="lg:hidden focus:outline-none" onClick={() => setDrawerOpen(!isDrawerOpen)}>
          <div className="flex flex-col">
            <Image src={Hamburger} alt="Hamburger" />
            <Image src={Hamburger} alt="Hamburger" />
            <Image src={Hamburger} alt="Hamburger" />
          </div>
        </Button>

        {isDrawerOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setDrawerOpen(false)}></div>
        )}
        <div
          className={`fixed inset-y-0 right-0 bg-white p-5 w-64 shadow-lg transform ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform z-30`}>
          <nav>
            <ul className="space-y-4">
              {headerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-base font-black text-[#4A77FF]"
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}>
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {link.dropdown.map((dropdownLink, idx) => (
                        <li key={idx}>
                          <Link
                            className="text-base font-black text-[#4A77FF]"
                            href={dropdownLink.href}
                            onClick={() => setDrawerOpen(false)}>
                            {dropdownLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
