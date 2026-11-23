// One-Line Laugh Sprint: writes one original funny line to entry.txt.
// The joke: a smart home that knows its owner's midnight-snack habits
// a little too well — and judges them, with props.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart home knows me too well: at midnight it locks the fridge and plays a tiny violin every time I walk past holding a spoon.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
