import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { DeviceGlyph } from "../components/Devices";
import { DataFlow } from "../components/DataFlow";
import { Line } from "../components/Type";
import { Beat } from "../components/Beat";
import { C } from "../theme";

export const S7SansInternet: React.FC = () => {
  const { width, height } = useVideoConfig();
  const wide = width > height;
  const y = wide ? height * 0.34 : height * 0.3;
  const left = { x: width * 0.28, y };
  const right = { x: width * 0.72, y };

  return (
    <Stage intensity={0.6}>
      <AbsoluteFill>
        <div
          style={{
            position: "absolute",
            left: left.x,
            top: left.y,
            transform: "translate(-50%,-50%)",
          }}
        >
          <DeviceGlyph kind="phone" size={wide ? 140 : 170} />
        </div>
        <div
          style={{
            position: "absolute",
            left: right.x,
            top: right.y,
            transform: "translate(-50%,-50%)",
          }}
        >
          <DeviceGlyph kind="laptop" size={wide ? 140 : 170} />
        </div>
        <DataFlow
          from={left}
          to={right}
          bow={0}
          width={width}
          height={height}
          count={16}
          speed={70}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: wide ? 14 : 26,
          paddingTop: wide ? 190 : 420,
        }}
      >
        <Beat from={20}>
          <Line delay={20} size={wide ? 62 : 76} color={C.muted}>
            Aucun cloud.
          </Line>
        </Beat>
        <Beat from={62}>
          <Line delay={62} size={wide ? 62 : 76} color={C.muted}>
            Aucun serveur distant.
          </Line>
        </Beat>
        <Beat from={106}>
          <Line delay={106} size={wide ? 70 : 88} color={C.mint}>
            Un transfert local.
          </Line>
        </Beat>
      </AbsoluteFill>
    </Stage>
  );
};
