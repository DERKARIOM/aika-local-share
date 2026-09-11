import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Logo, Phone } from "../components/Devices";
import { Line } from "../components/Type";
import { Beat } from "../components/Beat";
import { SCREENS } from "../screens";
import { C } from "../theme";

export const S3Decouvrez: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const wide = width > height;
  const zoom = interpolate(frame, [0, 200], [0.98, 1.14], { extrapolateRight: "clamp" });
  const phoneW = wide ? 340 : 470;

  return (
    <Stage>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${zoom}) translate(${wide ? -420 : 0}px, ${wide ? 0 : 60}px)`,
        }}
      >
        <Phone screen={SCREENS.send} width={phoneW} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          alignItems: wide ? "flex-start" : "center",
          justifyContent: wide ? "center" : "flex-start",
          paddingTop: wide ? 0 : 130,
          paddingLeft: wide ? 1020 : 0,
          paddingRight: wide ? 80 : 0,
          flexDirection: "column",
          gap: 22,
        }}
      >
        <Beat from={16}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <Logo size={wide ? 62 : 78} glow={0.7} />
            <Line delay={16} size={wide ? 62 : 82}>
              Découvrez Aika.
            </Line>
          </div>
        </Beat>
        <Beat from={78}>
          <Line delay={78} size={wide ? 36 : 48} weight={500} color={C.muted}>
            Le partage de fichiers, autrement.
          </Line>
        </Beat>
      </AbsoluteFill>
    </Stage>
  );
};
