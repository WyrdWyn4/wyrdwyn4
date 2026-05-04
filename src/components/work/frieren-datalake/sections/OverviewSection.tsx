"use client";

import FantasySection from "../layout/FantasySection";
import SectionHeading from "../layout/SectionHeading";
import OverviewFieldBook from "../artifacts/OverviewFieldBook";
import { experience } from "../content";
import type { SceneId } from "../scene-map";

type OverviewSectionProps = {
  onEnter: (sceneId: SceneId) => void;
};

export default function OverviewSection({ onEnter }: OverviewSectionProps) {
  return (
    <FantasySection sceneId="overview" onEnter={onEnter}>
      <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <SectionHeading
          eyebrow="Chapter I"
          title="The Journey Begins"
          description="The internship is presented as a journey through a data lake: calm on the surface, but supported by layered systems, processing logic, and cloud infrastructure underneath."
        />

        <OverviewFieldBook
          company={experience.company}
          focus="Cloud data systems"
          location={experience.location}
          body={experience.longSummary}
        />
      </div>
    </FantasySection>
  );
}