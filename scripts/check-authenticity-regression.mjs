import fs from 'fs';
import path from 'path';

const REQUIRED_TERMS = [
  'De Montfort University',
  'MSc Data Analytics',
  'BE Computer Science'
];

const BLOCKED_TERMS = [
  'University of Leicester',
  'Business Analysis and Finance',
  'Mechanical Engineering'
];

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
  console.log('Running Education Authenticity & Regression Check...');
  const filesToScan = [
    path.resolve('index.html'),
    path.resolve('package.json'),
    ...scanDir(path.resolve('src'))
  ].filter(file => fs.existsSync(file));

  // Load all public files contents combined
  let combinedContent = '';
  const fileContents = {};

  for (const file of filesToScan) {
    const content = fs.readFileSync(file, 'utf8');
    combinedContent += '\n' + content;
    fileContents[path.relative(process.cwd(), file)] = content;
  }

  let failed = false;

  // 1. Verify all required education terms are present in the public source
  for (const term of REQUIRED_TERMS) {
    const regex = new RegExp(term, 'i');
    if (!regex.test(combinedContent)) {
      console.error(`FAIL: Required education credential "${term}" is missing from public source files.`);
      failed = true;
    } else {
      console.log(`Verified required term present: "${term}"`);
    }
  }

  // 2. Verify no blocked education terms are present in the public source
  for (const term of BLOCKED_TERMS) {
    const regex = new RegExp(term, 'i');
    for (const [relPath, content] of Object.entries(fileContents)) {
      if (regex.test(content)) {
        console.error(`FAIL: Blocked education credential "${term}" found in public file: ${relPath}`);
        failed = true;
      }
    }
  }

  if (failed) {
    process.exit(1);
  } else {
    console.log('PASS: Required credentials verified, and no blocked credentials present.');
    process.exit(0);
  }
}

main();
