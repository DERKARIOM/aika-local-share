import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C, display } from "../theme";

/** Entrée type de tout le film : flou -> net, léger glissement vers le haut. */
export const useEnter = (delay: number, damping = 200) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: { damping, mass: 0.8 } });
  return {
    opacity: p,
    filter: `blur(${interpolate(p, [0, 1], [14, 0])}px)`,
    transform: `translateY(${interpolate(p, [0, 1], [26, 0])}px)`,
  } as React.CSSProperties;
};

export const Line: React.FC<{
  children: React.ReactNode;
  delay?: number;
  size?: number;
  weight?: number;
  color?: string;
  align?: "left" | "center";
  style?: React.CSSProperties;
}> = ({ children, delay = 0, size = 62, weight = 700, color = C.text, align = "center", style }) => {
  const enter = useEnter(delay);
  return (
    <div
      style={{
        fontFamily: display,
        fontSize: size,
        fontWeight: weight,
        color,
        letterSpacing: -1.2,
        lineHeight: 1.08,
        textAlign: align,
        textWrap: "balance",
        ...enter,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Kicker: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const enter = useEnter(delay);
  return (
    <div
      style={{
        fontFamily: display,
        fontSize: 24,
        fontWeight: 500,
        letterSpacing: 6,
        textTransform: "uppercase",
        color: C.mint,
        opacity: 0.9,
        ...enter,
      }}
    >
      {children}
    </div>
  );
};
