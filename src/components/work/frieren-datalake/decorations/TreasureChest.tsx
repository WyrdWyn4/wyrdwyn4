// src/components/work/frieren-datalake/decorations/TreasureChest.tsx

export default function TreasureChest() {
  return (
    <div className="group relative h-16 w-20">
      <div className="absolute left-1/2 top-0 h-8 w-16 -translate-x-1/2 rounded-t-2xl border border-[#7a4b27]/60 bg-[linear-gradient(135deg,#8b4f2d,#4d2d22)] shadow-[0_0_22px_rgba(232,216,168,0.18)] transition group-hover:-translate-y-1" />
      <div className="absolute bottom-0 left-1/2 h-10 w-20 -translate-x-1/2 rounded-lg border border-[#7a4b27]/70 bg-[linear-gradient(135deg,#9b5c32,#4f2d21)]" />
      <div className="absolute bottom-0 left-1/2 h-10 w-2 -translate-x-1/2 bg-[#d2b46f]/70" />
      <div className="absolute left-1/2 top-7 h-4 w-5 -translate-x-1/2 rounded-md border border-[#5c4328]/50 bg-[#e8d8a8]" />
      <div className="absolute -inset-4 -z-10 rounded-full bg-[#e8d8a8]/15 blur-2xl opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}