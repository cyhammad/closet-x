"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is MyClosetX?",
      answer:
        "MyClosetX is an AI-powered wardrobe and outfit planning app that helps you organize your clothes, discover new outfit combinations, and dress confidently every day using what you already own.",
    },
    {
      question: "What subscription options do we have in MyClosetX",
      answer:
        "MyClosetX has a subscription model offering monthly and yearly subscriptions, so you can choose the one you prefer.",
    },
    {
      question: "Which platforms will it support?",
      answer:
        "MyClosetX will be available on iOS and Android, and user's can download it from the App Store and the Google Play Store",
    },
    {
      question: "How can I upload my items in the app",
      answer:
        "Scan or upload any outfit piece from your wardrobe or your camera roll. Our AI detects the color, item type, and best season to wear it, and gives you personalized insights. Save it instantly into your built-in digital wardrobe.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes. We use industry-standard encryption and privacy practices to keep your wardrobe data secure. Your photos and personal information are never shared without your permission.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="flex flex-col items-center text-center mb-16 px-4">
        <Reveal animation="fade-up">
          <span className="inline-block bg-[#F5E7CD] text-[#0F172A] text-[13px] font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            FAQS
          </span>
        </Reveal>
        <Reveal animation="fade-up" delay={200}>
          <h2 className="text-[36px] md:text-[52px] font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-4">
            Got Questions?
          </h2>
        </Reveal>
        <Reveal animation="fade-up" delay={400}>
          <p className="text-[16px] md:text-[18px] text-[#8C7B73] max-w-[520px]">
            We&apos;ve got answers. Here are the most commonly asked questions.
          </p>
        </Reveal>
      </div>

      <div className="max-w-3xl mx-auto px-6 flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-[#FAF7F5] border border-[#F3E6D5] rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left group"
                >
                  <span className="text-[16px] md:text-[16px] font-medium text-[#2C2421]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#2C2421]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#2C2421] group-hover:text-[#8C7B73] transition-colors" />
                  )}
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-[15px] text-[#535353] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
