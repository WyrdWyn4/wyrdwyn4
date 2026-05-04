// src/components/work/frieren-datalake/sections/PipelineSection.tsx

"use client";

import { pipelineSteps } from "../content";
import FantasySection from "../layout/FantasySection";
import SectionHeading from "../layout/SectionHeading";
import FantasyMap from "../artifacts/FantasyMap";
import type { SceneId } from "../scene-map";

type PipelineSectionProps = {
  onEnter: (sceneId: SceneId) => void;
};

export default function PipelineSection({ onEnter }: PipelineSectionProps) {
  return (
    <FantasySection sceneId="pipeline" onEnter={onEnter}>
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Chapter IV"
          title="Map of the Datalake"
          description="The workflow follows a south-to-north route across the map, turning heterogeneous financial records into standardized, linked, validated, warehouse-ready lakehouse datasets."
          align="center"
        />

        <FantasyMap steps={pipelineSteps} />
      </div>
    </FantasySection>
  );
}