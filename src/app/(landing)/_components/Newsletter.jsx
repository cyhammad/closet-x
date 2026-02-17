import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export const Newsletter = () => {
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
          <span className="inline-block bg-[#efe6da] text-[#5e5448] text-[12px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
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
      </div>
    </section>
  );
};
