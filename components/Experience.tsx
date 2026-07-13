import { experience } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="mb-2 font-mono text-xs tracking-[0.2em] text-gold">
            WORK
          </p>
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
            Experience
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-10">
          {experience.map((job) => (
            <ScrollReveal key={job.company}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-paper">{job.role}</h3>
                  <p className="font-mono text-sm text-gold">{job.company}</p>
                </div>
                <p className="font-mono text-xs text-ash">{job.period}</p>
              </div>
              <ul className="mt-5 space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-ash"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
