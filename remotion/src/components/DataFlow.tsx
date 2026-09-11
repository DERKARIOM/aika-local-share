import React from "react";
import { interpolate, random, useCurrentFrame } from "remotion";

export type Pt = { x: number; y: number };

const bez = (p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt => {
  const u = 1 - t;
  const a = u * u * u,
    b = 3 * u * u * t,
    c = 3 * u * t * t,
    d = t * t * t;
  return {
    x: a * p0.x + b * p1.x + c * p2.x + d * p3.x,
    y: a * p0.y + b * p1.y + c * p2.y + d * p3.y,
  };
};

/** Flux de données lumineux le long d'une courbe (liaison directe, sans cloud). */
export const DataFlow: React.FC<{
  from: Pt;
  to: Pt;
  bow?: number;
  width: number;
  height: number;
  count?: number;
  speed?: number;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ from, to, bow = 0.22, width, height, count = 16, speed = 80, delay = 0, style }) => {
  const frame = useCurrentFrame() - delay;
  const reveal = interpolate(frame, [0, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy);
  const nx = (-dy / len) * len * bow;
  const ny = (dx / len) * len * bow;
  const p1 = { x: from.x + dx * 0.3 + nx, y: from.y + dy * 0.3 + ny };
  const p2 = { x: from.x + dx * 0.7 + nx, y: from.y + dy * 0.7 + ny };
  const d = `M ${from.x} ${from.y} C ${p1.x} ${p1.y} ${p2.x} ${p2.y} ${to.x} ${to.y}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", ...style }}
    >
      <defs>
        <linearGradient id="flowline" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#7FE3C0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2A93F5" stopOpacity="0.22" />
        </linearGradient>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="url(#flowline)"
        strokeWidth={2.5}
        strokeDasharray="10 16"
        strokeDashoffset={-frame * 1.8}
        opacity={reveal * 0.9}
      />
      {new Array(count).fill(0).map((_, i) => {
        const seed = random(`particle-${i}`);
        const t = (((frame / speed) * (0.7 + seed * 0.6) + seed) % 1 + 1) % 1;
        const pos = bez(from, p1, p2, to, t);
        const r = 2.4 + seed * 4;
        const fade = Math.sin(t * Math.PI);
        return (
          <g key={i} opacity={reveal * fade}>
            <circle cx={pos.x} cy={pos.y} r={r * 3} fill="#10B981" opacity={0.14} />
            <circle cx={pos.x} cy={pos.y} r={r} fill={seed > 0.75 ? "#2A93F5" : "#C7F7E6"} />
          </g>
        );
      })}
    </svg>
  );
};

/** Ondes de détection sur réseau local. */
export const Radar: React.FC<{ size: number; delay?: number; rings?: number }> = ({
  size,
  delay = 0,
  rings = 3,
}) => {
  const frame = useCurrentFrame() - delay;
  return (
    <div style={{ position: "absolute", width: size, height: size }}>
      {new Array(rings).fill(0).map((_, i) => {
        const t = (((frame / 110 + i / rings) % 1) + 1) % 1;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1px solid rgba(127,227,192,.5)",
              transform: `scale(${0.25 + t * 0.75})`,
              opacity: (1 - t) * 0.5,
            }}
          />
        );
      })}
    </div>
  );
};
