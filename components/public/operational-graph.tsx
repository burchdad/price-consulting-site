"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { x: 130, y: 120 },
  { x: 250, y: 90 },
  { x: 380, y: 130 },
  { x: 460, y: 200 },
  { x: 310, y: 230 },
];

export function OperationalGraph() {
  const reduceMotion = useReducedMotion();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className="floating-panel relative overflow-hidden p-5"
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width;
        const relativeY = (event.clientY - rect.top) / rect.height;
        setParallax({
          x: (relativeX - 0.5) * 6,
          y: (relativeY - 0.5) * 6,
        });
      }}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
      animate={reduceMotion ? undefined : { x: parallax.x, y: parallax.y }}
      transition={{ type: "spring", stiffness: 45, damping: 20, mass: 0.8 }}
    >
      <div className="absolute inset-0 rounded-[1.5rem] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_70%_20%,rgba(255,43,43,0.22),transparent_36%)]" />

      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-red-500/8 to-transparent"
        initial={reduceMotion ? undefined : { x: "-30%", opacity: 0 }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: ["-30%", "130%"],
                opacity: [0, 0.14, 0],
              }
        }
        transition={{
          duration: 1.8,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 6.2,
        }}
      />

      <svg viewBox="0 0 600 320" className="relative h-full w-full">
        <motion.path
          d="M130 120 L250 90 L380 130 L460 200"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.4"
          fill="none"
          strokeDasharray="7 10"
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0.2 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  pathLength: 1,
                  strokeDashoffset: [0, -32],
                  opacity: [0.28, 0.5, 0.28],
                }
          }
          transition={{
            pathLength: { duration: 1.8, ease: "easeOut" },
            strokeDashoffset: {
              duration: 16,
              ease: "linear",
              repeat: Infinity,
            },
            opacity: { duration: 5.2, ease: "easeInOut", repeat: Infinity },
          }}
        />

        <motion.path
          d="M250 90 L310 230 L460 200"
          stroke="rgba(255,43,43,0.55)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="4 4"
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0.25 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  pathLength: 1,
                  strokeDashoffset: [0, -44],
                  opacity: [0.28, 0.62, 0.28],
                }
          }
          transition={{
            pathLength: { duration: 2.1, ease: "easeOut", delay: 0.1 },
            strokeDashoffset: {
              duration: 7,
              ease: "linear",
              repeat: Infinity,
            },
            opacity: { duration: 3.8, ease: "easeInOut", repeat: Infinity },
          }}
        />

        <motion.g
          initial={reduceMotion ? undefined : { rotate: 0 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [0, 1.6, 0],
                }
          }
          transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
          style={{ transformOrigin: "300px 165px" }}
        >
          <motion.ellipse
            cx="300"
            cy="165"
            rx="220"
            ry="95"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            fill="none"
            animate={reduceMotion ? undefined : { opacity: [0.12, 0.24, 0.12] }}
            transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.g>

        {nodes.map((node, index) => (
          <motion.circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r="6"
            fill="#ff2b2b"
            initial={reduceMotion ? undefined : { scale: 1, opacity: 0.84 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.84, 1, 0.84],
                  }
            }
            transition={{
              duration: 3.8,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.45,
            }}
            whileHover={{
              scale: 1.3,
              opacity: 1,
              filter: "drop-shadow(0 0 8px rgba(255,43,43,0.55))",
            }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
