import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative rounded-lg bg-surface p-6 transition-colors hover:bg-surface/80">
      <div className="flex gap-4">
        <div className="hidden flex-col items-center pt-1 sm:flex">
          <span className="font-mono text-xs text-signal">{num}</span>
          <div className="mt-2 h-full w-px bg-ink" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-medium text-paper">
              {project.name}
            </h3>
            <div className="flex shrink-0 gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-surface px-2.5 py-1 text-xs text-signal transition-colors hover:border-signal"
                >
                  Live
                </a>
              )}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-surface px-2.5 py-1 text-xs text-slate transition-colors hover:border-slate hover:text-paper"
              >
                Code
              </a>
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate">
            {project.description}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate/80">
            <span className="font-medium text-slate">Problem:</span>{" "}
            {project.problem}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate/80">
            <span className="font-medium text-slate">Outcome:</span>{" "}
            {project.outcome}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded bg-ink px-2 py-0.5 font-mono text-xs text-amber"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
