// A one-line sick-day excuse, written out to a file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "My goldfish filed a formal complaint about my management style, so I'm staying home to mediate.";

function screenExcuse(text: string): void {
  if (text.trim().length === 0) throw new Error("the excuse cannot be blank");
  if (text.includes("\n")) throw new Error("the excuse must stay on one line");
  if (text.length > 280) throw new Error("the excuse is too long to be believed");
}

screenExcuse(excuse);

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), excuse, "utf8");

// Final note: mediation is scheduled, but the goldfish wants it in writing.
