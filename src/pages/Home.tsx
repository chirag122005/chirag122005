import { motion } from "framer-motion";
import { GlowButton } from "@/components/GlowButton";
import { TechCard } from "@/components/TechCard";
import { experience, profile, techStack } from "@/utils/data";
import { FaArrowDown } from "react-icons/fa6";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.2 },
};

export function Home() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-16 md:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -right-20 top-12 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-60 w-60 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
        <div className="relative z-10 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <motion.p
              {...fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300"
            >
              DevFolio.ai
            </motion.p>
            <motion.h1
              {...fadeUp}
              className="text-4xl font-semibold text-white md:text-5xl"
            >
              {profile.name}
            </motion.h1>
            <motion.h2 {...fadeUp} className="text-xl text-gray-200">
              {profile.role}
            </motion.h2>
            <motion.p {...fadeUp} className="max-w-xl text-gray-400">
              {profile.tagline}
            </motion.p>
            <motion.div {...fadeUp} className="flex flex-wrap gap-4">
              <GlowButton>View Resume</GlowButton>
              <GlowButton variant="secondary">Contact Me</GlowButton>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="flex items-center gap-3 text-sm text-gray-400"
            >
              <FaArrowDown className="text-emerald-300" />
              <span>Scroll to explore my journey and work.</span>
            </motion.div>
          </div>
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-indigo-500/20 bg-slate-900/70 p-6 text-gray-300 shadow-xl shadow-indigo-500/10"
          >
            <h3 className="text-lg font-semibold text-white">Intro</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {profile.about}
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Location</span>
                <span className="text-gray-200">{profile.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Availability</span>
                <span className="text-emerald-300">Open for internships</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Focus</span>
                <span className="text-gray-200">MERN + Product Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-white/5 bg-slate-900/70 p-6 transition hover:border-indigo-400/50"
        >
          <p className="text-sm uppercase text-indigo-300">Education</p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            {experience.education.title}
          </h3>
          <p className="text-sm text-gray-400">
            {experience.education.institution}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {experience.education.year}
          </p>
          <p className="mt-4 text-sm text-gray-300">
            {experience.education.cgpa}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            {experience.education.achievements.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-white/5 bg-slate-900/70 p-6 transition hover:border-emerald-400/50"
        >
          <p className="text-sm uppercase text-emerald-300">Experience</p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            {experience.work.title}
          </h3>
          <p className="text-sm text-gray-400">{experience.work.company}</p>
          <p className="mt-2 text-sm text-gray-500">{experience.work.duration}</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            {experience.work.responsibilities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="space-y-6">
        <motion.div {...fadeUp} className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
              Tech Stack
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Tools I use to build
            </h2>
          </div>
          <span className="hidden text-sm text-gray-500 md:inline">
            MERN + Design + Cloud
          </span>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((item) => (
            <motion.div key={item.name} {...fadeUp}>
              <TechCard item={item} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
