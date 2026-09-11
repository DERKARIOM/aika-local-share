import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Laptop, Phone } from "../components/Devices";
import { DataFlow } from "../components/DataFlow";
import { Line } from "../components/Type";
import { Beat } from "../components/Beat";
import { SCREENS } from "../screens";
import { C } from "../theme";

export const S8Unifie: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const wide = width > height;
  const drift = interpolate(frame, [0, 260], [0, wide ? -40 : -30]);

  return (
    <Stage>
      <DataFlow
        from={wide ? { x: 740, y: 500 } : { x: 540, y: 560 }}
        to={wide ? { x: 1140, y: 520 } : { x: 540, y: 1160 }}
        bow={wide ? 0.16 : 0.24}
        width={width}
        height={height}
        count={26}
        speed={85}
      />
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: wide ? "row" : "column",
          gap: wide ? 150 : 60,
          transform: `translateY(${drift}px) scale(${interpolate(frame, [0, 260], [1, 1.05])})`,
          paddingBottom: wide ? 0 : 260,
        }}
      >
        <Phone screen={SCREENS.receive} width={wide ? 250 : 300} />
        <Laptop screen={SCREENS.desktop} width={wide ? 600 : 660} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: wide ? 60 : 200,
          paddingLeft: 90,
          paddingRight: 90,
        }}
      >
        <Beat from={40}>
          <Line delay={40} size={wide ? 62 : 74} style={{ maxWidth: wide ? 1200 : 880 }}>
            Avec Aika, votre téléphone et votre ordinateur{" "}
            <span style={{ color: C.mint }}>ne font plus qu&apos;un.</span>
          </Line>
        </Beat>
      </AbsoluteFill>
    </Stage>
  );
};
