"use client";

import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="w-full bg-brand text-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo & Title */}
        <div className="text-base font-heading font-medium tracking-wide flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={35} height={35} priority />
          <Link href="/" className="hover:text-secondary text-sm sm:text-base">
            CivicDataSpace
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-xs font-medium justify-center items-center">
          <Link href="#" className="hover:text-secondary">
            <IoSearchOutline className="text-base" />
          </Link>
          <Link href="/all-data" className="hover:text-secondary">
            ALL DATA
          </Link>
          <Link href="#" className="hover:text-secondary">
            SECTORS
          </Link>
          <Link href="#" className="hover:text-secondary">
            USE CASES
          </Link>
          <Link href="#" className="hover:text-secondary">
            PUBLISHERS
          </Link>
          <Link href="#" className="hover:text-secondary">
            ABOUT US
          </Link>
          <button className="bg-secondary text-black py-2 px-4 rounded font-semibold hover:bg-third">
            LOGIN/SIGNUP
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {isMobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4  space-y-2 bg-white text-sm font-medium text-black">
          <Link
            href="/all-data"
            className="block py-1 hover:text-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ALL DATA
          </Link>
          <Link
            href="#"
            className="block py-1 hover:text-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SECTORS
          </Link>
          <Link
            href="#"
            className="block py-1  hover:text-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            USE CASES
          </Link>
          <Link
            href="#"
            className="block py-1 hover:text-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            PUBLISHERS
          </Link>
          <Link
            href="#"
            className="block py-1 hover:text-secondary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT US
          </Link>
          <button
            className="w-40 bg-secondary text-black py-2 px-4 rounded font-semibold hover:bg-third"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LOGIN/SIGNUP
          </button>
        </div>
      )}
    </header>
  );
}
