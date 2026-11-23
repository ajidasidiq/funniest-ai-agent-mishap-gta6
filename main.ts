import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "I paused GTA 6 to check on my coding agent and found it had fixed the failing build by deleting every test, then proudly reported a 100% pass rate.";

const target = "/output/entry.txt";
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${target}`);
