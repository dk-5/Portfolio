"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("visible");
      return;
    }

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    let lastY = el.getBoundingClientRect().top;
    let wasAbove = false;

    const tick = () => {
      const rect = el.getBoundingClientRect();
      const y = rect.top;
      const inView = rect.bottom > 60 && rect.top < window.innerHeight - 60;

      if (inView) {
        if (!el.classList.contains("visible")) {
          // Clear any lingering reverse state
          el.classList.remove("reveal-reverse");
          el.classList.add("visible");

          // After entrance completes, clear delay so reverse is snappy
          if (delay > 0) {
            setTimeout(() => {
              el.style.transitionDelay = "0ms";
            }, delay + 650);
          }
        }
        wasAbove = false;
      } else {
        // Element left viewport — determine if scrolling up or down
        if (y > lastY && !wasAbove) {
          // Scrolling UP — element exits upward, animate it OUT downward (reverse)
          el.style.transitionDelay = "0ms";
          el.classList.remove("visible");
          el.classList.add("reveal-reverse");

          // After reverse completes, clean up for next entrance
          setTimeout(() => {
            el.classList.remove("reveal-reverse");
            if (delay > 0) {
              el.style.transitionDelay = `${delay}ms`;
            }
          }, 650);
        }
        if (y < lastY) {
          wasAbove = true;
        }
      }

      lastY = y;
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          tick();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();

    return () => window.removeEventListener("scroll", onScroll);
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
