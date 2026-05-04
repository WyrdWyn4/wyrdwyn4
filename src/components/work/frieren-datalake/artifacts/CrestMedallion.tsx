// src/components/work/frieren-datalake/artifacts/CrestMedallion.tsx

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type CrestMedallionProps = {
  logoSrc: string;
  company: string;
  label?: string;
};

export default function CrestMedallion({
  logoSrc,
  company,
  label = "Work Term Archive",
}: CrestMedallionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
      <motion.div
        className="absolute h-80 w-80 rounded-full border border-[#e8d8a8]/20"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-64 w-64 rounded-full border border-dashed border-[#c9bfea]/25"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative overflow-hidden rounded-[2.25rem] border border-[#e8d8a8]/35 bg-[#101423]/62 p-8 text-center shadow-[0_0_90px_rgba(232,216,168,0.16)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,216,168,0.17),transparent_36%)]" />

        <div className="relative mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-[1.75rem] border border-[#e8d8a8]/25 bg-white/90 shadow-[0_12px_35px_rgba(16,20,35,0.22)]">
          <Image
            src={logoSrc}
            alt={`${company} logo`}
            fill
            className="object-contain p-4"
            sizes="112px"
          />
        </div>

        <p className="relative font-mono text-[10px] uppercase tracking-[0.38em] text-[#e8d8a8]">
          {label}
        </p>

        <p className="relative mt-4 text-sm leading-7 text-[#d7d9e5]">
          A sealed record of lakehouse preparation, schema mapping, relationship
          preservation, validation, and production-style workflow design.
        </p>
      </div>
    </div>
  );
}