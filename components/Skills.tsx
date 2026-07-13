import { skills } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="mb-2 font-mono text-xs tracking-[0.2em] text-gold">
            TOOLKIT
          </p>
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
            Skills
          </h2>
        </ScrollReveal>

        <div className="bento-grid mt-12">
          {skills.map((group, i) => {
            const isLarge = i <= 1;
            return (
              <ScrollReveal
                key={group.category}
                delay={i * 80}
                className={isLarge ? "md:col-span-2" : ""}
              >
                <div className="flex h-full flex-col rounded-xl border border-surface-raised bg-surface p-5">
                  <h3 className="mb-3 font-mono text-xs tracking-wider text-gold">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag rounded-md bg-surface-raised px-2.5 py-1 text-sm text-paper/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
