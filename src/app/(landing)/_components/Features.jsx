import React from "react";
import Image from "next/image";
import {
  ShirtIcon,
  OutfitIcon,
  AnalysisIcon,
  SparkleIcon,
} from "@/components/icons/icons";
import { Reveal } from "@/components/ui/Reveal";

export const Features = () => {
  return (
    <section id="features" className="w-full py-20 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <Reveal animation="fade-up">
            <span className="inline-block bg-[#F5E7CD] text-[#0F172A] text-[13px] font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
              Features
            </span>
          </Reveal>
          <Reveal animation="fade-up" delay={200}>
            <h2 className="text-[36px] md:text-[52px] font-[800] text-[#0F172A] leading-[1.1] tracking-tight mb-4">
              Everything You Need
            </h2>
          </Reveal>
          <Reveal animation="fade-up" delay={400}>
            <p className="text-[16px] md:text-[18px] text-[#8C7B73] max-w-[520px]">
              MyClosetX brings the future of wardrobe management to your
              fingertips
            </p>
          </Reveal>
        </div>

        {/* Feature Block 1: Digitize Your Closet (Text Left, Image Right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 mb-12">
          <Reveal
            animation="fade-up"
            delay={200}
            className="flex-1 max-w-[480px]"
          >
            <div className="w-14 h-14 bg-[#F5E7CD] rounded-2xl flex items-center justify-center mb-6">
              <ShirtIcon className="w-7 h-7 text-[#6D6D6D]" />
            </div>
            <h3 className="text-[28px] md:text-[34px] font-[800] text-[#0F172A] leading-[1.15] mb-4 tracking-tight">
              Digitize Your Closet
            </h3>
            <p className="text-[16px] md:text-[17px] text-[#8C7B73] leading-relaxed">
              Snap a photo of any item and instantly add it to your virtual
              wardrobe. Categorize, tag, and organize with ease.
            </p>
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={400}
            className="flex-1 flex justify-center md:justify-end items-center relative pl-11 pr-1 md:px-0"
          >
            <Image
              src="/mobile1.png"
              alt="Digitize Your Closet - App Screen"
              width={380}
              height={772}
              className="object-contain relative z-10"
              priority
            />
          </Reveal>
        </div>

        {/* Feature Block 2: Outfit Suggestion (Image Left, Text Right) */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24 mb-12">
          <Reveal
            animation="fade-up"
            delay={400}
            className="flex-1 flex justify-center md:justify-start items-center relative pl-11 pr-1 md:px-0"
          >
            <Image
              src="/mobile2.png"
              alt="Outfit Suggestion - App Screen"
              width={380}
              height={772}
              className="object-contain relative z-10"
            />
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={200}
            className="flex-1 max-w-[480px]"
          >
            <div className="w-14 h-14 bg-[#F5E7CD] rounded-2xl flex items-center justify-center mb-6">
              <OutfitIcon className="w-7 h-7 text-[#6D6D6D]" />
            </div>
            <h3 className="text-[28px] md:text-[34px] font-[800] text-[#0F172A] leading-[1.15] mb-4 tracking-tight">
              Outfit Suggestion
            </h3>
            <p className="text-[16px] md:text-[17px] text-[#8C7B73] leading-relaxed">
              MyClosetX combines your wardrobe items with your style preferences
              to generate personalized outfit combinations—ready to wear.
            </p>
          </Reveal>
        </div>

        {/* Feature Block 3: AI Analysis On Each Item (Text Left, Image Right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 mb-12">
          <Reveal
            animation="fade-up"
            delay={200}
            className="flex-1 max-w-[480px]"
          >
            <div className="w-14 h-14 bg-[#F5E7CD] rounded-2xl flex items-center justify-center mb-6">
              <AnalysisIcon className="w-7 h-7 text-[#6D6D6D]" />
            </div>
            <h3 className="text-[28px] md:text-[34px] font-[800] text-[#0F172A] leading-[1.15] mb-4 tracking-tight">
              AI Analysis On Each Item
            </h3>
            <p className="text-[16px] md:text-[17px] text-[#8C7B73] leading-relaxed">
              We scan every item in your closet to understand fit, color, and
              style. Our AI finds what works best together. So every outfit
              feels intentional and effortless.
            </p>
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={400}
            className="flex-1 flex justify-center md:justify-end items-center relative pl-11 pr-1 md:px-0"
          >
            <Image
              src="/mobile3.png"
              alt="AI Analysis - App Screen"
              width={380}
              height={772}
              className="object-contain relative z-10"
            />
          </Reveal>
        </div>

        {/* Feature Block 4: Your Favorite Looks (Image Left, Text Right) */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
          <Reveal
            animation="fade-up"
            delay={400}
            className="flex-1 flex justify-center md:justify-start items-center relative pl-11 pr-1 md:px-0"
          >
            <Image
              src="/mobile4.png"
              alt="Your Favorite Looks - App Screen"
              width={380}
              height={772}
              className="object-contain relative z-10"
            />
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={200}
            className="flex-1 max-w-[480px]"
          >
            <div className="w-14 h-14 bg-[#F5E7CD] rounded-2xl flex items-center justify-center mb-6">
              <SparkleIcon className="w-7 h-7 text-[#6D6D6D]" />
            </div>
            <h3 className="text-[28px] md:text-[34px] font-[800] text-[#0F172A] leading-[1.15] mb-4 tracking-tight">
              Your Favorite Looks
            </h3>
            <p className="text-[16px] md:text-[17px] text-[#8C7B73] leading-relaxed">
              Keep your best outfit combinations in one place. Revisit your
              favorite looks with one tap. Never forget what worked.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
