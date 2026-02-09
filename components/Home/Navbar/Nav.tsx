"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { NavLinks } from "@/constant/constant";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    // If you later want to close mobile menu or track active section,
    // this function is ready
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[12vh] z-[10000] transition-all duration-200 ${
        navBg ? "bg-[#0f142ed9] shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            Vinod
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={handleMenuItemClick}
              scroll={true}
              className="text-base text-white font-medium hover:text-cyan-300 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/VinodSingh07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <SiGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/vinod-singh-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <SiLinkedin size={24} />
            </a>
          </div>

          {/* CV Button */}
          <a
            href="https://drive.google.com/file/d/1k4EWGyPe0IDe2Kx0ot7IHxPrxf1wkDKE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 text-sm rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
              <BiDownload className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </a>

          {/* Mobile Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
