// src/components/work/frieren-datalake/artifacts/CodexPanel.tsx

"use client";

import GlowingBadge from "../layout/GlowingBadge";

type CodexPanelProps = {
  groups: {
    group: string;
    description?: string;
    items: string[];
  }[];
};

export default function CodexPanel({ groups }: CodexPanelProps) {
  return (
    <article className="relative overflow-hidden rounded-[1.6rem] border border-[#c9bfea]/24 bg-[linear-gradient(135deg,rgba(25,35,52,0.82),rgba(16,20,35,0.68),rgba(43,50,72,0.62))] p-4 text-[#f7efd7] shadow-[0_0_70px_rgba(105,130,170,0.14)] backdrop-blur-xl md:p-5">
      <div className="absolute inset-[6px] rounded-[1.3rem] border border-[#f7efd7]/7" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#c9bfea]/12" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-[#e8d8a8]/8" />

      <div className="relative z-10">
        <div className="grid gap-3">
          {groups.map((group, index) => (
            <section
              key={group.group}
              className="group relative overflow-hidden rounded-xl border border-[#f7efd7]/10 bg-[#f7efd7]/5 p-3.5 transition hover:border-[#e8d8a8]/25 hover:bg-[#f7efd7]/8 md:p-4"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#e8d8a8]/40 via-[#c9bfea]/18 to-transparent opacity-60" />

              <div className="mb-2.5 flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#e8d8a8]">
                    Discipline {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-1 font-serif text-xl leading-tight text-[#f7efd7] md:text-[1.35rem]">
                    {group.group}
                  </h3>
                </div>

                <span className="rounded-full border border-[#c9bfea]/20 px-2.5 py-0.5 font-mono text-[9px] text-[#c9bfea]">
                  {group.items.length}
                </span>
              </div>

              {group.description && (
                <p className="mb-3 text-xs leading-5 text-[#d7d9e5]/82">
                  {group.description}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e8d8a8]/20 bg-[#e8d8a8]/8 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-[#e8d8a8]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}