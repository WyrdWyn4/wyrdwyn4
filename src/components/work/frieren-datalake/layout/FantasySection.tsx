"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import type { SceneId } from "../scene-map";

type FantasySectionProps = {
  sceneId: SceneId;
  onEnter: (sceneId: SceneId) => void;
  children: ReactNode;
  className?: string;
};

export default function FantasySection({
  sceneId,
  onEnter,
  children,
  className = "",
}: FantasySectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter(sceneId);
        }
      },
      {
        root: null,
        threshold: 0,

        // Creates a thin detection band around the middle of the viewport.
        // When a section crosses the middle of the screen, it becomes active.
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [onEnter, sceneId]);

  return (
    <motion.section
      ref={sectionRef}
      data-scene-id={sceneId}
      className={`relative flex min-h-screen items-center px-6 py-28 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </motion.section>
  );
}