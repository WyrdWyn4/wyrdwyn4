// src/components/work/frieren-datalake/sections/TechStackSection.tsx

"use client";

import FantasySection from "../layout/FantasySection";
import SectionHeading from "../layout/SectionHeading";
import CodexPanel from "../artifacts/CodexPanel";
import { techStack } from "../content";
import type { SceneId } from "../scene-map";

type TechStackSectionProps = {
  onEnter: (sceneId: SceneId) => void;
};

export default function TechStackSection({ onEnter }: TechStackSectionProps) {
  return (
    <FantasySection sceneId="stack" onEnter={onEnter}>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Chapter III"
          title="Arcane Systems"
          description="The technical stack is treated like a codex of disciplines: implementation languages, AWS infrastructure, Spark processing, lakehouse storage, validation tools, and CI/CD practices."
        />

        <CodexPanel groups={techStack} />
      </div>
    </FantasySection>
  );
}