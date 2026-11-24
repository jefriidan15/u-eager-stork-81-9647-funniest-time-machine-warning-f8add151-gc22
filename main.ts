import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: Never meet your past self. Only one of you may return, and he has already reported you for trespassing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
// Single-line label, 112 characters, no trailing newline.
