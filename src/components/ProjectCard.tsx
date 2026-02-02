import type { Project } from "@/types";
import { GlowButton } from "@/components/GlowButton";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10">
      <div>
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <GlowButton variant="ghost" onClick={() => onSelect(project)}>
          View Details
        </GlowButton>
        <a href={project.github} target="_blank" rel="noreferrer">
          <GlowButton variant="secondary">GitHub</GlowButton>
        </a>
      </div>
    </div>
  );
}
