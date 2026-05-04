"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type HeroScrollCardProps = {
  scrollSrc: string;
  logoSrc: string;
  company: string;
  role: string;
  period: string;
};

export default function HeroScrollCard({
  scrollSrc,
  logoSrc,
  company,
  role,
  period,
}: HeroScrollCardProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -4, rotate: 0.35 }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div className="absolute -inset-8 rounded-full bg-[#e8d8a8]/18 blur-3xl" />

      <div className="relative aspect-square">
        <Image
          src={scrollSrc}
          alt="Decorative scroll"
          fill
          sizes="(max-width: 768px) 80vw, 440px"
          className="object-contain drop-shadow-[0_24px_60px_rgba(16,20,35,0.42)]"
          priority={false}
        />

        {/* Overlay content goes only inside the parchment area */}
        <div className="absolute inset-x-[17%] top-[17%] bottom-[18%] flex flex-col text-center text-[#4c321f]">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#b68b58]/35 bg-white/70 shadow-[0_10px_24px_rgba(80,54,29,0.16)]">
            <div className="relative h-11 w-11">
              <Image
                src={logoSrc}
                alt={`${company} logo`}
                fill
                sizes="44px"
                className="object-contain"
              />
            </div>
          </div>

          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8c6239]">
            Sealed Archive Entry
          </p>

          <h3 className="mt-3 font-serif text-2xl leading-tight text-[#4a2e1c] md:text-[2rem]">
            {company}
          </h3>

          <div className="mx-auto my-4 h-px w-24 bg-gradient-to-r from-transparent via-[#9d7651]/55 to-transparent" />

          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8c6239]">
            Appointed Role
          </p>

          <p className="mt-2 font-serif text-lg leading-snug text-[#3f2819] md:text-xl">
            {role}
          </p>
        </div>
      </div>
    </motion.aside>
  );
}