"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";
import { BookOpen, Sparkles } from "lucide-react";
import SpellEntry from "./SpellEntry";

type GrimoireEntry = {
  title: string;
  subtitle: string;
  type?: string;
  description: string;
  tags: string[];
};

type OpenGrimoireProps = {
  entries: GrimoireEntry[];
  icons: ElementType[];
};

export default function OpenGrimoire({ entries, icons }: OpenGrimoireProps) {
  const leftEntries = entries.slice(0, 2);
  const rightEntries = entries.slice(2, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 34, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative mx-auto max-w-6xl"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-[#e8d8a8]/14 blur-3xl" />

      {/* table/book shadow */}
      <div className="absolute -bottom-8 left-[8%] right-[8%] h-20 rounded-full bg-[#101423]/45 blur-2xl" />

      <article className="relative overflow-hidden rounded-[2.4rem] border border-[#d6b879]/65 bg-[#e5c994] p-3 shadow-[0_28px_100px_rgba(16,20,35,0.48)]">
        {/* outer leather edge */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.25),transparent_34%),linear-gradient(90deg,rgba(77,47,26,0.22),transparent_12%,transparent_88%,rgba(77,47,26,0.22))]" />

        <div className="relative grid overflow-hidden rounded-[2rem] border border-[#8a6740]/35 bg-[#ead7ad] lg:grid-cols-2">
          {/* page texture */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_20%_20%,#7a5c36_0_1px,transparent_1px),radial-gradient(circle_at_80%_60%,#7a5c36_0_1px,transparent_1px)] bg-[length:22px_22px]" />

          {/* page fold / light */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.38),transparent_28%),radial-gradient(circle_at_70%_0%,rgba(255,255,255,0.28),transparent_26%)]" />

          {/* center binding */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 hidden w-12 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(83,54,31,0.2),rgba(255,255,255,0.25),rgba(83,54,31,0.2),transparent)] lg:block" />
          <div className="pointer-events-none absolute bottom-8 left-1/2 top-8 z-30 hidden w-px -translate-x-1/2 bg-[#8a6740]/28 lg:block" />

          {/* left page */}
          <section className="relative z-10 border-b border-[#8a6740]/22 p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10 lg:pr-14">
            <PageHeader
              side="left"
              title="Applied Spells"
              subtitle="Processing and orchestration"
            />

            <div className="mt-7 space-y-5">
              {leftEntries.map((entry, index) => (
                <SpellEntry
                  key={entry.title}
                  index={index}
                  title={entry.title}
                  subtitle={entry.subtitle}
                  type={entry.type}
                  description={entry.description}
                  tags={entry.tags}
                  icon={icons[index]}
                />
              ))}
            </div>
          </section>

          {/* right page */}
          <section className="relative z-10 p-6 md:p-8 lg:p-10 lg:pl-14">
            <PageHeader
              side="right"
              title="Protective Wards"
              subtitle="Lake structure and reliability"
            />

            <div className="mt-7 space-y-5">
              {rightEntries.map((entry, localIndex) => {
                const index = localIndex + 2;

                return (
                  <SpellEntry
                    key={entry.title}
                    index={index}
                    title={entry.title}
                    subtitle={entry.subtitle}
                    type={entry.type}
                    description={entry.description}
                    tags={entry.tags}
                    icon={icons[index]}
                  />
                );
              })}
            </div>
          </section>

          {/* decorative bookmarks */}
          <div className="absolute right-8 top-0 z-30 hidden h-24 w-5 rounded-b-md bg-[#8f312d]/80 shadow-[0_8px_20px_rgba(80,24,28,0.35)] md:block" />
          <div className="absolute left-10 top-0 z-30 hidden h-16 w-4 rounded-b-md bg-[#6e8f74]/85 shadow-[0_8px_20px_rgba(30,60,45,0.28)] md:block" />
        </div>
      </article>
    </motion.div>
  );
}

function PageHeader({
  title,
  subtitle,
  side,
}: {
  title: string;
  subtitle: string;
  side: "left" | "right";
}) {
  return (
    <div className={side === "right" ? "text-left lg:text-right" : "text-left"}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          side === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#8a6740]/25 bg-[#f8e7b9]/75 text-[#6a4a2d] shadow-sm">
          {side === "left" ? <BookOpen size={20} /> : <Sparkles size={19} />}
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7a5c36]">
          Grimoire Page
        </p>
      </div>

      <h3 className="font-serif text-3xl leading-tight text-[#261b12]">
        {title}
      </h3>

      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#8a6740]/80">
        {subtitle}
      </p>

      <div
        className={`mt-5 h-px bg-gradient-to-r ${
          side === "right"
            ? "from-[#8a6740]/35 via-[#8a6740]/12 to-transparent lg:from-transparent lg:via-[#8a6740]/12 lg:to-[#8a6740]/35"
            : "from-[#8a6740]/35 via-[#8a6740]/12 to-transparent"
        }`}
      />
    </div>
  );
}