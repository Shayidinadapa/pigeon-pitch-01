import { mkdirSync, writeFileSync } from "node:fs";

// One-line elevator pitch: a city pigeon pitching investors.
const line =
  "We're Coolect — we map every dropped crumb in the city in real time. Back our seed round and we'll scale to a million pigeons before the statues notice we're squatting on them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
