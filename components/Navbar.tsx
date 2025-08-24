"use client";
import React from "react";
import Logo from "./ui/Logo";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { NavbarSheet } from "./NavbarSheet";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="flex items-center justify-between pt-6 px-4 md:px-8">
      <Logo />

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 font-sora-regular">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors duration-300 ${
              pathname === link.href
                ? "text-indigo-600 font-bold"
                : "text-black dark:text-white hover:text-indigo-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Resume Download */}
      <div className="hidden md:flex">
        <a
          href="/Aytac_Balayeva_CV.pdf"
          download
          aria-label="Download Resume"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <span>Resume</span>
          <FiDownload />
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex">
        <NavbarSheet />
      </div>
    </nav>
  );
};

export default Navbar;
