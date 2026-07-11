import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-mono text-xs tracking-widest text-signal">
          PROJECTS
        </h2>
        <div className="mt-2 h-px bg-surface" />

        <div className="mt-10 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
