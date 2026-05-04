// src/components/work/frieren-datalake/artifacts/FantasyMap.tsx

"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Archive,
  Database,
  GitBranch,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { media } from "../content";

type FantasyMapStep = {
  title: string;
  landmark: string;
  description: string;
};

type FantasyMapProps = {
  steps: FantasyMapStep[];
};

type WaypointMeta = {
  id: string;
  x: number;
  y: number;
  icon: LucideIcon;
};

const waypointMeta: WaypointMeta[] = [
  {
    id: "ingest",
    x: 31,
    y: 83,
    icon: Database,
  },
  {
    id: "transform",
    x: 29,
    y: 63,
    icon: GitBranch,
  },
  {
    id: "validate",
    x: 36,
    y: 47,
    icon: ShieldCheck,
  },
  {
    id: "organize",
    x: 33,
    y: 30,
    icon: Archive,
  },
  {
    id: "query",
    x: 46,
    y: 12,
    icon: Search,
  },
];

function TreasureChestMarker() {
  return (
    <div className="pointer-events-none absolute left-[46%] top-[12%] z-10 -translate-x-1/2 -translate-y-[135%]">
      <div className="relative h-10 w-14">
        <div className="absolute left-1/2 top-0 h-5 w-11 -translate-x-1/2 rounded-t-xl border border-[#6b3d25]/70 bg-[linear-gradient(135deg,#9b5c32,#4b2b1f)] shadow-[0_0_18px_rgba(232,216,168,0.25)]" />
        <div className="absolute bottom-0 left-1/2 h-7 w-14 -translate-x-1/2 rounded-md border border-[#6b3d25]/75 bg-[linear-gradient(135deg,#a66438,#513020)]" />
        <div className="absolute bottom-0 left-1/2 h-7 w-1.5 -translate-x-1/2 bg-[#d2b46f]/80" />
        <div className="absolute left-1/2 top-5 h-3 w-4 -translate-x-1/2 rounded border border-[#5c4328]/50 bg-[#e8d8a8]" />
        <div className="absolute -inset-5 -z-10 rounded-full bg-[#e8d8a8]/25 blur-2xl" />
      </div>
    </div>
  );
}

function CompassNote() {
  return (
    <div className="pointer-events-none absolute right-[7%] top-[7%] z-10 hidden rounded-full border border-[#7a432d]/30 bg-[#f4e7c5]/65 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#5c3a28] shadow-sm backdrop-blur-sm sm:block">
      South → North
    </div>
  );
}

