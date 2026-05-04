import RuneDivider from "./RuneDivider";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.42em] text-[#e8d8a8]">
        {eyebrow}
      </p>

      <h2 className="font-serif text-4xl leading-[0.98] text-[#f7efd7] md:text-6xl">
        {title}
      </h2>

      <div className={isCenter ? "mx-auto max-w-md" : "max-w-xl"}>
        <RuneDivider />
      </div>

      {description && (
        <p className="text-base leading-8 text-[#d7d9e5] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}