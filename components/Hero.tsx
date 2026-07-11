import { site, heroTagline } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 pt-20 pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm tracking-wider text-signal">
          SOFTWARE ENGINEER
        </p>

        <h1 className="font-display text-5xl leading-tight tracking-tight text-paper sm:text-6xl md:text-7xl">
          Dhruv Kothari
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate sm:text-lg">
          {heroTagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded bg-signal px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-signal/80"
          >
            Get in touch
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-surface px-5 py-2.5 text-sm text-slate transition-colors hover:border-slate hover:text-paper"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-surface px-5 py-2.5 text-sm text-slate transition-colors hover:border-slate hover:text-paper"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="text-slate transition-colors hover:text-paper"
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
      </div>
    </section>
  );
}
