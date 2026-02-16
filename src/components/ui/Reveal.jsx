"use client";

import React, { useRef, useEffect } from "react";

/**
 * Reveal Component
 * Applies scroll-triggered animations using CSS classes and IntersectionObserver.
 * Uses GPU-accelerated transforms (translate3d, scale3d) defined in globals.css.
 *
 * @param {string} animation - 'fade-up', 'fade-down', 'scale-up', 'slide-left', 'slide-right'
 * @param {string} delay - '0', '100', '200', '300', '400' (ms)
 * @param {string} className - Additional classes
 * @param {number} duration - Animation duration in ms (optional, default via CSS)
 */
export const Reveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  style = {},
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px", // Offset slightly so it triggers before fully in view
      },
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Map delay prop to stagger class if it matches common values, or inline style
  const validStaggers = [100, 200, 300, 400];
  const staggerClass = validStaggers.includes(Number(delay))
    ? `stagger-${Number(delay) / 100}`
    : "";

  const animationClass = `animate-${animation}`; // e.g., animate-fade-up

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animationClass} ${staggerClass} ${className}`}
      style={{
        ...style,
        transitionDelay: !staggerClass && delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};
