import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

/** Bloc de texte qui apparaît à `from` et se retire à `until` (fondu + flou). */
export const Beat: React.FC<{
  from: number;
  until?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ from, until, children, style }) => {
  const frame = useCurrentFrame();
  const out =
    until === undefined
      ? 1
      : interpolate(frame, [until, until + 16], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
  if (frame < from - 2 || out === 0) return null;
  return (
    <div
      style={{
        opacity: out,
        filter: `blur(${(1 - out) * 10}px)`,
        transform: `translateY(${(1 - out) * -14}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Léger mouvement de caméra (respiration) commun à toutes les scènes. */
export const useCamera = (opts?: { zoom?: number; pan?: number; from?: number }) => {
  const frame = useCurrentFrame();
  const zoom = opts?.zoom ?? 0.06;
  const pan = opts?.pan ?? 10;
  const from = opts?.from ?? 1;
  const t = frame / 240;
  return {
    transform: `scale(${from + zoom * t}) translate(${Math.sin(frame / 130) * pan}px, ${Math.cos(frame / 160) * pan * 0.6}px)`,
  } as React.CSSProperties;
};
