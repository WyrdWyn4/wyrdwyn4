// src/components/work/frieren-datalake/decorations/PageFold.tsx

type PageFoldProps = {
  tone?: "light" | "dark";
};

export default function PageFold({ tone = "light" }: PageFoldProps) {
  const color =
    tone === "light"
      ? "from-[#d6c49d] to-[#f7efd7]"
      : "from-[#1f2736] to-[#63708a]";

  return (
    <span
      className={`pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-2xl bg-gradient-to-br ${color} opacity-70 shadow-[-10px_10px_25px_rgba(16,20,35,0.18)]`}
      aria-hidden="true"
    />
  );
}