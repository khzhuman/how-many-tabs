import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const count = "47";
if (!/^\d{1,5}$/.test(count)) {
  throw new Error("entry must be digits only");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), count, "utf8");
console.log(count);
