import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";
import { C } from "../theme";

export const PHONE_RATIO = 740 / 1565;

/** Smartphone : cadre neutre, l'écran affiche la capture Aika telle quelle. */
export const Phone: React.FC<{
  screen: string;
  width: number;
  style?: React.CSSProperties;
  glow?: number;
}> = ({ screen, width, style, glow = 1 }) => {
  const h = width / PHONE_RATIO;
  return (
    <div
      style={{
        width,
        height: h,
        borderRadius: width * 0.09,
        padding: width * 0.018,
        background: "linear-gradient(150deg,#2A3338 0%,#0D1214 45%,#232B2F 100%)",
        boxShadow: `0 ${width * 0.06}px ${width * 0.16}px rgba(0,0,0,.75), 0 0 ${width * 0.5}px rgba(16,185,129,${0.16 * glow})`,
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: width * 0.075,
          overflow: "hidden",
          background: "#0B1114",
          position: "relative",
        }}
      >
        <Img src={staticFile(screen)} style={{ width: "100%", height: "100%", display: "block" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(115deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 32%, rgba(255,255,255,0) 68%, rgba(255,255,255,.05) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

/** Ordinateur portable générique (sans marque) affichant l'interface Aika. */
export const Laptop: React.FC<{
  screen: string;
  width: number;
  style?: React.CSSProperties;
}> = ({ screen, width, style }) => {
  // Ratio réel de la capture d'écran de bureau Aika (1876 x 1150).
  const screenH = width * 0.613 + width * 0.024;
  return (
    <div style={{ width, ...style }}>
      <div
        style={{
          width,
          height: screenH,
          borderRadius: width * 0.028,
          padding: width * 0.012,
          background: "linear-gradient(160deg,#2A3338 0%,#0E1315 60%,#20282C 100%)",
          boxShadow: `0 ${width * 0.05}px ${width * 0.12}px rgba(0,0,0,.7), 0 0 ${width * 0.35}px rgba(42,147,245,.12)`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: width * 0.018,
            overflow: "hidden",
            background: "#080D0F",
            position: "relative",
          }}
        >
          <Img
            src={staticFile(screen)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(115deg, rgba(255,255,255,.07) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 70%, rgba(255,255,255,.04) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: width * 1.13,
          height: width * 0.022,
          marginLeft: -width * 0.065,
          borderRadius: `0 0 ${width * 0.02}px ${width * 0.02}px`,
          background: "linear-gradient(180deg,#252D31,#0E1315)",
        }}
      />
    </div>
  );
};

/** Petite silhouette d'appareil pour les scènes réseau (aucune marque). */
export const DeviceGlyph: React.FC<{
  kind: "phone" | "laptop" | "desktop";
  size: number;
  label?: string;
  opacity?: number;
}> = ({ kind, size, label, opacity = 1 }) => {
  const stroke = C.mint;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: size * 0.16,
        opacity,
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.28,
          background: "rgba(127,227,192,.06)",
          border: "1px solid rgba(127,227,192,.28)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 ${size * 0.5}px rgba(16,185,129,.18)`,
        }}
      >
        <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none">
          {kind === "phone" && (
            <rect x="7" y="2.5" width="10" height="19" rx="2.4" stroke={stroke} strokeWidth="1.4" />
          )}
          {kind === "laptop" && (
            <>
              <rect x="3.5" y="5" width="17" height="11" rx="1.6" stroke={stroke} strokeWidth="1.4" />
              <path d="M2 19h20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            </>
          )}
          {kind === "desktop" && (
            <>
              <rect x="2.5" y="4" width="19" height="12.5" rx="1.6" stroke={stroke} strokeWidth="1.4" />
              <path d="M9 20h6M12 16.5V20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            </>
          )}
        </svg>
      </div>
      {label ? (
        <span style={{ color: C.muted, fontSize: size * 0.19, letterSpacing: 1 }}>{label}</span>
      ) : null}
    </div>
  );
};

/** Logo officiel Aika avec halo lumineux. */
export const Logo: React.FC<{ size: number; glow?: number; style?: React.CSSProperties }> = ({
  size,
  glow = 1,
  style,
}) => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 40) * 0.02;
  return (
    <div style={{ position: "relative", width: size, height: size, ...style }}>
      <div
        style={{
          position: "absolute",
          inset: -size * 0.35,
          background: `radial-gradient(circle, rgba(16,185,129,${0.3 * glow}) 0%, rgba(42,147,245,${0.12 * glow}) 40%, rgba(0,0,0,0) 70%)`,
          filter: `blur(${size * 0.05}px)`,
          transform: `scale(${pulse})`,
        }}
      />
      <Img
        src={staticFile("screens/logo-t.png")}
        style={{ width: size, height: size, position: "relative", display: "block" }}
      />
    </div>
  );
};
