"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FantasySection from "../layout/FantasySection";
import SectionHeading from "../layout/SectionHeading";
import { media } from "../content";
import type { SceneId } from "../scene-map";

type ImpactSectionProps = {
  onEnter: (sceneId: SceneId) => void;
};

export default function ImpactSection({ onEnter }: ImpactSectionProps) {
  return (
    <FantasySection sceneId="impact" onEnter={onEnter}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <SectionHeading
            eyebrow="Chapter V"
            title="The Fellowship"
            description="The team structure behind the data platform group during my work term."
            align="center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-5xl"
        >
          <Image
            src={media.orgChart}
            alt="Org chart of the Nasdaq Verafin data platform team"
            width={1400}
            height={1100}
            className="h-auto w-full drop-shadow-[0_24px_70px_rgba(8,12,24,0.55)]"
            sizes="(max-width: 768px) 100vw, 1000px"
          />
        </motion.div>
      </div>
    </FantasySection>
  );
}