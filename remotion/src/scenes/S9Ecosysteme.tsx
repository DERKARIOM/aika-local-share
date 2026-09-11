import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { DeviceGlyph, Logo } from "../components/Devices";
import { Line } from "../components/Type";
import { Beat } from "../components/Beat";

const PLATFORMS: { label: string; kind: "phone" | "laptop" | "desktop" }[] = [
  { label: "Android", kind: "phone" },
  { label: "iOS", kind: "phone" },
  { label: "Windows", kind: "desktop" },
  { label: "macOS", kind: "laptop" },
  { label: "Linux", kind: "desktop" },
];

export const S9Ecosysteme: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const wide = width > height;
  const cx = width / 2;
  const cy = wide ? height * 0.46 : height * 0.44;
  const rx = wide ? 470 : 380;
  const ry = wide ? 250 : 380;

  return (
    <Stage>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", left: cx, top: cy, transform: "translate(-50%,-50%)" }}>
          <Logo size={wide ? 150 : 190} />
        </div>
        {PLATFORMS.map((p, i) => {
          const a = (-90 + (360 / PLATFORMS.length) * i + frame * 0.06) * (Math.PI / 180);
          const x = cx + Math.cos(a) * rx;
          const y = cy + Math.sin(a) * ry;
          const t = interpolate(frame, [10 + i * 12, 40 + i * 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={p.label}
              style={{
                position: "absolute",
                left: x,
                top: y,
                transform: `translate(-50%,-50%) scale(${interpolate(t, [0, 1], [0.75, 1])})`,
                opacity: t,
                filter: `blur(${(1 - t) * 7}px)`,
              }}
            >
              <DeviceGlyph kind={p.kind} size={wide ? 116 : 132} label={p.label} />
            </div>
          );
        })}
      </AbsoluteFill>
      <AbsoluteFill
        style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: wide ? 46 : 150 }}
      >
        <Beat from={90}>
          <Line delay={90} size={wide ? 58 : 72}>
            Partagez entre vos appareils.
          </Line>
        </Beat>
      </AbsoluteFill>
    </Stage>
  );
};
