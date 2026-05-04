// src/components/work/frieren-datalake/sections/GallerySection.tsx

"use client";

import { motion } from "framer-motion";
import { galleryItems } from "../content";
import FantasySection from "../layout/FantasySection";
import SectionHeading from "../layout/SectionHeading";
import MemoryFrame from "../artifacts/MemoryFrame";
import type { SceneId } from "../scene-map";

type GallerySectionProps = {
  onEnter: (sceneId: SceneId) => void;
};

export default function GallerySection({ onEnter }: GallerySectionProps) {
  const [feature, portrait, seal] = galleryItems;

  return (
    <FantasySection sceneId="gallery" onEnter={onEnter}>
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Chapter VI"
          title="Memories from the Journey"
          description="A small visual archive using the work-term assets already present in the project."
          align="center"
        />

        <div className="grid items-center gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, rotate: -1.5, y: 28 }}
            whileInView={{ opacity: 1, rotate: -1.5, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
          >
            <MemoryFrame
              src={feature.src}
              alt={feature.alt}
              title={feature.title}
              description={feature.description}
              variant="feature"
              rotation={-1.5}
            />
          </motion.div>

          <div className="grid gap-7">
            <motion.div
              initial={{ opacity: 0, rotate: 1.8, y: 28 }}
              whileInView={{ opacity: 1, rotate: 1.8, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.72, delay: 0.1, ease: "easeOut" }}
            >
              <MemoryFrame
                src={portrait.src}
                alt={portrait.alt}
                title={portrait.title}
                description={portrait.description}
                variant="portrait"
                rotation={1.8}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: -2, y: 28 }}
              whileInView={{ opacity: 1, rotate: -2, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.72, delay: 0.18, ease: "easeOut" }}
            >
              <MemoryFrame
                src={seal.src}
                alt={seal.alt}
                title={seal.title}
                description={seal.description}
                variant="seal"
                rotation={-2}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </FantasySection>
  );
}