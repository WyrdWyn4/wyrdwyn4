// src/components/work/frieren-datalake/decorations/CompassRose.tsx

export default function CompassRose() {
  return (
    <div className="pointer-events-none absolute left-8 top-8 h-24 w-24 opacity-55">
      <div className="absolute inset-0 rounded-full border border-[#8a6740]/35" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#8a6740]/40" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#8a6740]/40" />
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#8a6740]/30" />
      <span className="absolute left-1/2 top-1 -translate-x-1/2 font-serif text-xs text-[#5c4328]">
        N
      </span>
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-serif text-xs text-[#5c4328]">
        S
      </span>
      <span className="absolute left-1 top-1/2 -translate-y-1/2 font-serif text-xs text-[#5c4328]">
        W
      </span>
      <span className="absolute right-1 top-1/2 -translate-y-1/2 font-serif text-xs text-[#5c4328]">
        E
      </span>
    </div>
  );
}