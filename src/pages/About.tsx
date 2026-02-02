import { motion } from "framer-motion";
import { profile } from "@/utils/data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
};

export function About() {
  return (
    <div className="space-y-12 pb-20">
      <motion.section
        {...fadeUp}
        className="rounded-3xl border border-white/5 bg-slate-900/70 p-8"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
              About me
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white">
              Engineer. Designer. Builder.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {profile.story}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {profile.goals}
            </p>
          </div>
          <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6">
            <h3 className="text-lg font-semibold text-white">Career goals</h3>
            <p className="mt-3 text-sm text-gray-300">
              Launch scalable products, lead cross-functional teams, and
              contribute to open-source ecosystems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="grid gap-6 md:grid-cols-3"
      >
        {[
          {
            title: "Problem Solver",
            description:
              "I love taking ambiguous problems and turning them into polished products.",
          },
          {
            title: "Design Thinking",
            description:
              "I prototype fast, validate ideas, and craft delightful experiences.",
          },
          {
            title: "Growth Mindset",
            description:
              "I keep learning, shipping, and reflecting to stay future-ready.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/5 bg-slate-900/70 p-6 text-sm text-gray-400"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3">{item.description}</p>
          </div>
        ))}
      </motion.section>
    </div>
  );
}
