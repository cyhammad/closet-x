"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "FAQs", href: "#faq" },
  ];

  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);

      if (window.lenis) {
        window.lenis.scrollTo(elem, {
          offset: -80, // Account for fixed header
          duration: 1.5,
        });
      } else {
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-[#FAF7F5]/80 backdrop-blur-[6px] h-[80px] border-b border-[#E8E0D9]">
        <div className="w-full max-w-7xl px-6 md:px-10 lg:px-20 h-full">
          <div className="w-full h-full flex items-center justify-between relative">
            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center gap-[4px] relative group h-[40px] z-[60]"
              onClick={() => setIsOpen(false)}
            >
              <Logo className="w-[67px] h-[40px] text-[#0F172A]" />
            </Link>

            {/* Desktop Navigation & CTA */}
            <div className="hidden md:flex items-center gap-[40px]">
              <nav className="flex items-center gap-[40px]">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="font-normal text-[16px] text-[#8C7B73] hover:text-[#0F172A] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Link
                href="#newsletter"
                onClick={(e) => handleScroll(e, "#newsletter")}
                className="px-8 py-3 bg-[#F5E7CD] rounded-full flex items-center justify-center text-[#0F172A] font-medium text-[16px] hover:bg-[#F3E6D5] transition-all active:scale-95"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Hamburger Icon */}
            <button
              className="md:hidden z-[60] p-2 text-[#0F172A] transition-colors active:bg-[#F3E6D5] rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay / Side Sheet */}
      {/* Placed outside the header to avoid backdrop-filter clipping/containing block issues */}
      <div
        className={`fixed inset-0 bg-[#0F172A]/20 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white z-[70] md:hidden shadow-2xl transition-transform duration-300 ease-out border-l border-[#E5DDD5] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-[100px] px-8 flex flex-col gap-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[20px] font-medium text-[#0F172A] border-b border-[#E5DDD5] pb-4"
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="#newsletter"
            className="mt-4 w-full h-14 bg-[#F5E7CD] rounded-2xl flex items-center justify-center text-[#0F172A] font-semibold text-[18px] hover:bg-[#F3E6D5] transition-all active:scale-[0.98]"
            onClick={(e) => {
              handleScroll(e, "#newsletter");
              setIsOpen(false);
            }}
          >
            Join Now
          </Link>
        </div>
      </div>
    </>
  );
};
