"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { media } from "../content";

const bookSerif = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

type OverviewFieldBookProps = {
  company: string;
  focus: string;
  location: string;
  body: string;
};

function splitBodyAcrossPages(text: string) {
  const sentences =
    text.match(/[^.!?]+[.!?]+|\S+$/g)?.map((sentence) => sentence.trim()) ?? [
      text,
    ];

  const midpoint = Math.ceil(sentences.length / 2);

  return {
    leftPage: sentences.slice(0, midpoint).join(" "),
    rightPage: sentences.slice(midpoint).join(" "),
  };
}

export default function OverviewFieldBook({
  company,
  focus,
  location,
  body,
}: OverviewFieldBookProps) {
  const { leftPage, rightPage } = splitBodyAcrossPages(body);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[760px]"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-[#e8d8a8]/10 blur-3xl" />

      {/* Desktop / tablet book layout */}
      <div className="relative hidden md:block">
        <Image
          src={media.openBook}
          alt="Open field note book"
          width={1056}
          height={768}
          className="h-auto w-full drop-shadow-[0_24px_75px_rgba(8,12,24,0.5)]"
          sizes="(max-width: 768px) 100vw, 760px"
        />

        {/* Left page */}
        <div className="absolute left-[11.8%] top-[13%] h-[69%] w-[36%]">
          <div className="flex h-full flex-col px-5">
            <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#7a5c36]/70">
              Field Note
            </p>

            <div className="my-4 h-px w-2/3 bg-[#7a5c36]/18" />

            <h3
              className={`${bookSerif.className} text-[clamp(1.35rem,1.65vw,1.95rem)] font-semibold leading-[1.05] text-[#2f2117]`}
            >
              A field note from the archive
            </h3>

            <p
              className={`${bookSerif.className} mt-4 text-[clamp(0.86rem,0.9vw,1rem)] leading-[1.34] text-[#3f2b1b]/90`}
            >
              {leftPage}
            </p>

            <div className="mt-auto grid gap-2 pt-4">
              <BookStamp label="Company" value={company} />
              <BookStamp label="Focus" value={focus} />
            </div>
          </div>
        </div>

        {/* Right page */}
        <div className="absolute right-[8.8%] top-[13%] h-[69%] w-[36%]">
          <div className="flex h-full flex-col px-5">
            <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#7a5c36]/70">
              Continuation
            </p>

            <div className="my-4 h-px w-2/3 bg-[#7a5c36]/18" />

            <h3
              className={`${bookSerif.className} text-[clamp(1rem,1.45vw,1.75rem)] font-semibold leading-[1.08] text-[#2f2117]`}
            >
              Notes on the data journey
            </h3>

            <p
              className={`${bookSerif.className} mt-4 text-[clamp(0.82rem,0.9vw,1rem)] leading-[1.34] text-[#3f2b1b]/90`}
            >
              {rightPage}
            </p>

            <div className="mt-auto grid gap-2 pt-4">
              <BookStamp label="Location" value={location} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout: field note only, no book image */}
      <div className="relative md:hidden">
        <div className="relative z-10 mx-auto max-w-[360px] overflow-hidden rounded-[1.4rem] border border-[#d6b879]/35 bg-[#f3e9d2]/94 p-4 text-[#2f2117] shadow-[0_18px_45px_rgba(8,12,24,0.36)] backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.45),transparent_32%)]" />

          <div className="relative z-10">
            <p className="font-mono text-[7px] uppercase tracking-[0.24em] text-[#7a5c36]/75">
              Field Note
            </p>

            <h3
              className={`${bookSerif.className} mt-2 text-[1.25rem] font-semibold leading-tight text-[#2f2117]`}
            >
              A field note from the archive
            </h3>

            <p
              className={`${bookSerif.className} mt-3 text-[0.78rem] leading-[1.55] text-[#3f2b1b]/90`}
            >
              I worked on the warehouse data preparation layer of a regulated
              fintech lakehouse platform, with emphasis on source-domain
              transformation, schema standardization, cross-domain data
              splitting, object identifier linking, incremental/versioned
              outputs, and validation workflows.
            </p>

            <div className="mt-4 grid gap-1.5">
              <BookStamp label="Company" value={company} />
              <BookStamp label="Focus" value={focus} />
              <BookStamp label="Location" value={location} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BookStamp({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#7a5c36]/16 bg-[#fff4d5]/35 px-3 py-1.5">
      <p className="font-mono text-[6.5px] uppercase tracking-[0.18em] text-[#7a5c36]/65">
        {label}
      </p>

      <p
        className={`${bookSerif.className} mt-0.5 text-[0.78rem] font-semibold leading-tight text-[#2f2117]`}
      >
        {value}
      </p>
    </div>
  );
}