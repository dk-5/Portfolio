import { publications } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Publications() {
  return (
    <section id="publications" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="mb-2 font-mono text-xs tracking-[0.2em] text-gold">
            PUBLISHED RESEARCH
          </p>
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
            Research
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-4">
          {publications.map((pub, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-card group block rounded-xl border border-surface-raised bg-surface p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="flex-1 text-sm font-medium leading-snug text-paper transition-colors group-hover:text-gold sm:text-base">
                    {pub.title}
                  </h3>
                  <span className="shrink-0 text-ash opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="rounded-md bg-surface-raised px-2 py-0.5 font-mono text-xs text-ember">
                    {pub.venue}
                  </span>
                  <span className="font-mono text-xs text-ash">{pub.year}</span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
