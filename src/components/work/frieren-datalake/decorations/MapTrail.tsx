// src/components/work/frieren-datalake/decorations/MapTrail.tsx

"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MapTrail() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 520"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M130 340 C220 230, 315 260, 380 175 C455 75, 575 120, 610 235 C650 365, 770 350, 875 170"
        fill="none"
        stroke="rgba(105,70,35,0.26)"
        strokeWidth="16"
        strokeLinecap="round"
      />

      <motion.path
        d="M130 340 C220 230, 315 260, 380 175 C455 75, 575 120, 610 235 C650 365, 770 350, 875 170"
        fill="none"
        stroke="rgba(116,77,35,0.75)"
        strokeWidth="4"
        strokeDasharray="10 14"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
        whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      <motion.path
        d="M130 340 C220 230, 315 260, 380 175 C455 75, 575 120, 610 235 C650 365, 770 350, 875 170"
        fill="none"
        stroke="rgba(232,216,168,0.42)"
        strokeWidth="2"
        strokeDasharray="2 22"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0 }}
        whileInView={reduceMotion ? undefined : { pathLength: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 1.7, delay: 0.2, ease: "easeInOut" }}
      />
    </svg>
  );
}