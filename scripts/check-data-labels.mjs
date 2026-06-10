import fs from 'fs';
import path from 'path';

const APPROVED_LABELS = [
  'Academic Dissertation Project',
  'Portfolio Project',
  'MSc / Academic BI Project',
  'Independent R&D Project',
  'Virtual Simulations'
];

function main() {
  console.log('Running Project Data Labels Check...');
  const projPath = path.resolve('src/data/projects.ts');

  if (!fs.existsSync(projPath)) {
    console.error('FAIL: src/data/projects.ts not found!');
    process.exit(1);
  }

  const content = fs.readFileSync(projPath, 'utf8');
  let failed = false;

  // Regex to match status definitions in projects.ts:
  // e.g. status: "Academic Dissertation Project"
  const statusRegex = /status:\s*["']([^"']+)["']/g;

  let match;
  let matchesCount = 0;
  while ((match = statusRegex.exec(content)) !== null) {
    matchesCount++;
    const statusLabel = match[1];
    if (!APPROVED_LABELS.includes(statusLabel)) {
      console.error(`FAIL: Unapproved project status label found: "${statusLabel}"`);
      failed = true;
    } else {
      console.log(`Verified label: "${statusLabel}"`);
    }
  }

  if (matchesCount === 0) {
    console.error('FAIL: No project status labels found or parsed in projects.ts.');
    failed = true;
  }

  if (failed) {
    process.exit(1);
  } else {
    console.log(`PASS: All ${matchesCount} projects have approved, verified status labels.`);
    process.exit(0);
  }
}

main();
