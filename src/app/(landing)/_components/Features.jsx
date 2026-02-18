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
    <section id="features" className="py-20 scroll-mt-20 flex flex-col items-center w-full">
      <div className="w-full max-w-7xl flex flex-col px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <Reveal animation="fade-up">
            <span className="bg-[#F5E7CD] text-[#0F172A] text-xs font-medium uppercase tracking-widest px-5 h-7 flex items-center justify-center rounded-full">
              Features
            </span>
          </Reveal>
          <Reveal animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-[1.1] tracking-tight">
              Everything You Need
            </h2>
          </Reveal>
          <Reveal animation="fade-up" delay={400}>
            <p className="md:text-lg text-[#6D6D6D]">
              MyClosetX brings the future of wardrobe management to your
              fingertips
            </p>
          </Reveal>
        </div>

        {/* Feature Block 1: Digitize Your Closet (Text Left, Image Right) */}
        <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-between gap-12 lg:gap-5 py-10">
          <Reveal
            animation="fade-up"
            delay={200}
            className="flex-1 max-w-[440px] flex flex-col gap-4 pb-10"
          >
            <div className="w-14 h-14 bg-[#F5E7CD] rounded-2xl flex items-center justify-center mb-2">
              <ShirtIcon className="w-7 h-7 text-[#6D6D6D]" />
            </div>
            <h3 className="text-[28px] md:text-[34px] font-bold text-[#0F172A] leading-[1.15] tracking-tight">
              Digitize Your Closet
            </h3>
            <p className="md:text-lg text-[#6D6D6D] leading-relaxed">
              Snap a photo of any item and instantly add it to your virtual
              wardrobe. Categorize, tag, and organize with ease.
            </p>
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={400}
            className="flex-1 flex justify-center md:justify-end items-center relative md:px-0"
          >
            <Image
              src="/m2.png"
              alt="Digitize Your Closet - App Screen"
              width={493}
              height={493}
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
            className="flex-1 flex justify-center md:justify-start items-center relative"
          >
            <Image
              src="/m3.png"
              alt="Outfit Suggestion - App Screen"
              width={493}
              height={493}
              className="object-contain relative z-10"
            />
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={200}
            className="flex-1 max-w-[425px]"
          >
            <div className="w-14 h-14 bg-[#F5E7CD] rounded-2xl flex items-center justify-center mb-6">
              <OutfitIcon className="w-7 h-7 text-[#6D6D6D]" />
            </div>
            <h3 className="text-[28px] md:text-[34px] font-bold text-[#0F172A] leading-[1.15] mb-4 tracking-tight">
              Outfit Suggestion
            </h3>
            <p className="md:text-lg text-[#6D6D6D] leading-relaxed">
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
            <h3 className="text-[28px] md:text-[34px] font-bold text-[#0F172A] leading-[1.15] mb-4 tracking-tight">
              AI Analysis On Each Item
            </h3>
            <p className="md:text-lg text-[#6D6D6D] leading-relaxed">
              We scan every item in your closet to understand fit, color, and
              style. Our AI finds what works best together. So every outfit
              feels intentional and effortless.
            </p>
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={400}
            className="flex-1 flex justify-center md:justify-end items-center relative"
          >
            <Image
              src="/m4.png"
              alt="AI Analysis - App Screen"
              width={493}
              height={493}
              className="object-contain relative z-10"
            />
          </Reveal>
        </div>

        {/* Feature Block 4: Your Favorite Looks (Image Left, Text Right) */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
          <Reveal
            animation="fade-up"
            delay={400}
            className="flex-1 flex justify-center md:justify-start items-center relative"
          >
            <Image
              src="/m5.png"
              alt="Your Favorite Looks - App Screen"
              width={493}
              height={493}
              className="object-contain relative z-10"
            />
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={200}
            className="flex-1 max-w-[440px]"
          >
            <div className="w-14 h-14 bg-[#F5E7CD] rounded-2xl flex items-center justify-center mb-6">
              <SparkleIcon className="w-7 h-7 text-[#6D6D6D]" />
            </div>
            <h3 className="text-[28px] md:text-[34px] font-bold text-[#0F172A] leading-[1.15] mb-4 tracking-tight">
              Your Favorite Looks
            </h3>
            <p className="md:text-lg text-[#6D6D6D] leading-relaxed">
              Keep your best outfit combinations in one place. Revisit your
              favorite looks with one tap. Never forget what worked.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
