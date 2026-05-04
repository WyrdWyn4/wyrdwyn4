// src/components/work/frieren-datalake/decorations/WaypointMarker.tsx

"use client";

import type { ElementType } from "react";

type WaypointMarkerProps = {
  index: number;
  title: string;
  landmark: string;
  description: string;
  x: string;
  y: string;
  icon: ElementType;
};

export default function WaypointMarker({
  index,
  title,
  landmark,
  description,
  x,
  y,
  icon: Icon,
}: WaypointMarkerProps) {
  return (
    <button
      type="button"
      className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left"
      style={{ left: x, top: y }}
      aria-label={`${title}: ${description}`}
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-4 rounded-full bg-[#e8d8a8]/25 blur-2xl opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#7a5c36]/50 bg-[#f3e2b8] text-[#3a2a1c] shadow-[0_10px_25px_rgba(70,45,25,0.25)] transition group-hover:-translate-y-1 group-hover:scale-105">
          <div className="absolute inset-2 rounded-full border border-[#7a5c36]/35" />
          <Icon size={21} />
          <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-[#7a5c36]/50 bg-[#3a2a1c] font-mono text-[10px] text-[#f7efd7]">
            {index + 1}
          </span>
        </div>

        <div className="mt-2 rounded-full border border-[#7a5c36]/30 bg-[#f3e2b8]/90 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#5c4328] shadow-sm">
          {landmark}
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[5.8rem] w-64 -translate-x-1/2 rounded-2xl border border-[#7a5c36]/30 bg-[#2c2118]/92 p-4 text-center text-[#f7efd7] opacity-0 shadow-[0_18px_45px_rgba(16,20,35,0.35)] backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <p className="font-serif text-xl">{title}</p>
          <p className="mt-2 text-xs leading-6 text-[#e8d8a8]">{description}</p>
        </div>
      </div>
    </button>
  );
}