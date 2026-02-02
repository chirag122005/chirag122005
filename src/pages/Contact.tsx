import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { GlowButton } from "@/components/GlowButton";
import { profile } from "@/utils/data";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
};

export function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        "service_id",
        "template_id",
        {
          from_name: formData.get("name"),
          reply_to: formData.get("email"),
          message: formData.get("message"),
        },
        "public_key"
      );
      setStatus("Message sent successfully. I will get back soon.");
      form.reset();
    } catch (error) {
      setStatus("Unable to send right now. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 pb-20">
      <section className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-white/5 bg-slate-900/70 p-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Let’s build something together
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Reach out for internships, freelance collaborations, or MERN
            engineering roles.
          </p>
          <div className="mt-6 space-y-4 text-sm text-gray-300">
            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 transition hover:border-indigo-400/60"
              href={`mailto:${profile.email}`}
            >
              <FaEnvelope className="text-indigo-300" />
              {profile.email}
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 transition hover:border-emerald-400/60"
              href={profile.linkedin}
            >
              <FaLinkedin className="text-emerald-300" />
              LinkedIn Profile
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 transition hover:border-purple-400/60"
              href={profile.github}
            >
              <FaGithub className="text-purple-300" />
              GitHub Repository
            </a>
          </div>
        </motion.div>

        <motion.form
          {...fadeUp}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/5 bg-slate-900/70 p-8"
        >
          <div className="grid gap-4">
            <div>
              <label className="text-xs uppercase text-gray-400">Name</label>
              <input
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase text-gray-400">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                placeholder="Tell me about your idea..."
              />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <GlowButton type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </GlowButton>
            {status && <p className="text-xs text-gray-400">{status}</p>}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            EmailJS keys are placeholders. Plug in your service/template/public
            keys to enable sending.
          </p>
        </motion.form>
      </section>
    </div>
  );
}
