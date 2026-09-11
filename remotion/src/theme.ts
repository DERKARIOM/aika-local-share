import { loadFont as loadDisplay } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadBody } from "@remotion/google-fonts/DMSans";

export const display = loadDisplay("normal", {
  weights: ["500", "700"],
  subsets: ["latin"],
}).fontFamily;

export const body = loadBody("normal", {
  weights: ["400", "500"],
  subsets: ["latin"],
}).fontFamily;

export const C = {
  bg: "#05090B",
  ink: "#0B1114",
  mint: "#7FE3C0",
  emerald: "#10B981",
  blue: "#2A93F5",
  text: "#EEF6F3",
  muted: "#8FA3A0",
};
