"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#fbeaec]/90 backdrop-blur-md shadow-lg text-[#5e0e15]" : "bg-[#921e27] text-white"}`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="transition-transform duration-300 hover:scale-105" onClick={closeMenu}>
          <Image src="/image/Logo.png" alt="UL.CO Logo" width={40} height={40} priority className="h-auto w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["Home", "Portfolio", "About"].map((label, i) => (
            <Link key={label} href={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`} className="relative group font-light transition-colors duration-300 hover:text-[#fbeaec]">
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fbeaec] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Link href="/contact" className="bg-[#921e27] text-white font-medium px-6 py-3 rounded-full hover:bg-[#7a1a21] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-[#921e27]/50">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#fbeaec]/20 transition-all duration-300" onClick={toggleMenu} aria-label="Toggle menu">
          <div className="w-6 h-6 relative flex flex-col justify-center items-center">
            <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`} />
          </div>
        </button>

        {/* Mobile Menu Panel */}
        <div className={`md:hidden fixed inset-0 transition-all duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <div className="absolute inset-0 bg-[#921e27]"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
            {["Home", "Portfolio", "About", "Contact"].map((label, i) => (
              <Link
                key={label}
                href={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                className={`text-4xl font-light text-white hover:text-[#fbeaec] transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
                onClick={closeMenu}>
                {label}
              </Link>
            ))}

            {/* Social Links */}
            <div className={`flex space-x-6 mt-8 transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: "500ms" }}>
              {["instagram", "twitter", "linkedin"].map((platform, i) => (
                <a key={platform} href="#" className="text-white hover:text-[#fbeaec] transition-colors duration-300" onClick={closeMenu}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* SVG paths tetap sama */}
                    <path d="..." />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
