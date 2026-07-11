import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-mono text-xs tracking-widest text-signal">
          EXPERIENCE
        </h2>
        <div className="mt-2 h-px bg-surface" />

        <div className="mt-10 space-y-10">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-paper">
                    {job.role}
                  </h3>
                  <p className="font-mono text-sm text-signal">
                    {job.company}
                  </p>
                </div>
                <p className="font-mono text-xs text-slate">{job.period}</p>
              </div>

              <ul className="mt-4 space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-slate"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
