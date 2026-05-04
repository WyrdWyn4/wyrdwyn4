"use client";

import { Database, GitBranch, ShieldCheck, Sparkles } from "lucide-react";
import FantasySection from "../layout/FantasySection";
import SectionHeading from "../layout/SectionHeading";
import OpenGrimoire from "../artifacts/OpenGrimoire";
import { highlights } from "../content";
import type { SceneId } from "../scene-map";

type HighlightsSectionProps = {
  onEnter: (sceneId: SceneId) => void;
};

const icons = [Sparkles, GitBranch, Database, ShieldCheck];

export default function HighlightsSection({ onEnter }: HighlightsSectionProps) {
  return (
    <FantasySection sceneId="highlights" onEnter={onEnter}>
      <div className="space-y-10">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Chapter II"
            title="The Work Behind the Magic"
            description="A grimoire-style archive of the main engineering themes from the internship: warehouse preparation, cross-domain splitting, validation, and cloud-based debugging."
            align="center"
          />
        </div>

        <OpenGrimoire entries={highlights} icons={icons} />
      </div>
    </FantasySection>
  );
}