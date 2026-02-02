import { motion } from "framer-motion";
import { certifications } from "@/utils/data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
};

export function Certifications() {
  return (
    <div className="space-y-12 pb-20">
      <section className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
          Certifications
        </p>
        <h1 className="text-3xl font-semibold text-white">
          Learning milestones
        </h1>
        <p className="max-w-2xl text-sm text-gray-400">
          Continuous learning keeps my stack sharp and future-ready.
        </p>
      </section>
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            {...fadeUp}
            className="rounded-3xl border border-white/5 bg-slate-900/70 p-6"
          >
            <p className="text-xs uppercase text-emerald-300">
              {cert.platform}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {cert.name}
            </h3>
            <p className="mt-2 text-sm text-gray-400">{cert.summary}</p>
            <span className="mt-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
              {cert.year}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
