// src/components/work/frieren-datalake/artifacts/MemoryFrame.tsx

"use client";

import Image from "next/image";
import PaperTape from "../decorations/PaperTape";
import WaxSeal from "../decorations/WaxSeal";

type MemoryFrameProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  variant?: "feature" | "portrait" | "seal";
  rotation?: number;
};

export default function MemoryFrame({
  src,
  alt,
  title,
  description,
  variant = "feature",
  rotation = 0,
}: MemoryFrameProps) {
  const aspect =
    variant === "portrait"
      ? "aspect-[3/4]"
      : variant === "seal"
        ? "aspect-[4/3]"
        : "aspect-[5/3]";

  return (
    <article
      className="group relative rounded-[1.25rem] border border-[#e8d8a8]/45 bg-[#f3e9d2]/94 p-3 text-[#1a1f2e] shadow-[0_20px_60px_rgba(16,20,35,0.32)] transition hover:-translate-y-2"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <PaperTape position="top-left" rotate={-8} />
      {variant !== "feature" && <PaperTape position="top-right" rotate={7} />}

      <div className={`relative ${aspect} overflow-hidden rounded-xl bg-white`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className={`transition duration-700 group-hover:scale-105 ${
            variant === "seal" ? "object-contain p-6" : "object-cover"
          }`}
        />
      </div>

      <div className="px-3 py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-[#1a1f2e]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#2a3247]/80">
              {description}
            </p>
          </div>

          {variant === "seal" && <WaxSeal label="N" size="sm" />}
        </div>
      </div>
    </article>
  );
}