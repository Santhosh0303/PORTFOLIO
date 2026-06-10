import fs from 'fs';
import path from 'path';

// Files that could trigger failure if they exist in the root
const FORBIDDEN_ENV_FILES = [
  '.env',
  '.env.local',
  '.env.production',
  '.env.development',
  '.env.staging',
  '.env.test'
];

// Regex patterns to match credentials
const CREDENTIAL_PATTERNS = [
  { name: 'Private Key Block', pattern: /-----BEGIN\s+(RSA\s+|EC\s+|DSA\s+|OPENSSH\s+)?PRIVATE\s+KEY-----/i },
  { name: 'AWS Access Key ID', pattern: /\b(AKIA|ASCA|ASIA)[A-Z0-9]{16}\b/ },
  { name: 'Google API Key', pattern: /\bAIza[0-9A-Za-z-_]{35}\b/ },
  { name: 'Slack Token', pattern: /\bxox[baprs]-\d+-\w+/i },
  { name: 'Generic API Key/Secret Variable', pattern: /(?:api[-_]?key|secret|token|passwd|password|auth[-_]?token)\s*[:=]\s*["'](?![#])[a-zA-Z0-9\-=_]{16,}["']/i }
];

function checkEnvFiles() {
  let failed = false;
  for (const file of FORBIDDEN_ENV_FILES) {
    const filePath = path.resolve(file);
    if (fs.existsSync(filePath)) {
      console.error(`FAIL: Forbidden environment file found in repository root: ${file}`);
      failed = true;
    }
  }
  return !failed;
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
      if (['.ts', '.tsx', '.js', '.jsx', '.mjs', '.html', '.css', '.json'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

function checkSourceSecrets() {
  // We prioritize scanning the source files, index.html and vite.config.ts
  const filesToScan = [
    path.resolve('index.html'),
    path.resolve('vite.config.ts'),
    ...scanDir(path.resolve('src'))
  ].filter(file => fs.existsSync(file));

  let failed = false;

  for (const file of filesToScan) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(process.cwd(), file);

    for (const rule of CREDENTIAL_PATTERNS) {
      if (rule.pattern.test(content)) {
        console.error(`FAIL: Potential security leak ("${rule.name}") matched in source file: ${relativePath}`);
        failed = true;
      }
    }
  }

  return !failed;
}

function main() {
  console.log('Running Security & Credentials Check...');
  const envPass = checkEnvFiles();
  const secretsPass = checkSourceSecrets();

  if (!envPass || !secretsPass) {
    process.exit(1);
  } else {
    console.log('PASS: No environment files or raw secret keys detected in source code.');
    process.exit(0);
  }
}

main();
