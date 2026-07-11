import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-mono text-xs tracking-widest text-signal">
          SKILLS
        </h2>
        <div className="mt-2 h-px bg-surface" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 font-mono text-xs tracking-wider text-amber">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-surface px-2.5 py-1 text-sm text-paper/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
