import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { S1Intro } from "./scenes/S1Intro";
import { S2Probleme } from "./scenes/S2Probleme";
import { S3Decouvrez } from "./scenes/S3Decouvrez";
import { S4PhoneToPc } from "./scenes/S4PhoneToPc";
import { S5Detection } from "./scenes/S5Detection";
import { S6Transfert } from "./scenes/S6Transfert";
import { S7SansInternet } from "./scenes/S7SansInternet";
import { S8Unifie } from "./scenes/S8Unifie";
import { S9Ecosysteme } from "./scenes/S9Ecosysteme";
import { S10Final } from "./scenes/S10Final";
import { C } from "./theme";

export const SCENES: { c: React.FC; d: number }[] = [
  { c: S1Intro, d: 210 },
  { c: S2Probleme, d: 210 },
  { c: S3Decouvrez, d: 210 },
  { c: S4PhoneToPc, d: 240 },
  { c: S5Detection, d: 210 },
  { c: S6Transfert, d: 240 },
  { c: S7SansInternet, d: 210 },
  { c: S8Unifie, d: 270 },
  { c: S9Ecosysteme, d: 210 },
  { c: S10Final, d: 300 },
];

export const TRANSITION = 20;
export const TOTAL =
  SCENES.reduce((a, s) => a + s.d, 0) - TRANSITION * (SCENES.length - 1);

const VO_DELAY = 12;

export const SCENE_STARTS = SCENES.map(
  (_, i) =>
    SCENES.slice(0, i).reduce((a, s) => a + s.d, 0) - TRANSITION * i,
);

export const MainVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.bg }}>
    {SCENE_STARTS.map((start, i) => (
      <Sequence key={`vo-${i}`} from={start + VO_DELAY}>
        <Audio src={staticFile(`vo/s${i + 1}.mp3`)} volume={1} />
      </Sequence>
    ))}
    <TransitionSeries>
      {SCENES.map(({ c: Comp, d }, i) => (
        <React.Fragment key={i}>
          <TransitionSeries.Sequence durationInFrames={d}>
            <Comp />
          </TransitionSeries.Sequence>
          {i < SCENES.length - 1 ? (
            <TransitionSeries.Transition
              presentation={fade()}
              timing={linearTiming({ durationInFrames: TRANSITION })}
            />
          ) : null}
        </React.Fragment>
      ))}
    </TransitionSeries>
  </AbsoluteFill>
);
