"use client";

import { motion, useReducedMotion } from "framer-motion";

type LightRaysProps = {
  visible?: boolean;
};

export default function LightRays({ visible = true }: LightRaysProps) {
  const reduceMotion = useReducedMotion();

  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
      <motion.div
        className="absolute -top-40 left-[12%] h-[120vh] w-28 rotate-[18deg] bg-gradient-to-b from-[#fff6c8]/35 via-[#fff6c8]/8 to-transparent blur-2xl"
        animate={reduceMotion ? undefined : { opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-44 left-[38%] h-[120vh] w-20 rotate-[14deg] bg-gradient-to-b from-[#d8fff0]/25 via-[#d8fff0]/8 to-transparent blur-2xl"
        animate={reduceMotion ? undefined : { opacity: [0.18, 0.38, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-52 right-[18%] h-[120vh] w-24 rotate-[20deg] bg-gradient-to-b from-[#fff8d7]/25 via-[#fff8d7]/6 to-transparent blur-2xl"
        animate={reduceMotion ? undefined : { opacity: [0.15, 0.34, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}