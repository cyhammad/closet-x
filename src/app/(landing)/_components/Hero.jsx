"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { saveToWaitlist } from "@/lib/firebase/waitlist";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | duplicate | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const result = await saveToWaitlist(email);
      setStatus(result.alreadyExists ? "duplicate" : "success");
      if (!result.alreadyExists) setEmail("");
    } catch (err) {
      console.error("Waitlist error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="flex flex-col w-full py-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-5">
        {/* Text Content */}
        <div className="flex-1 max-w-[580px] z-10">
          <Reveal animation="fade-up" delay={0}>
            <h1 className="text-[48px] md:text-[72px] font-extrabold text-[#0F172A] leading-[1.1] mb-6">
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

          <Reveal
            animation="fade-up"
            delay={600}
            className="w-full flex flex-col"
          >
            {status === "success" ? (
              <div className="flex items-center gap-3 text-[#5e5448] bg-[#efe6da] rounded-full px-6 py-4 max-w-[480px]">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600" />
                <span className="text-[15px] font-medium">
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-[480px] flex flex-col md:flex-row gap-4 mb-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-white border-none rounded-full px-6 py-4 text-[16px] text-[#0F172A] placeholder:text-[#A8A29E] outline-none focus:ring-2 focus:ring-[#F5E7CD]/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#F3E6D5] hover:bg-[#ebdcc7] text-[#0F172A] font-bold text-[16px] px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Join <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {status === "duplicate" && (
              <p className="text-[13px] text-amber-600 mt-1 ml-2">
                This email is already on the waitlist!
              </p>
            )}
            {status === "error" && (
              <p className="text-[13px] text-red-500 mt-1 ml-2">
                Something went wrong. Please try again.
              </p>
            )}
            {status !== "success" && (
              <p className="text-[12px] text-[#A8A29E] mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            )}
          </Reveal>
        </div>

        {/* Hero Image Section */}
        <div className="flex-1 flex justify-center md:justify-end items-center overflow-hidden">
          <Reveal
            animation="scale-up"
            delay={400}
            className="w-full flex justify-center md:justify-end"
          >
            <Image
              src="/m1.png"
              alt="MyClosetX App Interface"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
