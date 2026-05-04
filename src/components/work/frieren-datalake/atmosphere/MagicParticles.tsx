"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = Array.from({ length: 34 }, (_, index) => {
  const left = (index * 37) % 100;
  const top = (index * 19) % 100;
  const size = 2 + (index % 4);
  const delay = (index % 10) * 0.6;
  const duration = 10 + (index % 7);

  return {
    id: index,
    left: `${left}%`,
    top: `${top}%`,
    size,
    delay,
    duration,
  };
});

export default function MagicParticles() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[#e8d8a8] shadow-[0_0_14px_rgba(232,216,168,0.75)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0 }}
          animate={
            reduceMotion
              ? { opacity: 0.18 }
              : {
                  y: [-10, -85, -10],
                  x: [0, particle.id % 2 === 0 ? 16 : -16, 0],
                  opacity: [0, 0.34, 0],
                  scale: [0.7, 1.2, 0.7],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}