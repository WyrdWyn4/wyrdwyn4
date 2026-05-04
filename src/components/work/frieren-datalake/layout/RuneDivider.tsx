export default function RuneDivider() {
  return (
    <div className="my-7 flex items-center gap-4">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#e8d8a8] to-[#c9bfea]/70" />
      <span className="text-sm text-[#e8d8a8] drop-shadow-[0_0_10px_rgba(232,216,168,0.65)]">
        ✦
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-[#c9bfea]/70 via-[#e8d8a8]/60 to-transparent" />
    </div>
  );
}