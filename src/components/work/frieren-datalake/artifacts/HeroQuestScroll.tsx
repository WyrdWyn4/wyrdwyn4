"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollText, Sparkles } from "lucide-react";

type HeroQuestScrollProps = {
  logoSrc: string;
  company: string;
  role: string;
  period: string;
};

export default function HeroQuestScroll({
  logoSrc,
  company,
  role,
  period,
}: HeroQuestScrollProps) {
  return (
    <motion.aside
      whileHover={{ y: -6, rotate: 0.4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="absolute -inset-8 rounded-full bg-[#e8d8a8]/16 blur-3xl" />

      {/* scroll rods */}
      <div className="absolute -top-3 left-8 right-8 z-20 h-4 rounded-full border border-[#8a5f34]/45 bg-[linear-gradient(90deg,#6b4428,#c19a5b,#6b4428)] shadow-[0_8px_24px_rgba(16,20,35,0.25)]" />
      <div className="absolute -bottom-3 left-8 right-8 z-20 h-4 rounded-full border border-[#8a5f34]/45 bg-[linear-gradient(90deg,#6b4428,#c19a5b,#6b4428)] shadow-[0_8px_24px_rgba(16,20,35,0.25)]" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d4b978]/70 bg-[#f3e9d2]/92 p-7 text-[#1a1f2e] shadow-[0_24px_80px_rgba(16,20,35,0.38)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.55),transparent_34%),radial-gradient(circle_at_85%_100%,rgba(122,83,44,0.18),transparent_32%)]" />

        {/* paper lines */}
        <div className="absolute inset-x-8 top-24 h-px bg-[#8a6740]/15" />
        <div className="absolute inset-x-8 top-40 h-px bg-[#8a6740]/12" />
        <div className="absolute inset-x-8 top-56 h-px bg-[#8a6740]/10" />

        <div className="relative z-10">
          <div className="mb-6 flex items-start justify-between gap-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8a6740]/25 bg-[#fff6dd] text-[#6a4a2d] shadow-sm">
              <ScrollText size={23} />
            </div>

            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#d4b978]/45 bg-white/90 shadow-[0_10px_28px_rgba(16,20,35,0.18)]">
              <Image
                src={logoSrc}
                alt={`${company} logo`}
                fill
                className="object-contain p-3"
                sizes="80px"
              />
            </div>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#7a5c36]">
            Sealed Work Term Notice
          </p>

          <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1a1f2e]">
            {company}
          </h3>

          <div className="my-5 h-px w-full bg-gradient-to-r from-[#7a5c36]/45 via-[#7a5c36]/15 to-transparent" />

          <p className="text-sm leading-7 text-[#283143]/88">
            A formal archive entry for the role of{" "}
            <span className="font-semibold text-[#1a1f2e]">{role}</span>,
            focused on warehouse data preparation, schema standardization,
            cross-domain splitting, and reliable lakehouse engineering.
          </p>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="rounded-full border border-[#8a6740]/25 bg-[#fff6dd]/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#6a4a2d]">
              {period}
            </span>

            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#8f312d]/35 bg-[radial-gradient(circle_at_35%_30%,#b45a50,#7a2d31_70%)] text-[#f7d8bd] shadow-[0_8px_25px_rgba(86,24,28,0.3)]">
              <Sparkles size={17} />
            </span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}