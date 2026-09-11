import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "../theme";

/** Fond sombre commun à toutes les scènes : dégradés lents + grain + vignette. */
export const Stage: React.FC<{ children?: React.ReactNode; intensity?: number }> = ({
  children,
  intensity = 1,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const drift = Math.sin(frame / 90) * 40;
  const drift2 = Math.cos(frame / 120) * 60;

  return (
    <AbsoluteFill style={{ backgroundColor: C.bg, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(60% 40% at ${50 + drift / 20}% ${28 + drift / 40}%, rgba(16,185,129,${0.18 * intensity}) 0%, rgba(5,9,11,0) 70%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(50% 35% at ${28 + drift2 / 25}% ${78}%, rgba(42,147,245,${0.12 * intensity}) 0%, rgba(5,9,11,0) 70%)`,
        }}
      />
      <AbsoluteFill
        style={{
          opacity: 0.08,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: `${width / 14}px ${width / 14}px`,
          maskImage: "radial-gradient(60% 50% at 50% 50%, #000 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(60% 50% at 50% 50%, #000 0%, transparent 75%)",
        }}
      />
      {children}
      <AbsoluteFill
        style={{
          boxShadow: `inset 0 0 ${height / 7}px ${height / 20}px rgba(0,0,0,0.6)`,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
