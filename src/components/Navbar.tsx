import { NavLink } from "react-router-dom";
import { FaBolt } from "react-icons/fa6";
import { cn } from "@/utils/cn";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
            <FaBolt />
          </span>
          <span>DevFolio.ai</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-gray-300 transition hover:text-white",
                  isActive && "text-white"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-xs font-medium text-gray-400">
          <span className="hidden sm:inline">MERN • UI/UX • Future-ready</span>
        </div>
      </div>
    </header>
  );
}
