// src/components/work/frieren-datalake/artifacts/RuneStone.tsx

"use client";

type RuneStoneProps = {
  value: string;
  label: string;
  description: string;
  index: number;
};

export default function RuneStone({
  value,
  label,
  description,
  index,
}: RuneStoneProps) {
  const tilt =
    index === 0 ? "-rotate-2" : index === 1 ? "rotate-1" : index === 2 ? "-rotate-1" : "rotate-2";

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.4rem] border border-[#8fa0b8]/25 bg-[linear-gradient(135deg,#2b3240,#171c27_58%,#34303a)] p-6 text-center shadow-[0_18px_55px_rgba(16,20,35,0.4)] transition hover:-translate-y-2 hover:border-[#e8d8a8]/35 ${tilt}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_105%,rgba(232,160,80,0.24),transparent_42%)]" />
      <div className="absolute inset-[7px] rounded-[1.05rem] border border-[#f7efd7]/8" />

      <div className="relative z-10">
        <p className="font-serif text-5xl text-[#f7efd7] drop-shadow-[0_0_18px_rgba(232,216,168,0.2)]">
          {value}
        </p>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.26em] text-[#e8d8a8]">
          {label}
        </p>

        <div className="mx-auto my-4 h-px w-20 bg-gradient-to-r from-transparent via-[#e8d8a8]/50 to-transparent" />

        <p className="text-sm leading-7 text-[#d7d9e5]">{description}</p>
      </div>
    </article>
  );
}