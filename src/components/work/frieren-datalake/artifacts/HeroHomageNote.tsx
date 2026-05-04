"use client";

import { motion } from "framer-motion";

export default function HeroHomageNote() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
      className="pointer-events-none fixed right-8 top-24 z-[60] hidden max-w-[28rem] text-right md:block"
    >
      <p className="font-serif text-lg leading-7 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] [text-shadow:0_0_18px_rgba(0,0,0,0.85)]">
        30 years after the death of Himmel the Hero,
        <br />
        Near Hebron Way, St. John’s, Newfoundland
      </p>

      <p className="mt-4 text-sm leading-7 text-white/90 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] [text-shadow:0_0_18px_rgba(0,0,0,0.85)]">
        勇者ヒンメルの死から30年後、
        <br />
        ニューファンドランド州セントジョンズ、ヘブロン・ウェイ付近
      </p>
    </motion.aside>
  );
}