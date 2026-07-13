import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card group rounded-xl border border-surface-raised bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl tracking-tight text-paper sm:text-2xl">
              {project.name}
            </h3>
            <div className="flex shrink-0 gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gold/30 px-3 py-1.5 text-xs font-medium text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  Live
                </a>
              )}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-surface-raised px-3 py-1.5 text-xs text-ash transition-colors hover:border-ash hover:text-paper"
              >
                Code
              </a>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ash">
            {project.description}
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs text-ember">Problem</p>
              <p className="mt-1 text-sm leading-relaxed text-ash/80">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-ember">Outcome</p>
              <p className="mt-1 text-sm leading-relaxed text-ash/80">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="skill-tag rounded-md bg-surface-raised px-2.5 py-1 font-mono text-xs text-ember"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
