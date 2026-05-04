"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { scenes, type SceneId } from "../scene-map";
import MagicParticles from "./MagicParticles";
import MistOverlay from "./MistOverlay";
import LightRays from "./LightRays";

type SceneBackgroundProps = {
  activeScene: SceneId;
};

export default function SceneBackground({ activeScene }: SceneBackgroundProps) {
  const scene = scenes[activeScene];
  const reduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#101423]">
      <AnimatePresence mode="sync">
        <motion.div
          key={scene.image}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            scale: reduceMotion ? 1 : 1.025,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: reduceMotion ? 1 : 1.015,
          }}
          transition={{
            duration: reduceMotion ? 0.35 : 1.45,
            ease: "easeInOut",
          }}
        >
          <Image
            src={scene.image}
            alt={scene.alt}
            fill
            priority={activeScene === "hero"}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Main readability wash */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${scene.overlayClass}`}
      />

      {/* Soft cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_24%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(to_right,rgba(16,20,35,0.72),rgba(16,20,35,0.18),rgba(16,20,35,0.78))]" />

      {/* Fine anime-film texture */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-soft-light bg-[radial-gradient(circle_at_20%_20%,#ffffff_0_1px,transparent_1px),radial-gradient(circle_at_80%_40%,#ffffff_0_1px,transparent_1px)] bg-[length:22px_22px]" />

      <LightRays visible={scene.lightRays} />
      <MagicParticles />
      <MistOverlay />
    </div>
  );
}