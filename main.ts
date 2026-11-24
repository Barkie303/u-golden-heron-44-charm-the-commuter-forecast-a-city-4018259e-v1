// Charm the Commuter: Forecast a City That Isn't — entry for make.fun
// u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e
// Writes one weather forecast line (1-140 chars) for a city that does
// not exist, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The forecast: Zormouth gets confetti rain until 9am, then the only
// weather that matters to a commuter — the chance the bus actually shows.
// Broadcast register, invented city named, one concrete detail (confetti),
// and the punch is the bus: the commuter's real forecast. Confetti rain
// is the kind of weather you can only get in a city that isn't there.
const LINE =
  "In Zormouth, light rain of confetti until 9am, then a 40% chance of your bus actually arriving.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${out}/entry.txt`);
