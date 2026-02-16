import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AppleLogo, GooglePlayLogo } from "@/components/icons/icons";
import { Reveal } from "@/components/ui/Reveal";

export const Hero = () => {
  return (
    <section className="w-full relative py-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-32">
        {/* Text Content */}
        <div className="flex-1 max-w-[580px] z-10">
          <Reveal animation="fade-up" delay={0}>
            <h1 className="text-[48px] md:text-[72px] font-[800] text-[#0F172A] leading-[1.1] mb-6 tracking-tighter">
              Your Wardrobe, <br />
              Reimagined
            </h1>
          </Reveal>
          <Reveal animation="fade-up" delay={200}>
            <p className="text-[18px] md:text-[20px] text-[#8C7B73] leading-relaxed mb-10 max-w-[480px]">
              Digitize your closet, plan outfits with AI, and discover your
              personal style — all in one beautifully designed app.
            </p>
          </Reveal>

          <Reveal animation="fade-up" delay={400}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2"
              >
                <AppleLogo className="w-10 h-10 text-[#0F172A]" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-semibold text-[#64748B] mb-0.5">
                    Available on the
                  </span>
                  <span className="text-[17px] font-bold text-[#0F172A]">
                    App Store
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2"
              >
                <GooglePlayLogo className="w-10 h-10 text-[#0F172A]" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-semibold text-[#64748B] mb-0.5">
                    Get it on
                  </span>
                  <span className="text-[17px] font-bold text-[#0F172A]">
                    Google Play
                  </span>
                </div>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Hero Image Section - Plain image with right alignment */}
        <div className="flex-1 flex justify-center md:justify-end items-center overflow-hidden">
          <Reveal
            animation="scale-up"
            delay={400}
            className="w-full flex justify-center md:justify-end pl-11 pr-1 md:px-0"
          >
            <Image
              src="/hero-mobile.png"
              alt="MyClosetX App Interface"
              width={420}
              height={853}
              className="object-contain"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
