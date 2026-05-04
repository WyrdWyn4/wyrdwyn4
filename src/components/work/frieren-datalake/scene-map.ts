import { media } from "./content";

export const scenes = {
  hero: {
    image: media.scenes.castle,
    alt: "Fantasy castle overlooking a quiet town",
    overlay: "from-[#101423]/50 via-[#101423]/35 to-[#101423]/95",
  },
  overview: {
    image: media.scenes.bridge,
    alt: "Forest bridge under soft morning light",
    overlay: "from-[#101423]/60 via-[#1f2f2a]/35 to-[#101423]/95",
  },
  highlights: {
    image: media.scenes.cabin,
    alt: "Quiet forest cabin surrounded by warm light",
    overlay: "from-[#101423]/65 via-[#253823]/35 to-[#101423]/95",
  },
  stack: {
    image: media.scenes.ruins,
    alt: "Fantasy ruins under a bright sky",
    overlay: "from-[#101423]/70 via-[#26202d]/35 to-[#101423]/95",
  },
  pipeline: {
    image: media.scenes.shrine,
    alt: "Luminous forest shrine with soft green light",
    overlay: "from-[#101423]/70 via-[#193022]/40 to-[#101423]/95",
  },
  impact: {
    image: media.scenes.shrine,
    alt: "Glowing forest scene",
    overlay: "from-[#101423]/65 via-[#1c3927]/40 to-[#101423]/95",
  },
  gallery: {
    image: media.scenes.cabin,
    alt: "Peaceful forest memory scene",
    overlay: "from-[#101423]/75 via-[#101423]/50 to-[#101423]/95",
  },
  reflection: {
    image: media.scenes.sunset,
    alt: "Sunset valley viewed from a stone overlook",
    overlay: "from-[#101423]/65 via-[#38243a]/40 to-[#101423]/95",
  },
} as const;

export type SceneId = keyof typeof scenes;