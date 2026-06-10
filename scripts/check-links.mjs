import fs from 'fs';
import path from 'path';

// Traverses directory recursively
function scanDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        scanDir(filePath, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (['.ts', '.tsx', '.js', '.jsx', '.html'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

// Check link objects defined in project/profile data
function checkDataLinks() {
  const files = [
    path.resolve('src/data/projects.ts'),
    path.resolve('src/data/profile.ts')
  ];

  let failed = false;

  // Regex to match link structures:
  // e.g. github: { label: "...", url: "...", isAvailable: false, plannedPlaceholder: "..." }
  const linkRegex = /\{\s*label:\s*["']([^"']+)["'],\s*url:\s*["']([^"']*)["'],\s*isAvailable:\s*(true|false)(?:,\s*plannedPlaceholder:\s*["']([^"']*)["'])?/g;

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(process.cwd(), file);

    let match;
    linkRegex.lastIndex = 0;
    while ((match = linkRegex.exec(content)) !== null) {
      const [fullMatch, label, url, isAvailableStr, plannedPlaceholder] = match;
      const isAvailable = isAvailableStr === 'true';

      // 1. If unavailable, it must have a planned placeholder
      if (!isAvailable) {
        if (!plannedPlaceholder || plannedPlaceholder.trim() === '') {
          console.error(`FAIL: Inactive link "${label}" in ${relativePath} lacks a plannedPlaceholder: ${fullMatch}`);
          failed = true;
        }
      }

      // 2. If available, url must not be empty or '#'
      if (isAvailable) {
        if (!url || url.trim() === '') {
          console.error(`FAIL: Available link "${label}" in ${relativePath} has an empty url: ${fullMatch}`);
          failed = true;
        }
        if (url === '#') {
          console.error(`FAIL: Available link "${label}" in ${relativePath} uses '#' as a live link: ${fullMatch}`);
          failed = true;
        }
      }

      // 3. Prevent javascript: URLs
      if (url && url.toLowerCase().startsWith('javascript:')) {
        console.error(`FAIL: Link "${label}" in ${relativePath} contains javascript: protocol: ${fullMatch}`);
        failed = true;
      }

      // 4. Prevent fake CV paths
      if (label.toLowerCase().includes('cv') && isAvailable) {
        const fakeCvKeywords = ['dummy', 'temp', 'fake', 'test', 'todo'];
        if (fakeCvKeywords.some(kw => url.toLowerCase().includes(kw)) || !url.startsWith('http')) {
          console.error(`FAIL: Link "${label}" in ${relativePath} appears to use a fake CV path: ${url}`);
          failed = true;
        }
      }
    }
  }

  return !failed;
}

// Scans HTML/TSX source code for inline link violations
function checkSourceLinks() {
  const sourceFiles = scanDir(path.resolve('src'));
  sourceFiles.push(path.resolve('index.html'));

  let failed = false;

  // Regex to find href values
  const hrefRegex = /href=["']([^"']*)["']/g;
  // Regex to check for target="_blank" without rel="noopener noreferrer"
  const anchorTagRegex = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>/g;

  for (const file of sourceFiles) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(process.cwd(), file);

    // 1. Check basic href issues (javascript:, empty href)
    let hrefMatch;
    hrefRegex.lastIndex = 0;
    while ((hrefMatch = hrefRegex.exec(content)) !== null) {
      const href = hrefMatch[1];
      if (href.toLowerCase().startsWith('javascript:')) {
        console.error(`FAIL: Inlined link "javascript:" found in ${relativePath}: ${hrefMatch[0]}`);
        failed = true;
      }
      if (href === '') {
        console.error(`FAIL: Empty href found in ${relativePath}`);
        failed = true;
      }
    }

    // 2. Check for target="_blank" links missing rel="noopener noreferrer"
    let anchorMatch;
    anchorTagRegex.lastIndex = 0;
    while ((anchorMatch = anchorTagRegex.exec(content)) !== null) {
      const fullAnchor = anchorMatch[0];
      const href = anchorMatch[1];

      // If it's an external link and target="_blank" is used, check for rel="noopener noreferrer"
      if (href.startsWith('http') && fullAnchor.includes('target="_blank"')) {
        if (!fullAnchor.includes('rel="noopener') || !fullAnchor.includes('noreferrer"')) {
          // If we use SafeLink component, it's fine, but check raw anchors
          console.error(`FAIL: External link missing rel="noopener noreferrer" in ${relativePath}: ${fullAnchor}`);
          failed = true;
        }
      }
    }
  }

  return !failed;
}

function main() {
  console.log('Running Link Safety and Integrity Check...');
  const dataPass = checkDataLinks();
  const sourcePass = checkSourceLinks();

  if (!dataPass || !sourcePass) {
    process.exit(1);
  } else {
    console.log('PASS: All links are safe and conform to the planned/disabled safety model.');
    process.exit(0);
  }
}

main();
