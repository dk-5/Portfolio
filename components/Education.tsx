import { education } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="mb-2 font-mono text-xs tracking-[0.2em] text-gold">
            ACADEMIC
          </p>
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
            Education
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.school} delay={i * 100}>
              <div className="rounded-xl border border-surface-raised bg-surface p-6">
                <h3 className="font-display text-lg tracking-tight text-paper">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-ash">
                  {edu.school}
                </p>
                <p className="mt-1 font-mono text-xs text-ash">
                  {edu.location}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-mono text-xs text-ash">{edu.period}</p>
                  {edu.gpa && (
                    <span className="rounded-md bg-ember/15 px-2 py-0.5 font-mono text-xs text-ember">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
