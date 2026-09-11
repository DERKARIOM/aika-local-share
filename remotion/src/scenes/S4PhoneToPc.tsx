import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Laptop, Phone } from "../components/Devices";
import { DataFlow } from "../components/DataFlow";
import { Line } from "../components/Type";
import { Beat, useCamera } from "../components/Beat";
import { SCREENS } from "../screens";
import { C } from "../theme";

export const S4PhoneToPc: React.FC = () => {
  const { width, height } = useVideoConfig();
  const wide = width > height;
  const cam = useCamera({ zoom: 0.05, pan: 8 });

  return (
    <Stage>
      <AbsoluteFill style={{ ...cam }}>
        <DataFlow
          from={wide ? { x: 700, y: 520 } : { x: 540, y: 560 }}
          to={wide ? { x: 1180, y: 540 } : { x: 540, y: 1240 }}
          bow={wide ? 0.18 : 0.2}
          width={width}
          height={height}
          count={22}
          speed={95}
          delay={20}
        />
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: wide ? "row" : "column",
            gap: wide ? 200 : 130,
            paddingBottom: wide ? 0 : 150,
          }}
        >
          <Phone screen={SCREENS.send} width={wide ? 260 : 340} />
          <Laptop screen={SCREENS.messages} width={wide ? 700 : 760} />
        </AbsoluteFill>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: wide ? 50 : 150,
          gap: 20,
          flexDirection: "column",
        }}
      >
        <Beat from={26} until={140}>
          <Line delay={26} size={wide ? 58 : 72} color={C.mint}>
            Téléphone → Ordinateur
          </Line>
        </Beat>
        <Beat from={150}>
          <Line delay={150} size={wide ? 62 : 78}>
            Simple. Rapide. Local.
          </Line>
        </Beat>
      </AbsoluteFill>
    </Stage>
  );
};
