"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MistOverlay() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh] overflow-hidden">
      <motion.div
        className="absolute -bottom-24 left-[-10%] h-72 w-[120%] rounded-[50%] bg-[#dfeee8]/25 blur-3xl"
        animate={reduceMotion ? undefined : { x: ["-4%", "4%", "-4%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-32 left-[-20%] h-80 w-[140%] rounded-[50%] bg-[#c9bfea]/15 blur-3xl"
        animate={reduceMotion ? undefined : { x: ["5%", "-5%", "5%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#101423] via-[#101423]/70 to-transparent" />
    </div>
  );
}