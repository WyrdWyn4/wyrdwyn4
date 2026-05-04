// src/components/work/frieren-datalake/artifacts/SpellRecord.tsx

"use client";

import type { ElementType } from "react";
import GlowingBadge from "../layout/GlowingBadge";

type SpellRecordProps = {
  index: number;
  title: string;
  subtitle: string;
  type: string;
  description: string;
  tags: string[];
  icon: ElementType;
  size?: "normal" | "large" | "wide";
};

export default function SpellRecord({
  index,
  title,
  subtitle,
  type,
  description,
  tags,
  icon: Icon,
  size = "normal",
}: SpellRecordProps) {
  const large = size === "large" || size === "wide";

  return (
    <article className="group relative h-full overflow-hidden rounded-[1.6rem] border border-[#e8d8a8]/30 bg-[linear-gradient(135deg,rgba(243,233,210,0.16),rgba(16,20,35,0.76)_42%,rgba(35,48,42,0.68))] p-7 text-[#f7efd7] shadow-[0_0_80px_rgba(16,20,35,0.42)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#e8d8a8]/50 md:p-8">
      <div className="absolute inset-[7px] rounded-[1.25rem] border border-[#f7efd7]/8" />
      <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-[#e8d8a8]/35" />
      <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-[#e8d8a8]/35" />
      <div className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-[#e8d8a8]/35" />
      <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#e8d8a8]/35" />

      <div className="relative z-10">
        <div className="mb-7 flex items-start justify-between gap-5">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-[#e8d8a8]/12 blur-xl" />
            <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e8d8a8]/30 bg-[#e8d8a8]/10 text-[#e8d8a8]">
              <Icon size={23} />
            </div>
          </div>

          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#a8c7a1]">
              Spell {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-[#e8d8a8]/70">
              {type}
            </p>
          </div>
        </div>

        <div className="mb-5 h-px w-full bg-gradient-to-r from-[#e8d8a8]/70 via-[#c9bfea]/35 to-transparent" />

        <p className="mb-3 font-mono text-xs uppercase tracking-[0.26em] text-[#e8d8a8]">
          {subtitle}
        </p>

        <h3
          className={`font-serif leading-tight text-[#f7efd7] ${
            large ? "text-4xl" : "text-3xl"
          }`}
        >
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#d7d9e5] md:text-[15px]">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <GlowingBadge key={tag}>{tag}</GlowingBadge>
          ))}
        </div>
      </div>
    </article>
  );
}