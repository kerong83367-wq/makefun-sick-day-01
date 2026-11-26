// The funniest sick-day excuse, written to /output/entry.txt.
// Node 22, standard library only; MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I can't come in today — my bed has filed a formal complaint about my absence, and HR (my cat) has approved emergency cuddles only.";

// The competition gate for this entry: one line under 200 characters.
const LIMIT = 199;

function checkEntry(line: string, limit: number): void {
  if (line.length > limit) {
    console.error(`entry is ${line.length} characters, over the ${limit} limit`);
    process.exit(1);
  }
}

checkEntry(LINE, LIMIT);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// No trailing newline: the file is exactly the excuse, nothing more.
