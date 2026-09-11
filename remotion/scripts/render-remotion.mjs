import { bundle } from "@remotion/bundler";
import { renderMedia, renderStill, selectComposition, openBrowser } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compId = process.argv[2] ?? "main";
const out = process.argv[3] ?? "/mnt/documents/aika.mp4";
const range = process.argv[4]; // "start-end" optionnel
const stillFrame = process.env.STILL_FRAME;

const bundled = await bundle({
  entryPoint: path.resolve(__dirname, "../src/index.ts"),
  webpackOverride: (c) => c,
});

const browser = await openBrowser("chrome", {
  browserExecutable: process.env.PUPPETEER_EXECUTABLE_PATH ?? "/bin/chromium",
  chromiumOptions: { args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"] },
  chromeMode: "chrome-for-testing",
});

const composition = await selectComposition({
  serveUrl: bundled,
  id: compId,
  puppeteerInstance: browser,
});

if (stillFrame) {
  await renderStill({
    composition,
    serveUrl: bundled,
    output: out,
    frame: Number(stillFrame),
    puppeteerInstance: browser,
  });
} else {
  await renderMedia({
    composition,
    serveUrl: bundled,
    codec: "h264",
    crf: 18,
    outputLocation: out,
    puppeteerInstance: browser,
    muted: true,
    concurrency: 4,
    frameRange: range ? range.split("-").map(Number) : undefined,
  });
}

await browser.close({ silent: false });
console.log("done", out);
