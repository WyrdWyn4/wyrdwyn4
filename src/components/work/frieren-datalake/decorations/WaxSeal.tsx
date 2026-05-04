// src/components/work/frieren-datalake/decorations/WaxSeal.tsx

type WaxSealProps = {
  label?: string;
  size?: "sm" | "md";
};

export default function WaxSeal({ label = "✦", size = "md" }: WaxSealProps) {
  const sizeClass = size === "sm" ? "h-10 w-10 text-xs" : "h-14 w-14 text-sm";

  return (
    <span
      className={`inline-flex ${sizeClass} items-center justify-center rounded-full border border-[#8f312d]/40 bg-[radial-gradient(circle_at_35%_30%,#b45a50,#7a2d31_70%)] font-serif text-[#f7d8bd] shadow-[0_8px_25px_rgba(86,24,28,0.35)]`}
    >
      {label}
    </span>
  );
}