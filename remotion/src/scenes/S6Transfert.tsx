import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Laptop, Phone } from "../components/Devices";
import { DataFlow } from "../components/DataFlow";
import { Line } from "../components/Type";
import { Beat } from "../components/Beat";
import { SCREENS } from "../screens";
import { C } from "../theme";

export const S6Transfert: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const wide = width > height;
  const zoom = interpolate(frame, [0, 220], [1.06, 0.96], { extrapolateRight: "clamp" });

  return (
    <Stage>
      <DataFlow
        from={wide ? { x: 760, y: 520 } : { x: 540, y: 620 }}
        to={wide ? { x: 1160, y: 540 } : { x: 540, y: 1300 }}
        bow={wide ? 0.12 : 0.22}
        width={width}
        height={height}
        count={30}
        speed={55}
        delay={10}
      />
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: wide ? "row" : "column",
          gap: wide ? 170 : 90,
          transform: `scale(${zoom})`,
          paddingBottom: wide ? 0 : 180,
        }}
      >
        <Phone screen={SCREENS.transfer} width={wide ? 330 : 430} />
        <Laptop screen={SCREENS.desktop} width={wide ? 620 : 700} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: wide ? 46 : 150 }}
      >
        <Beat from={60}>
          <Line delay={60} size={wide ? 58 : 70} style={{ maxWidth: 900 }} color={C.text}>
            Transférez vos fichiers en quelques secondes.
          </Line>
        </Beat>
      </AbsoluteFill>
    </Stage>
  );
};
