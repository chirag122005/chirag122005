import type { TechItem } from "@/types";

interface TechCardProps {
  item: TechItem;
}

export function TechCard({ item }: TechCardProps) {
  return (
    <div className="group rounded-2xl border border-white/5 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{item.icon}</span>
        <div>
          <h3 className="text-base font-semibold text-white">{item.name}</h3>
          <p className="text-xs text-gray-400">{item.category}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-400">{item.description}</p>
    </div>
  );
}
