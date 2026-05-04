"use client";

import { useState } from "react";
import BackgroundMusic from "./atmosphere/BackgroundMusic";
import SceneBackground from "./atmosphere/SceneBackground";
import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import HighlightsSection from "./sections/HighlightsSection";
import TechStackSection from "./sections/TechStackSection";
import PipelineSection from "./sections/PipelineSection";
import ImpactSection from "./sections/ImpactSection";
import GallerySection from "./sections/GallerySection";
import ReflectionSection from "./sections/ReflectionSection";
import HeroHomageNote from "./artifacts/HeroHomageNote";
import type { SceneId } from "./scene-map";

export default function FrierenDatalakePage() {
  const [activeScene, setActiveScene] = useState<SceneId>("hero");

  return (
    <main className="relative h-screen overflow-y-auto overflow-x-hidden bg-[#101423] text-[#f7efd7]">
      <SceneBackground activeScene={activeScene} />
      <HeroHomageNote />
      <BackgroundMusic />

      <div className="relative z-10">
        <HeroSection onEnter={setActiveScene} />
        <OverviewSection onEnter={setActiveScene} />
        <HighlightsSection onEnter={setActiveScene} />
        <TechStackSection onEnter={setActiveScene} />
        <PipelineSection onEnter={setActiveScene} />
        <ImpactSection onEnter={setActiveScene} />
        <GallerySection onEnter={setActiveScene} />
        <ReflectionSection onEnter={setActiveScene} />
      </div>
    </main>
  );
}