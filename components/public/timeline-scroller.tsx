"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { TimelineItem } from "@/lib/data/timeline";

const DWELL_MS = 4200;

interface Props {
  items: TimelineItem[];
}

export function TimelineScroller({ items }: Props) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset the progress key whenever active changes so the bar re-animates
  const [progressKey, setProgressKey] = useState(0);

  const goTo = (idx: number, direction: 1 | -1 = 1) => {
    setDir(direction);
    setActive(idx);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    if (paused || reduced) return;
    intervalRef.current = setTimeout(() => {
      const next = (active + 1) % items.length;
      goTo(next, 1);
    }, DWELL_MS);
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [active, paused, reduced, items.length]);

  const item = items[active];

  const variants = {
    enter: (d: number) => ({
      x: reduced ? 0 : d > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: reduced ? 0 : d > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Year rail ──────────────────────────────────────────────── */}
      <div className="relative flex items-center gap-0">
        {/* connecting line */}
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
        {/* filled line up to active */}
        <motion.div
          className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-red-500/70 origin-left"
          animate={{ scaleX: (active + 1) / items.length }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ width: "100%" }}
        />

        {items.map((t, i) => (
          <button
            key={t.year}
            onClick={() => goTo(i, i > active ? 1 : -1)}
            className="group relative z-10 flex flex-1 flex-col items-center gap-2 py-3"
            aria-label={`Go to ${t.year}`}
            aria-current={i === active ? "true" : undefined}
          >
            <span
              className={`block h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                i <= active
                  ? "border-red-500 bg-red-500 shadow-[0_0_10px_rgba(255,43,43,0.6)]"
                  : "border-white/30 bg-black group-hover:border-red-400"
              }`}
            />
            <span
              className={`text-xs font-bold tracking-[0.08em] transition-colors duration-200 ${
                i === active ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
              }`}
            >
              {t.year}
            </span>
          </button>
        ))}
      </div>

      {/* ── Card ───────────────────────────────────────────────────── */}
      <div className="relative mt-10 min-h-[220px] overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduced ? 0 : 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid gap-8 lg:grid-cols-[1fr_2fr]"
          >
            {/* Year + title */}
            <div>
              <p className="text-7xl font-black leading-none tracking-tight text-red-500/20 lg:text-9xl">
                {item.year}
              </p>
              <h3 className="mt-2 text-2xl font-black uppercase leading-tight text-white lg:text-3xl">
                {item.title}
              </h3>
            </div>

            {/* Detail + step counter */}
            <div className="flex flex-col justify-center">
              <p className="text-lg text-zinc-300 leading-relaxed lg:text-xl">{item.detail}</p>

              {/* prev / next */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => goTo((active - 1 + items.length) % items.length, -1)}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 transition hover:border-red-500/50 hover:text-red-300"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => goTo((active + 1) % items.length, 1)}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 transition hover:border-red-500/50 hover:text-red-300"
                >
                  Next →
                </button>
                <span className="ml-auto text-xs tabular-nums text-zinc-600">
                  {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Auto-advance progress bar ───────────────────────────────── */}
      {!paused && !reduced && (
        <motion.div
          key={progressKey}
          className="mt-6 h-px bg-red-500/50 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: DWELL_MS / 1000, ease: "linear" }}
        />
      )}
      {(paused || reduced) && (
        <div className="mt-6 h-px bg-white/10" />
      )}
    </div>
  );
}