export default function FantasyMap({ steps }: FantasyMapProps) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = steps[activeIndex] ?? steps[0];

  const routePath = useMemo(() => {
    return `
      M 31 83
      C 24 76, 36 70, 29 63
      C 42 36, 29 50, 36 47
      C 33 41, 31 35, 33 30
      C 37 22, 42 16, 46 12
    `;
  }, []);

  return (
    <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.1fr)_360px]">
      <div className="relative mx-auto w-full max-w-[780px]">
        <div className="absolute -inset-5 rounded-[2rem] bg-[#e8d8a8]/12 blur-3xl" />

        <article className="relative overflow-hidden rounded-[1.35rem] border border-[#e8d8a8]/35 bg-[#101423]/30 shadow-[0_26px_100px_rgba(16,20,35,0.5)]">
          <div className="relative aspect-square">
            <Image
              src={media.worldMap}
              alt="Frieren world map used as the datalake journey map"
              fill
              sizes="(max-width: 1024px) 100vw, 780px"
              className="object-cover"
            />

            {/* Mild readability wash. Keep this light so the map texture remains visible. */}
            <div className="absolute inset-0 bg-[#1a1f2e]/5" />

            {/* Route line */}
            <svg
              className="absolute inset-0 z-10 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d={routePath}
                fill="none"
                stroke="rgba(62, 33, 20, 0.32)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />

              <motion.path
                d={routePath}
                fill="none"
                stroke="rgba(112, 50, 31, 0.92)"
                strokeWidth="0.55"
                strokeDasharray="1.15 1.25"
                strokeLinecap="round"
                initial={reduceMotion ? false : { pathLength: 0, opacity: 0.35 }}
                whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />

              <motion.path
                d={routePath}
                fill="none"
                stroke="rgba(232,216,168,0.6)"
                strokeWidth="0.18"
                strokeDasharray="0.4 3"
                strokeLinecap="round"
                initial={reduceMotion ? false : { pathLength: 0 }}
                whileInView={reduceMotion ? undefined : { pathLength: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 1.65, delay: 0.15, ease: "easeInOut" }}
              />
            </svg>

            <CompassNote />
            <TreasureChestMarker />

            {/* Waypoints */}
            {steps.map((step, index) => {
              const meta = waypointMeta[index] ?? waypointMeta[0];
              const Icon = meta.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={step.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left"
                  style={{ left: `${meta.x}%`, top: `${meta.y}%` }}
                  aria-label={`${step.title}: ${step.description}`}
                >
                  <div
                    className={`relative flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_8px_22px_rgba(60,32,21,0.28)] transition group-hover:scale-110 ${
                      isActive
                        ? "border-[#4e2418] bg-[#3a2418] text-[#f7efd7]"
                        : "border-[#7a432d]/65 bg-[#f2dfb7] text-[#3a2418]"
                    }`}
                  >
                    <div
                      className={`absolute inset-1 rounded-full border ${
                        isActive ? "border-[#e8d8a8]/35" : "border-[#7a432d]/25"
                      }`}
                    />
                    <Icon size={17} />

                    <span
                      className={`absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border font-mono text-[10px] font-semibold ${
                        isActive
                          ? "border-[#e8d8a8]/50 bg-[#e8d8a8] text-[#3a2418]"
                          : "border-[#7a432d]/50 bg-[#3a2418] text-[#f7efd7]"
                      }`}
                    >
                      {index + 1}
                    </span>

                    {isActive && (
                      <span className="absolute -inset-3 -z-10 rounded-full bg-[#e8d8a8]/35 blur-xl" />
                    )}
                  </div>

                  <div
                    className={`mt-2 max-w-[9rem] rounded-full border px-3 py-1 text-center font-mono text-[8px] uppercase tracking-[0.15em] shadow-sm transition ${
                      isActive
                        ? "border-[#4e2418]/35 bg-[#3a2418]/88 text-[#f7efd7]"
                        : "border-[#7a432d]/25 bg-[#f4e7c5]/90 text-[#5c3a28] group-hover:bg-[#3a2418]/88 group-hover:text-[#f7efd7]"
                    }`}
                  >
                    {step.landmark}
                  </div>
                </button>
              );
            })}
          </div>
        </article>
      </div>

      <aside className="relative overflow-hidden rounded-[1.5rem] border border-[#e8d8a8]/30 bg-[#101423]/58 p-6 text-[#f7efd7] shadow-[0_16px_60px_rgba(16,20,35,0.36)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(232,216,168,0.14),transparent_32%)]" />

        <div className="relative z-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#e8d8a8]">
            Journey Legend
          </p>

          <div className="my-5 h-px w-full bg-gradient-to-r from-[#e8d8a8]/60 via-[#c9bfea]/25 to-transparent" />

          <h3 className="mt-3 font-serif text-4xl leading-tight text-[#f7efd7]">
            {activeStep.title}
          </h3>

          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#e8d8a8]">
            {activeStep.landmark}
          </p>

          <p className="mt-5 text-sm leading-7 text-[#d7d9e5]">
            {activeStep.description}
          </p>

          <div className="mt-8 space-y-3">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-[#e8d8a8]/45 bg-[#e8d8a8]/10"
                      : "border-[#f7efd7]/10 bg-[#f7efd7]/5 hover:border-[#e8d8a8]/25 hover:bg-[#f7efd7]/8"
                  }`}
                >
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs ${
                      isActive
                        ? "border-[#e8d8a8]/45 bg-[#e8d8a8]/15 text-[#fff2c9]"
                        : "border-[#e8d8a8]/25 bg-[#101423]/45 text-[#f7efd7]"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <span>
                    <span className="block text-sm font-medium text-[#f7efd7]">
                      {step.title}
                    </span>
                    <span className="block text-xs text-[#d7d9e5]/70">
                      {step.landmark}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}