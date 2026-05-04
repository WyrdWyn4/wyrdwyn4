// src/components/work/frieren-datalake/artifacts/JournalPage.tsx

"use client";

import type { ElementType } from "react";
import { BookOpen } from "lucide-react";
import PageFold from "../decorations/PageFold";
import WaxSeal from "../decorations/WaxSeal";

type JournalPageProps = {
  title: string;
  body: string;
  details: {
    label: string;
    value: string;
    icon?: ElementType;
  }[];
};

export default function JournalPage({ title, body, details }: JournalPageProps) {
  return (
    <article className="relative overflow-hidden rounded-[1.2rem] border border-[#d4b978]/60 bg-[#f3e9d2]/92 p-8 text-[#1e2430] shadow-[0_24px_80px_rgba(16,20,35,0.35)] md:p-10">
      <PageFold />

      <div className="absolute bottom-0 left-12 top-0 w-px bg-[#9d7651]/20" />
      <div className="absolute bottom-0 left-16 top-0 w-px bg-[#9d7651]/10" />

      <div className="relative z-10 pl-5">
        <div className="mb-6 flex items-start justify-between gap-6">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8a6740]/25 bg-[#fff6dd] text-[#6a4a2d] shadow-sm">
            <BookOpen size={25} />
          </div>
          <WaxSeal label="N" />
        </div>

        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#7a5c36]">
          Field Journal Entry
        </p>

        <h3 className="font-serif text-4xl leading-tight text-[#1a1f2e]">
          {title}
        </h3>

        <div className="my-6 h-px w-full bg-gradient-to-r from-[#7a5c36]/45 via-[#7a5c36]/15 to-transparent" />

        <p className="text-base leading-8 text-[#283143]/88">{body}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {details.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-2xl border border-[#8a6740]/20 bg-[#fff6dd]/60 p-4 shadow-sm"
              >
                {Icon && <Icon className="mb-3 text-[#6e8f74]" size={20} />}

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#7a5c36]">
                  {item.label}
                </p>

                <p className="mt-2 text-sm font-medium text-[#1a1f2e]">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}