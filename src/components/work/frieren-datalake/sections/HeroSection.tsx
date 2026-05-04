"use client";

import Link from "next/link";
import { ArrowDown, ArrowLeft, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import FantasySection from "../layout/FantasySection";
import GlowingBadge from "../layout/GlowingBadge";
import RuneDivider from "../layout/RuneDivider";
import HeroScrollCard from "../artifacts/HeroScrollCard";
import { experience, media } from "../content";
import type { SceneId } from "../scene-map";

type HeroSectionProps = {
  onEnter: (sceneId: SceneId) => void;
};

export default function HeroSection({ onEnter }: HeroSectionProps) {
  return (
    <FantasySection sceneId="hero" onEnter={onEnter} className="pt-32">
      <div className="grid min-h-[72vh] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative max-w-4xl"
        >
          <div className="pointer-events-none absolute -inset-x-12 -inset-y-10 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_35%_40%,rgba(16,20,35,0.36),rgba(16,20,35,0.18)_45%,transparent_75%)] blur-3xl" />
          <Link
            href="/work"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e8d8a8]/30 bg-[#101423]/45 px-4 py-2 text-sm text-[#f3e9d2] backdrop-blur-md transition hover:border-[#e8d8a8]/70 hover:bg-[#e8d8a8]/10"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>

          <p className="mb-5 font-mono text-xs uppercase tracking-[0.45em] text-[#e8d8a8]">
            {experience.company}
          </p>

          <h1 className="font-serif text-5xl leading-[0.92] text-[#f7efd7] drop-shadow-[0_8px_28px_rgba(16,20,35,0.7)] md:text-7xl lg:text-8xl">
            {experience.role}
          </h1>

          <div className="max-w-xl">
            <RuneDivider />
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[#e7e4df] md:text-xl">
            {experience.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#a8c7a1]/35 bg-[#a8c7a1]/10 px-4 py-2 text-sm text-[#dcefd2] backdrop-blur-md">
              <Calendar size={15} />
              {experience.period}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#c9bfea]/35 bg-[#c9bfea]/10 px-4 py-2 text-sm text-[#eee8ff] backdrop-blur-md">
              <MapPin size={15} />
              {experience.location}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <GlowingBadge>Lakehouse</GlowingBadge>
            <GlowingBadge>Warehouse Prep</GlowingBadge>
            <GlowingBadge>Spark</GlowingBadge>
            <GlowingBadge>AWS</GlowingBadge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <HeroScrollCard
            scrollSrc={media.heroScroll}
            logoSrc={media.logo}
            company={experience.company}
            role={experience.role}
            period={experience.period}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-[#f7efd7]/70 md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
            Begin Journey
          </span>
          <ArrowDown size={18} />
        </motion.div>
      </div>
    </FantasySection>
  );
}