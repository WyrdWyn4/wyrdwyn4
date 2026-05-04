type GlowingBadgeProps = {
  children: string;
};

export default function GlowingBadge({ children }: GlowingBadgeProps) {
  return (
    <span className="rounded-full border border-[#e8d8a8]/25 bg-[#e8d8a8]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#fff2c9] shadow-[0_0_18px_rgba(232,216,168,0.08)] transition hover:border-[#e8d8a8]/60 hover:bg-[#e8d8a8]/15">
      {children}
    </span>
  );
}