import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Logo } from "../components/Devices";
import { Line } from "../components/Type";
import { Beat } from "../components/Beat";
import { C, body } from "../theme";

export const S10Final: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const wide = width > height;

  return (
    <Stage intensity={interpolate(frame, [0, 60], [0.5, 1], { extrapolateRight: "clamp" })}>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: wide ? 30 : 52,
          padding: 90,
        }}
      >
        <Logo size={wide ? 180 : 240} />

        <div style={{ display: "flex", gap: wide ? 34 : 26, flexWrap: "wrap", justifyContent: "center" }}>
          <Beat from={26}>
            <Line delay={26} size={wide ? 56 : 66}>
              Transférez.
            </Line>
          </Beat>
          <Beat from={48}>
            <Line delay={48} size={wide ? 56 : 66}>
              Partagez.
            </Line>
          </Beat>
          <Beat from={70}>
            <Line delay={70} size={wide ? 56 : 66} color={C.mint}>
              Connectez-vous.
            </Line>
          </Beat>
        </div>

        <Beat from={120}>
          <Line delay={120} size={wide ? 42 : 50} weight={500} color={C.text} style={{ maxWidth: 900 }}>
            Aika — Le partage de fichiers, autrement.
          </Line>
        </Beat>

        <Beat from={170}>
          <div
            style={{
              fontFamily: body,
              color: C.muted,
              letterSpacing: 4,
              fontSize: wide ? 26 : 30,
              marginTop: wide ? 10 : 26,
            }}
          >
            Android • iOS • Windows • macOS • Linux
          </div>
        </Beat>

        <Beat from={200}>
          <div
            style={{
              fontFamily: body,
              color: "rgba(143,163,160,.65)",
              letterSpacing: 2,
              fontSize: wide ? 22 : 26,
            }}
          >
            naniger.com
          </div>
        </Beat>
      </AbsoluteFill>
    </Stage>
  );
};
