"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FantasyCardVariant =
  | "glass"
  | "parchment"
  | "spell"
  | "rune"
  | "memory"
  | "crest";

type FantasyCardProps = {
  children: ReactNode;
  className?: string;
  variant?: FantasyCardVariant;
  hover?: boolean;
};

const variantClasses: Record<FantasyCardVariant, string> = {
  glass:
    "border-[#e8d8a8]/22 bg-[#101423]/58 text-[#f7efd7] shadow-[0_0_70px_rgba(16,20,35,0.38)] backdrop-blur-xl",

  parchment:
    "border-[#e8d8a8]/35 bg-[#f3e9d2]/88 text-[#1a1f2e] shadow-[0_18px_70px_rgba(16,20,35,0.28)] backdrop-blur-md",

  spell:
    "border-[#e8d8a8]/30 bg-[linear-gradient(135deg,rgba(243,233,210,0.18),rgba(16,20,35,0.72)_42%,rgba(35,48,42,0.68))] text-[#f7efd7] shadow-[0_0_80px_rgba(16,20,35,0.42)] backdrop-blur-xl",

  rune:
    "border-[#c9bfea]/28 bg-[linear-gradient(135deg,rgba(25,35,52,0.78),rgba(16,20,35,0.62),rgba(43,50,72,0.68))] text-[#f7efd7] shadow-[0_0_80px_rgba(105,130,170,0.16)] backdrop-blur-xl",

  memory:
    "border-[#e8d8a8]/35 bg-[#f3e9d2]/92 text-[#1a1f2e] shadow-[0_18px_60px_rgba(16,20,35,0.3)]",

  crest:
    "border-[#e8d8a8]/30 bg-[#101423]/62 text-[#f7efd7] shadow-[0_0_90px_rgba(232,216,168,0.16)] backdrop-blur-xl",
};

function RuneCorner({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const positionClass =
    position === "tl"
      ? "left-4 top-4 border-l border-t"
      : position === "tr"
        ? "right-4 top-4 border-r border-t"
        : position === "bl"
          ? "bottom-4 left-4 border-b border-l"
          : "bottom-4 right-4 border-b border-r";

  return (
    <span
      className={`pointer-events-none absolute h-5 w-5 border-[#e8d8a8]/38 ${positionClass}`}
    />
  );
}

export default function FantasyCard({
  children,
  className = "",
  variant = "glass",
  hover = true,
}: FantasyCardProps) {
  const hoverMotion = hover ? { y: -6, scale: 1.01 } : undefined;

  return (
    <motion.div
      whileHover={hoverMotion}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-[1.75rem] border p-6 ${variantClasses[variant]} ${className}`}
    >
      {/* soft internal wash */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_18%_0%,rgba(232,216,168,0.16),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(201,191,234,0.12),transparent_32%)]" />

      {/* inner border */}
      <div className="pointer-events-none absolute inset-[7px] rounded-[1.45rem] border border-[#f7efd7]/8" />

      {/* corner ornaments */}
      <RuneCorner position="tl" />
      <RuneCorner position="tr" />
      <RuneCorner position="bl" />
      <RuneCorner position="br" />

      {/* hover shimmer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-28 top-0 h-full w-28 rotate-12 bg-gradient-to-r from-transparent via-[#e8d8a8]/18 to-transparent blur-md transition-transform duration-700 group-hover:translate-x-[820%]" />
      </div>

      {/* tiny paper/noise texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-soft-light bg-[radial-gradient(circle_at_20%_20%,#fff_0_1px,transparent_1px),radial-gradient(circle_at_70%_60%,#fff_0_1px,transparent_1px)] bg-[length:18px_18px]" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}