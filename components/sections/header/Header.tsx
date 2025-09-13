"use client";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import React from "react";
import { Menu, MessageCircle, Phone, Search, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "@/constans";
import SearchPage from "./Search";
import { usePathname } from "next/navigation";

const Header = () => {
  const socialLinks = [
    { href: "#", icon: <FaFacebook size={16} /> },
    { href: "#", icon: <FaInstagram size={16} /> },
    { href: "#", icon: <FaTwitter size={16} /> },
  ];

  const pathname = usePathname();

  return (
    <header className="bg-black text-white">
      {/**Top Bar */}
      <div className="flex container mx-auto h-16 justify-center md:justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center gap-5">
          <div className="flex gap-3 items-center">
            <div className="bg-white p-2 rounded-full">
              <MessageCircle size={12} className="text-orange-500" />
            </div>
            info@travel.com
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <Phone size={12} className="text-orange-500" />
            </div>
            050 505 5005
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-orange-500"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      {/** Navigation Bar*/}

      <div className="bg-white h-28 text-black shadow flex items-center">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Image
            src={"/logo.png"}
            alt="travel"
            width={210}
            height={50}
            className="w-36 lg:w-52 h-auto"
          />

          <nav className="hidden lg:flex space-x-12  text-lg font-semibold ml-auto">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 ml-30">
            <SearchPage />

            <Link href="/login" className="p-3  bg-sky-400 cursor-pointer text-white rounded-full  ">

              <User />
            </Link>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
