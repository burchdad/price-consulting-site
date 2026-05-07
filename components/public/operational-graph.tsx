"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// SVG coordinate space: 700 × 420
const NODE_DATA = [
  {
    id: "civilian",
    x: 120,
    y: 100,
    label: "Civilian Agencies",
    stat: "15+ agencies advised",
    detail:
      "GSA, HHS, DHS, and more — acquisition strategy through contract closeout.",
  },
  {
    id: "dod",
    x: 310,
    y: 60,
    label: "DoD Programs",
    stat: "8+ program offices",
    detail:
      "Security requirements, DFARS compliance, and source selection support for defense IT.",
  },
  {
    id: "primes",
    x: 520,
    y: 120,
    label: "Large Primes",
    stat: "200+ proposals",
    detail:
      "Teaming strategy, bid/no-bid analysis, and proposal development for top-tier contractors.",
  },
  {
    id: "subs",
    x: 580,
    y: 290,
    label: "Subcontractors",
    stat: "50+ engagements",
    detail:
      "Positioning, workshare negotiation, and compliance readiness for emerging GovCon players.",
  },
  {
    id: "smb",
    x: 330,
    y: 340,
    label: "Small Businesses",
    stat: "35% avg. win-rate lift",
    detail:
      "Set-aside strategy, CMMC/FedRAMP readiness, and agency relationship development.",
  },
] as const;

type NodeId = (typeof NODE_DATA)[number]["id"];

// Tooltip anchor: prefer above or below based on y position
function tooltipAnchor(y: number): "top" | "bottom" {
  return y > 200 ? "top" : "bottom";
}

export function OperationalGraph() {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<NodeId | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const activeNode = NODE_DATA.find((n) => n.id === hovered) ?? null;

  return (
    <motion.div
      className="relative w-full overflow-visible"
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        setParallax({
          x: ((event.clientX - rect.left) / rect.width - 0.5) * 8,
          y: ((event.clientY - rect.top) / rect.height - 0.5) * 8,
        });
      }}
      onMouseLeave={() => {
        setParallax({ x: 0, y: 0 });
        setHovered(null);
      }}
      animate={reduceMotion ? undefined : { x: parallax.x, y: parallax.y }}
      transition={{ type: "spring", stiffness: 45, damping: 20, mass: 0.8 }}
    >
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(255,43,43,0.18),transparent_50%)]" />

      {/* Scan sweep */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent via-red-500/[0.07] to-transparent"
        initial={reduceMotion ? undefined : { x: "-40%", opacity: 0 }}
        animate={reduceMotion ? undefined : { x: ["−40%", "160%"], opacity: [0, 1, 0] }}
        transition={{ duration: 2.2, ease: "linear", repeat: Infinity, repeatDelay: 7 }}
      />

      <svg
        viewBox="0 0 700 420"
        className="relative w-full"
        style={{ height: "auto" }}
      >
        {/* Primary path */}
        <motion.path
          d="M120 100 L310 60 L520 120 L580 290"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 12"
          initial={reduceMotion ? undefined : { pathLength: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, strokeDashoffset: [0, -40] }}
          transition={{
            pathLength: { duration: 2, ease: "easeOut" },
            strokeDashoffset: { duration: 18, ease: "linear", repeat: Infinity },
          }}
        />
        {/* Secondary path */}
        <motion.path
          d="M310 60 L330 340 L580 290"
          stroke="rgba(255,43,43,0.5)"
          strokeWidth="1.3"
          fill="none"
          strokeDasharray="5 5"
          initial={reduceMotion ? undefined : { pathLength: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, strokeDashoffset: [0, -30] }}
          transition={{
            pathLength: { duration: 2.3, ease: "easeOut", delay: 0.15 },
            strokeDashoffset: { duration: 8, ease: "linear", repeat: Infinity },
          }}
        />
        {/* Tertiary connector */}
        <motion.path
          d="M120 100 L330 340"
          stroke="rgba(255,43,43,0.2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 8"
          initial={reduceMotion ? undefined : { pathLength: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, strokeDashoffset: [0, -22] }}
          transition={{
            pathLength: { duration: 2.6, ease: "easeOut", delay: 0.3 },
            strokeDashoffset: { duration: 12, ease: "linear", repeat: Infinity },
          }}
        />

        {/* Orbiting ellipse */}
        <motion.g
          animate={reduceMotion ? undefined : { rotate: [0, 2, 0] }}
          transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
          style={{ transformOrigin: "350px 210px" }}
        >
          <motion.ellipse
            cx="350"
            cy="210"
            rx="260"
            ry="110"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
            fill="none"
            animate={reduceMotion ? undefined : { opacity: [0.1, 0.22, 0.1] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.g>

        {/* Nodes */}
        {NODE_DATA.map((node, index) => {
          const isActive = hovered === node.id;
          const anchor = tooltipAnchor(node.y);

          return (
            <g key={node.id}>
              {/* Hit-area (larger, transparent) */}
              <circle
                cx={node.x}
                cy={node.y}
                r={22}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
              />

              {/* Outer pulse ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 20 : 12}
                fill="none"
                stroke={isActive ? "rgba(255,43,43,0.55)" : "rgba(255,43,43,0.22)"}
                strokeWidth="1"
                animate={
                  reduceMotion
                    ? undefined
                    : isActive
                    ? { r: [14, 22, 14], opacity: [0.6, 1, 0.6] }
                    : { r: [10, 14, 10], opacity: [0.3, 0.55, 0.3] }
                }
                transition={{ duration: isActive ? 1.4 : 3.2, ease: "easeInOut", repeat: Infinity, delay: index * 0.4 }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                pointerEvents="none"
              />

              {/* Core dot */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 9 : 6}
                fill={isActive ? "#ff4444" : "#ff2b2b"}
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: isActive ? [1, 1.2, 1] : [1, 1.12, 1], opacity: [0.85, 1, 0.85] }
                }
                transition={{ duration: isActive ? 0.9 : 3.8, ease: "easeInOut", repeat: Infinity, delay: index * 0.45 }}
                style={{
                  transformOrigin: `${node.x}px ${node.y}px`,
                  filter: isActive ? "drop-shadow(0 0 10px rgba(255,43,43,0.9))" : "drop-shadow(0 0 4px rgba(255,43,43,0.4))",
                  cursor: "pointer",
                }}
                pointerEvents="none"
              />

              {/* Node label (always visible) */}
              <text
                x={node.x}
                y={node.y + (anchor === "top" ? -18 : 22)}
                textAnchor="middle"
                dominantBaseline={anchor === "top" ? "auto" : "hanging"}
                fill={isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)"}
                fontSize="10"
                fontWeight="600"
                letterSpacing="0.08em"
                fontFamily="inherit"
                style={{ textTransform: "uppercase", transition: "fill 0.2s", pointerEvents: "none" }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip card */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none absolute bottom-4 left-1/2 z-20 w-64 -translate-x-1/2 rounded-xl border border-red-500/30 bg-black/90 p-4 backdrop-blur-sm"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400">
              {activeNode.label}
            </p>
            <p className="mt-1 text-xl font-black text-white">{activeNode.stat}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-300">{activeNode.detail}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
