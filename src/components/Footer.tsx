import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "@/utils/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white">{profile.name}</p>
          <p className="text-gray-400">{profile.role}</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-emerald-400/60 hover:text-emerald-200"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-indigo-400/60 hover:text-indigo-200"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-purple-400/60 hover:text-purple-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
