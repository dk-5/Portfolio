import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="mb-2 font-mono text-xs tracking-[0.2em] text-gold">
            SELECTED WORK
          </p>
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
            Projects
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
