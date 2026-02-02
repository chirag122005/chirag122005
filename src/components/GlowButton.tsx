import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

interface GlowButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: "primary" | "secondary" | "ghost";
}

export function GlowButton({
  children,
  className,
  variant = "primary",
  ...props
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 text-white shadow-lg shadow-indigo-500/30 hover:shadow-emerald-400/40",
    secondary:
      "border border-indigo-500/40 text-indigo-100 hover:border-indigo-400/80 hover:text-white",
    ghost:
      "border border-white/10 text-gray-200 hover:border-emerald-300/60 hover:text-emerald-200",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-emerald-400/20 blur-lg" />
      {children}
    </button>
  );
}
