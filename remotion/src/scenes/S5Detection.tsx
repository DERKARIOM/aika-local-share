import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { DeviceGlyph, Phone } from "../components/Devices";
import { DataFlow, Radar } from "../components/DataFlow";
import { Line } from "../components/Type";
import { Beat } from "../components/Beat";
import { SCREENS } from "../screens";

const RING: { kind: "phone" | "laptop" | "desktop"; label: string; angle: number }[] = [
  { kind: "laptop", label: "Ordinateur portable", angle: -140 },
  { kind: "desktop", label: "Ordinateur de bureau", angle: -40 },
  { kind: "phone", label: "Smartphone", angle: 90 },
];

export const S5Detection: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const wide = width > height;
  const cx = width / 2;
  const cy = wide ? height * 0.48 : height * 0.45;
  const radius = wide ? 340 : 380;

  return (
    <Stage intensity={0.9}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            position: "absolute",
            left: cx,
            top: cy,
            transform: "translate(-50%,-50%)",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Radar size={radius * 2.1} />
          <Phone screen={SCREENS.receive} width={wide ? 200 : 250} glow={0.8} />
        </div>

        {RING.map((d, i) => {
          const a = (d.angle * Math.PI) / 180;
          const x = cx + Math.cos(a) * radius;
          const y = cy + Math.sin(a) * radius * (wide ? 0.75 : 1);
          const p = interpolate(frame, [24 + i * 22, 56 + i * 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <React.Fragment key={d.label}>
              {p > 0.05 ? (
                <DataFlow
                  from={{ x: cx, y: cy }}
                  to={{ x, y }}
                  bow={0.1}
                  width={width}
                  height={height}
                  count={6}
                  speed={110}
                  delay={30 + i * 22}
                />
              ) : null}
              <div
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  transform: `translate(-50%,-50%) scale(${interpolate(p, [0, 1], [0.7, 1])})`,
                  zIndex: 2,
                  opacity: p,
                  filter: `blur(${(1 - p) * 8}px)`,
                }}
              >
                <DeviceGlyph kind={d.kind} size={wide ? 130 : 150} label={d.label} />
              </div>
            </React.Fragment>
          );
        })}
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: wide ? 50 : 190,
        }}
      >
        <Beat from={110}>
          <Line delay={110} size={wide ? 60 : 72} style={{ maxWidth: 900 }}>
            Vos appareils. Un seul espace de partage.
          </Line>
        </Beat>
      </AbsoluteFill>
    </Stage>
  );
};
