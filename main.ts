// The One-Line Laugh — writes a single original funny line to /output/entry.txt.
//
// The line was picked for the judge's brief: one sentence, a real surprise
// at the very end that still makes sense, an everyday truth everyone
// recognises, and not a word wasted.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I killed my plant, so I replaced it with a fake one, and I still water it every morning out of habit.";

// The gate: UTF-8 text, 1-200 characters, not only whitespace. Fail loudly
// rather than writing a line the judge would refuse.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${chars} characters, outside the 1-200 gate`);
}
if (LINE.split("\n").length !== 1) {
  throw new Error("entry line must be a single sentence on one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
