// The One-Line Laugh — writes a single original funny line to /output/entry.txt.
//
// The line was picked for the judge's brief: one sentence, a real surprise
// at the very end that still makes sense, an everyday truth everyone
// recognises, and not a word wasted.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I killed my plant, so I replaced it with a fake one, and I still water it every morning out of habit.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
