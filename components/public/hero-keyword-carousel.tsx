"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const keywordRows = [
  ["Authority", "Acquisition Strategy", "Mission Continuity", "Proposal Excellence"],
  ["Contract Administration", "Program Rigor", "Federal Compliance", "Execution Readiness"],
  ["Technical Integration", "Stakeholder Alignment", "Delivery Confidence", "Measured Outcomes"],
];

export function HeroKeywordCarousel() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % keywordRows.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative border-y border-red-500/20 bg-black/35">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl items-center px-4 py-3 sm:px-6 lg:px-8">
        <p className="min-h-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-300 sm:text-xs">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className="inline-block"
              initial={reduceMotion ? undefined : { y: 8, opacity: 0 }}
              animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { y: -8, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {keywordRows[index].join(" • ")}
            </motion.span>
          </AnimatePresence>
        </p>
      </div>
    </div>
  );
}
