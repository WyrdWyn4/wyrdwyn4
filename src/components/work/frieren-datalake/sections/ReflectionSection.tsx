// src/components/work/frieren-datalake/sections/ReflectionSection.tsx

"use client";

import FantasySection from "../layout/FantasySection";
import SectionHeading from "../layout/SectionHeading";
import type { SceneId } from "../scene-map";

type ReflectionSectionProps = {
  onEnter: (sceneId: SceneId) => void;
};

export default function ReflectionSection({ onEnter }: ReflectionSectionProps) {
  return (
    <FantasySection sceneId="reflection" onEnter={onEnter}>
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading
          eyebrow="Final Chapter"
          title="At Journey’s End"
          description="I had an excellent time working with the team! Looking back, one year of work passed by in the blink of an eye. I’m grateful for the opportunity to contribute and to learn so much along the way."
          align="center"
        />
      </div>
    </FantasySection>
  );
}