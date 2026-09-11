import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Logo } from "../components/Devices";
import { Kicker, Line } from "../components/Type";
import { Beat } from "../components/Beat";
import { C } from "../theme";

export const S1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const wide = width > height;
  const p = spring({ frame: frame - 6, fps, config: { damping: 200, mass: 1.2 } });
  const size = wide ? 220 : 300;

  return (
    <Stage intensity={interpolate(frame, [0, 50], [0, 1], { extrapolateRight: "clamp" })}>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: wide ? 44 : 70,
          padding: wide ? 90 : 120,
        }}
      >
        <div
          style={{
            opacity: p,
            transform: `scale(${interpolate(p, [0, 1], [0.82, 1])})`,
            filter: `blur(${interpolate(p, [0, 1], [22, 0])}px)`,
          }}
        >
          <Logo size={size} glow={interpolate(frame, [10, 70], [0, 1], { extrapolateRight: "clamp" })} />
        </div>
        <Beat from={34}>
          <Kicker delay={34}>Aika</Kicker>
        </Beat>
        <Beat from={60}>
          <Line delay={60} size={wide ? 66 : 74} style={{ maxWidth: wide ? 1150 : 880 }}>
            Et si vos appareils pouvaient communiquer…{" "}
            <span style={{ color: C.mint }}>simplement&nbsp;?</span>
          </Line>
        </Beat>
      </AbsoluteFill>
    </Stage>
  );
};
