import fs from 'fs';
import path from 'path';

// Define forbidden terms/patterns for public files
const FORBIDDEN_PATTERNS = [
  { name: 'xAI claim', pattern: /\bxAI\b/i },
  { name: 'Tesla claim', pattern: /\bTesla\b/i },
  { name: 'SpaceX claim', pattern: /\bSpaceX\b/i },
  { name: 'OpenAI claim', pattern: /\bOpenAI\b/i },
  { name: 'University of Leicester', pattern: /University of Leicester/i },
  { name: 'MSc Business Analysis and Finance', pattern: /Business Analysis and Finance/i },
  { name: 'B.Tech Mechanical Engineering', pattern: /Mechanical Engineering/i },
  { name: 'H3+ credential', pattern: /H3\+/ },
  { name: 'Q20+ credential', pattern: /Q20\+/ },
  { name: 'SLA claim', pattern: /\bSLA\b/i },
  { name: 'Uptime claim', pattern: /\buptime\b/i },
  { name: 'High-volume commercial revenue/user claim', pattern: /(\b\d+M\b|\b\d+B\b|\b\d+\s*(million|billion|k))\s*(users|clients|revenue|downloads|customers)/i }
];

// Special check for Google to allow Google Fonts link
function containsForbiddenGoogle(content) {
  // If "Google" appears but is not part of Google Fonts URLs or tags
  const googleMatches = content.match(/google/gi);
  if (!googleMatches) return false;

  // Count matches in Google Fonts context
  let allowedCount = 0;
  const allowedPatterns = [
    /fonts\.googleapis\.com/gi,
    /fonts\.gstatic\.com/gi,
    /Google Fonts/gi,
    /googleapis/gi,
    /gstatic/gi
  ];

  for (const pattern of allowedPatterns) {
    const matches = content.match(pattern);
    if (matches) {
      allowedCount += matches.length;
    }
  }

  // If there are more google occurrences than allowed font reference occurrences, flag it
  return googleMatches.length > allowedCount;
}

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
      if (['.ts', '.tsx', '.js', '.jsx', '.mjs', '.html', '.json'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

function main() {
  console.log('Running Content Integrity & Authenticity Check...');
  
  // We prioritize public-facing source files only:
  // - src/
  // - index.html
  // - package.json
  const filesToScan = [
    path.resolve('index.html'),
    path.resolve('package.json'),
    ...scanDir(path.resolve('src'))
  ].filter(file => fs.existsSync(file));

  let failed = false;

  for (const file of filesToScan) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(process.cwd(), file);

    // Run the standard pattern checks
    for (const rule of FORBIDDEN_PATTERNS) {
      if (rule.pattern.test(content)) {
        // Double-check if the file is package.json and it matched because of the name of check-content-integrity.mjs
        if (relativePath === 'package.json' && rule.pattern.test('"name": "saisanthosh-portfolio"')) {
          continue;
        }
        console.error(`FAIL: Blocked pattern "${rule.name}" matched in public file: ${relativePath}`);
        failed = true;
      }
    }

    // Google claim validation
    if (containsForbiddenGoogle(content)) {
      console.error(`FAIL: Blocked Google internal authority claim found in public file: ${relativePath}`);
      failed = true;
    }
  }

  if (failed) {
    process.exit(1);
  } else {
    console.log('PASS: Public files are free from unauthorized claims.');
    process.exit(0);
  }
}

main();
