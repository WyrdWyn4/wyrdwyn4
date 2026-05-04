// src/components/work/frieren-datalake/decorations/PaperTape.tsx

type PaperTapeProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  rotate?: number;
};

export default function PaperTape({
  position = "top-left",
  rotate = -7,
}: PaperTapeProps) {
  const positionClass =
    position === "top-left"
      ? "-left-5 -top-3"
      : position === "top-right"
        ? "-right-5 -top-3"
        : position === "bottom-left"
          ? "-bottom-3 -left-5"
          : "-bottom-3 -right-5";

  return (
    <span
      className={`pointer-events-none absolute ${positionClass} z-20 h-8 w-24 rounded-sm border border-[#d8c79e]/40 bg-[#f6e7ba]/72 shadow-[0_8px_20px_rgba(16,20,35,0.12)] backdrop-blur-sm`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    />
  );
}