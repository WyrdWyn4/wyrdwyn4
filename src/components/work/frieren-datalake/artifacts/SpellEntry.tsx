"use client";

import type { ElementType } from "react";

type SpellEntryProps = {
  index: number;
  title: string;
  subtitle: string;
  type?: string;
  description: string;
  tags: string[];
  icon: ElementType;
};

export default function SpellEntry({
  index,
  title,
  subtitle,
  type,
  description,
  tags,
  icon: Icon,
}: SpellEntryProps) {
  return (
    <article className="group relative rounded-2xl border border-[#8a6740]/18 bg-[#fff4d5]/38 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition hover:border-[#8a6740]/35 hover:bg-[#fff4d5]/52">
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.35),transparent_34%)] opacity-80" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#8a6740]/25 bg-[#f8e7b9]/75 text-[#6a4a2d] shadow-sm">
              <Icon size={20} />
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#8a6740]">
                Spell {String(index + 1).padStart(2, "0")}
              </p>

              {type && (
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-[#9c7a4e]/80">
                  {type}
                </p>
              )}
            </div>
          </div>

          <span className="mt-1 rounded-full border border-[#8a6740]/20 bg-[#f8e7b9]/55 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.2em] text-[#7a5c36]">
            {subtitle}
          </span>
        </div>

        <div className="mb-4 h-px w-full bg-gradient-to-r from-[#8a6740]/35 via-[#8a6740]/14 to-transparent" />

        <h3 className="font-serif text-2xl leading-tight text-[#261b12] md:text-3xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#34281f]/82">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#8a6740]/22 bg-[#f8e7b9]/65 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#6a4a2d]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}