import fs from 'fs';
import path from 'path';

function checkProjectsLinks() {
  const projPath = path.resolve('src/data/projects.ts');
  if (!fs.existsSync(projPath)) {
    console.error('FAIL: src/data/projects.ts not found!');
    process.exit(1);
  }

  const content = fs.readFileSync(projPath, 'utf8');
  let failed = false;

  // Regex to extract all link objects:
  // e.g. github: { label: "...", url: "...", isAvailable: false, plannedPlaceholder: "..." }
  const linkRegex = /\{\s*label:\s*["']([^"']+)["'],\s*url:\s*["']([^"']*)["'],\s*isAvailable:\s*(true|false)(?:,\s*plannedPlaceholder:\s*["']([^"']*)["'])?/g;

  let match;
  linkRegex.lastIndex = 0;
  while ((match = linkRegex.exec(content)) !== null) {
    const [fullMatch, label, url, isAvailableStr, plannedPlaceholder] = match;
    const isAvailable = isAvailableStr === 'true';

    if (isAvailable) {
      // Available links must have real URLs, not placeholders or dummy addresses
      const lowerUrl = url.toLowerCase();
      if (
        url === '#' ||
        url === '' ||
        lowerUrl.includes('example.com') ||
        lowerUrl.includes('placeholder') ||
        lowerUrl.includes('dummy') ||
        lowerUrl.includes('todo') ||
        lowerUrl.includes('localhost')
      ) {
        console.error(`FAIL: Proof asset link "${label}" is marked available but points to a fake/placeholder URL: ${url}`);
        failed = true;
      }
    } else {
      // Inactive links must have a planned placeholder description
      if (!plannedPlaceholder || plannedPlaceholder.trim() === '') {
        console.error(`FAIL: Inactive proof asset link "${label}" lacks a plannedPlaceholder: ${fullMatch}`);
        failed = true;
      }
    }
  }

  return !failed;
}

function checkProofArtifactsStructure() {
  const artifactsPath = path.resolve('src/data/proofArtifacts.ts');
  if (!fs.existsSync(artifactsPath)) {
    console.error('FAIL: src/data/proofArtifacts.ts not found!');
    process.exit(1);
  }

  const content = fs.readFileSync(artifactsPath, 'utf8');
  let failed = false;

  // The proof artifacts are defined as an array of objects.
  // We check that every artifact object has: id, name, filePath, type
  // Using regex to verify structured definitions.
  const artifactRegex = /\{\s*id:\s*["']([^"']+)["'],\s*name:\s*["']([^"']+)["'],\s*filePath:\s*["']([^"']+)["'],\s*type:\s*["']([^"']+)["']\s*\}/g;

  let match;
  let count = 0;
  artifactRegex.lastIndex = 0;
  while ((match = artifactRegex.exec(content)) !== null) {
    count++;
    const [_, id, name, filePath, type] = match;

    // Verify type is one of the allowed types
    const allowedTypes = ["quality_report", "drift_report", "schema", "eval_report"];
    if (!allowedTypes.includes(type)) {
      console.error(`FAIL: Proof artifact "${name}" has invalid type "${type}". Must be one of: ${allowedTypes.join(', ')}`);
      failed = true;
    }

    // Verify filePath is not empty or malformed
    if (!filePath || filePath.trim() === '') {
      console.error(`FAIL: Proof artifact "${name}" has empty filePath.`);
      failed = true;
    }

    // The files are NOT committed to the public portfolio repo yet.
    // So we verify that the file paths are correctly pointed to the local subdirectories
    const validPrefixes = [
      'rural-financial-accessibility/',
      'uk-sme-data-quality/',
      'midlands-theatre-bi-data-mart/',
      'vccf-context-fabric/'
    ];
    const hasValidPrefix = validPrefixes.some(prefix => filePath.startsWith(prefix));
    if (!hasValidPrefix) {
      console.error(`FAIL: Proof artifact "${name}" filePath "${filePath}" does not start with a valid project directory prefix.`);
      failed = true;
    }
  }

  if (count === 0) {
    console.error('FAIL: No proof artifacts parsed in proofArtifacts.ts.');
    failed = true;
  }

  return !failed;
}

function main() {
  console.log('Running Proof Artifacts Integrity Check...');
  const projPass = checkProjectsLinks();
  const artPass = checkProofArtifactsStructure();

  if (!projPass || !artPass) {
    process.exit(1);
  } else {
    console.log('PASS: Proof artifacts and project links conform to safety models.');
    process.exit(0);
  }
}

main();
