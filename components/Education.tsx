import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-mono text-xs tracking-widest text-signal">
          EDUCATION
        </h2>
        <div className="mt-2 h-px bg-surface" />

        <div className="mt-10 space-y-8">
          {education.map((edu) => (
            <div key={edu.school}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-paper">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-slate">
                    {edu.school} — {edu.location}
                  </p>
                </div>
                <p className="font-mono text-xs text-slate">{edu.period}</p>
              </div>
              {edu.gpa && (
                <p className="mt-2 font-mono text-xs text-amber">
                  GPA: {edu.gpa}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
