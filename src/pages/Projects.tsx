import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/utils/data";
import type { Project } from "@/types";
import { ProjectCard } from "@/components/ProjectCard";
import { GlowButton } from "@/components/GlowButton";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="space-y-12 pb-20">
      <section className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
          Projects
        </p>
        <h1 className="text-3xl font-semibold text-white">
          Featured builds & case studies
        </h1>
        <p className="max-w-2xl text-sm text-gray-400">
          Each project reflects my focus on clean architecture, immersive UI,
          and real-world impact.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelected}
          />
        ))}
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-2xl rounded-3xl border border-white/10 bg-slate-950 p-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {selected.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    {selected.description}
                  </p>
                </div>
                <button
                  className="text-sm text-gray-400 hover:text-white"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
              <div className="mt-6">
                <h3 className="text-sm uppercase text-indigo-300">
                  Key highlights
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  {selected.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={selected.github} target="_blank" rel="noreferrer">
                  <GlowButton variant="secondary">GitHub Repo</GlowButton>
                </a>
                {selected.demo && (
                  <a href={selected.demo} target="_blank" rel="noreferrer">
                    <GlowButton>Live Demo</GlowButton>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
