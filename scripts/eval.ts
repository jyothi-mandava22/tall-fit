/**
 * Double-entry data check.
 *
 * Each chart's values are entered twice, on different days, into two files:
 *   data/entered/<chart-id>.a.json
 *   data/entered/<chart-id>.b.json
 *
 * This script diffs them field by field and reports mismatches.
 * It is a data-quality check, not an extraction-accuracy measurement.
 *
 * Usage:
 *   npx tsx scripts/eval.ts
 */

import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const ENTERED_DIR = "data/entered";

interface Mismatch {
  chartId: string;
  sizeLabel: string;
  field: string;
  aValue: unknown;
  bValue: unknown;
}

async function main() {
  const files = await readdir(ENTERED_DIR).catch(() => []);
  const chartIds = new Set<string>();

  for (const f of files) {
    const m = f.match(/^(.+)\.(a|b)\.json$/);
    if (m) chartIds.add(m[1]);
  }

  if (chartIds.size === 0) {
    console.log("No entered data found in", ENTERED_DIR);
    return;
  }

  const mismatches: Mismatch[] = [];
  let totalFields = 0;

  for (const id of chartIds) {
    const a = JSON.parse(await readFile(join(ENTERED_DIR, `${id}.a.json`), "utf8"));
    const b = JSON.parse(await readFile(join(ENTERED_DIR, `${id}.b.json`), "utf8"));

    if (a.sizes.length !== b.sizes.length) {
      console.log(`${id}: size count differs (a=${a.sizes.length}, b=${b.sizes.length})`);
      continue;
    }

    for (let i = 0; i < a.sizes.length; i++) {
      const sa = a.sizes[i];
      const sb = b.sizes[i];
      for (const field of Object.keys(sa)) {
        totalFields++;
        if (JSON.stringify(sa[field]) !== JSON.stringify(sb[field])) {
          mismatches.push({
            chartId: id,
            sizeLabel: sa.label,
            field,
            aValue: sa[field],
            bValue: sb[field],
          });
        }
      }
    }
  }

  console.log(`Charts checked:  ${chartIds.size}`);
  console.log(`Fields compared: ${totalFields}`);
  console.log(`Mismatches:      ${mismatches.length}`);

  if (mismatches.length > 0) {
    console.log("\nMismatches:");
    for (const m of mismatches) {
      console.log(`  ${m.chartId} size ${m.sizeLabel} ${m.field}: a=${m.aValue} b=${m.bValue}`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});