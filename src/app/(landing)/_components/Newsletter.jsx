"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { saveToWaitlist } from "@/lib/firebase/waitlist";

export const Newsletter = () => {
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
    <section
      className="w-full py-20 md:py-32 flex flex-col items-center justify-center text-center px-4"
      style={{
        background:
          "linear-gradient(108.65deg, #FFFFFF 0%, #FAF7F5 30%, #F4EDE6 65%, #F5E7E0 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <Reveal animation="fade-up">
          <span className="flex items-center justify-center bg-[#efe6da] text-[#5e5448] text-xs font-bold uppercase tracking-widest px-4 h-7 rounded-full mb-6">
            Early Access
          </span>
        </Reveal>

        <Reveal animation="fade-up" delay={200}>
          <h2 className="text-[36px] md:text-[52px] font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
            Be the First to Know
          </h2>
        </Reveal>

        <Reveal animation="fade-up" delay={400}>
          <p className="text-[16px] md:text-[18px] text-[#8C7B73] max-w-[480px] mb-10 leading-relaxed">
            Join our waitlist and get exclusive early access when MyClosetX
            launches. No spam, just style.
          </p>
        </Reveal>

        <Reveal
          animation="fade-up"
          delay={600}
          className="w-full flex flex-col items-center"
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
            <p className="text-[13px] text-amber-600 mt-1">
              This email is already on the waitlist!
            </p>
          )}
          {status === "error" && (
            <p className="text-[13px] text-red-500 mt-1">
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
    </section>
  );
};
