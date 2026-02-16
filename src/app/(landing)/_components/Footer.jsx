import React from "react";
import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Reveal } from "@/components/ui/Reveal";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#FAF7F5]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <Reveal animation="fade-up">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-[#E5DDD5]">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <Logo className="h-12 w-auto" />
            </div>

            {/* Links */}
            <nav className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-[15px] text-[#8C7B73] hover:text-[#0F172A] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[15px] text-[#8C7B73] hover:text-[#0F172A] transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Bottom Row */}
          <div className="py-6 text-center">
            <p className="text-[13px] text-[#A8A29E]">
              &copy; 2026 MyClosetX. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
