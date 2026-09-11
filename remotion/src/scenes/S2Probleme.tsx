import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage } from "../components/Stage";
import { Phone } from "../components/Devices";
import { Line } from "../components/Type";
import { Beat, useCamera } from "../components/Beat";
import { SCREENS } from "../screens";
import { C, body } from "../theme";

const FILES = [
  { label: "IMG_2043.JPG", size: "4,2 Mo" },
  { label: "Réunion.MP4", size: "218 Mo" },
  { label: "Mémoire.PDF", size: "12,6 Mo" },
  { label: "Archive.ZIP", size: "1,4 Go" },
];

export const S2Probleme: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const wide = width > height;
  const cam = useCamera({ zoom: 0.05 });
  const phoneW = wide ? 300 : 430;

  return (
    <Stage intensity={0.75}>
      <AbsoluteFill style={{ ...cam }}>
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            <Phone screen={SCREENS.receive} width={phoneW} glow={0.5} />
            {FILES.map((f, i) => {
              const p = interpolate(frame, [20 + i * 14, 45 + i * 14], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              const side = i % 2 === 0 ? -1 : 1;
              const y = -phoneW * 0.55 + i * phoneW * 0.42;
              return (
                <div
                  key={f.label}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `translate(${side * phoneW * (0.62 + (i % 2) * 0.06) - 120}px, ${y}px) translateY(${(1 - p) * 18}px)`,
                    opacity: p * 0.95,
                    filter: `blur(${(1 - p) * 8}px)`,
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    padding: "14px 20px",
                    borderRadius: 16,
                    background: "rgba(12,20,22,.86)",
                    border: "1px solid rgba(127,227,192,.18)",
                    boxShadow: "0 20px 60px rgba(0,0,0,.6)",
                    fontFamily: body,
                    width: 240,
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 3,
                      background: C.mint,
                      opacity: 0.9,
                    }}
                  />
                  <span style={{ color: C.text, fontSize: 20 }}>{f.label}</span>
                  <span style={{ color: C.muted, fontSize: 18, marginLeft: "auto" }}>{f.size}</span>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>

        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: wide ? 70 : 190,
            gap: 18,
            flexDirection: "column",
          }}
        >
          <Beat from={70} until={118}>
            <Line delay={70} size={wide ? 72 : 86} color={C.text}>
              Pas d&apos;Internet&nbsp;?
            </Line>
          </Beat>
          <Beat from={124}>
            <Line delay={124} size={wide ? 78 : 92} color={C.mint}>
              Pas de problème.
            </Line>
          </Beat>
        </AbsoluteFill>
      </AbsoluteFill>
    </Stage>
  );
};
