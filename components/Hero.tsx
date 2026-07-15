"use client";

import { useRef, useEffect, useState } from "react";
import { site, heroTagline } from "@/lib/data";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jQuery: any;
  }
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  // Typewriter effect for the tagline
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplayedText(heroTagline);
      setTypingDone(true);
      setShowCursor(false);
      return;
    }

    let index = 0;
    const timer = setTimeout(() => {
      const tick = () => {
        const char = heroTagline[index];
        index++;
        if (index >= heroTagline.length) {
          setDisplayedText(heroTagline);
          setTypingDone(true);
          setTimeout(() => setShowCursor(false), 800);
        } else {
          setDisplayedText(heroTagline.slice(0, index));
          const delay = char === "." || char === "," || char === ";" || char === "—" ? 160
            : char === " " ? 60
            : 42 + Math.random() * 20;
          setTimeout(tick, delay);
        }
      };
      tick();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // WebGL water ripple — real shader-based simulation
  useEffect(() => {
    let destroyed = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let $ripple: any = null;

    const loadScript = (src: string): Promise<void> =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => resolve();
        s.onerror = reject;
        document.head.appendChild(s);
      });

    const init = async () => {
      if (destroyed) return;

      await loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js");

      if (destroyed || !sectionRef.current) return;

      const $ = window.jQuery;
      if (!$) return;

      const $section = $(sectionRef.current);
      $section.css("position", "relative");

      $section.ripples({
        resolution: 512,
        dropRadius: 30,
        perturbance: 0.06,
        interactive: true,
        dropColor: [1.0, 0.82, 0.2],
      });

      $ripple = $section;

      const canvas = $section.find("canvas").get(0);
      if (canvas) {
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "0";
        canvas.style.opacity = "1";
      }
    };

    init();

    return () => {
      destroyed = true;
      if ($ripple) {
        try {
          $ripple.ripples("destroy");
        } catch {
          // already cleaned up
        }
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="hero-label mb-4 font-mono text-xs tracking-[0.15em] text-gold sm:mb-6 sm:text-sm sm:tracking-[0.2em]">
          SOFTWARE ENGINEER &amp; AI/ML RESEARCHER
        </p>

        <h1 className="hero-name font-display text-3xl leading-[1.05] tracking-tight text-paper sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Dhruv Kothari
        </h1>

        <p className="hero-tagline mt-6 max-w-xl text-balance text-base leading-relaxed text-ash sm:text-lg">
          {displayedText}
          <span
            className={`inline-block w-[2px] align-middle ml-0.5 bg-gold transition-opacity duration-300 ${
              showCursor && !typingDone
                ? "animate-cursor-blink"
                : typingDone
                  ? "opacity-0"
                  : "opacity-100"
            }`}
            style={{ height: "1em" }}
          />
        </p>

        <div className="hero-cta mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-lg bg-gold px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:bg-gold/80 hover:shadow-lg hover:shadow-gold/20"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-surface-raised px-6 py-3 text-sm text-ash transition-all duration-200 hover:border-ash hover:text-paper"
          >
            Explore projects
          </a>
        </div>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="hero-scroll absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-ash transition-colors hover:text-paper"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
