import fs from 'fs';
import path from 'path';

const FORBIDDEN_DIRS = [
  'server',
  'api',
  'backend',
  'db',
  'database',
  'controllers',
  'models'
];

const FORBIDDEN_FILES = [
  'server.js',
  'server.ts',
  'server.mjs',
  'app.js',
  'app.py',
  'main.py',
  'prisma.schema',
  'docker-compose.yml'
];

function checkDirectoryStructure(dir = '.') {
  const absoluteDir = path.resolve(dir);
  const files = fs.readdirSync(absoluteDir);
  let failed = false;

  for (const file of files) {
    const filePath = path.join(absoluteDir, file);
    const relativePath = path.relative(process.cwd(), filePath);
    const stat = fs.statSync(filePath);

    // Skip standard system/frontend directories
    if (
      file === 'node_modules' ||
      file === 'dist' ||
      file === '.git' ||
      file === '.agents' ||
      file === '.brainlink' ||
      file === 'src' ||
      file === 'docs' ||
      file === 'scripts'
    ) {
      continue;
    }

    if (stat.isDirectory()) {
      // 1. Fail if forbidden directory names are found outside of src/
      if (FORBIDDEN_DIRS.includes(file.toLowerCase())) {
        console.error(`FAIL: Forbidden backend-related directory found: ${relativePath}`);
        failed = true;
      }
      // Recursively scan subfolders
      if (checkDirectoryStructure(filePath) === false) {
        failed = true;
      }
    } else {
      // 2. Fail if forbidden backend-related filenames are found
      if (FORBIDDEN_FILES.includes(file.toLowerCase())) {
        console.error(`FAIL: Forbidden backend-related file found: ${relativePath}`);
        failed = true;
      }
    }
  }

  return !failed;
}

function scanAllSourceFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        scanAllSourceFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (['.ts', '.tsx', '.js', '.jsx', '.mjs'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

function checkSourceForBackendSignatures() {
  const sourceFiles = scanAllSourceFiles(path.resolve('src'));
  let failed = false;

  // Signatures that represent server-side runtime setups
  const backendSignatures = [
    { name: 'Express initialization', pattern: /const\s+\w+\s*=\s*express\(\)/i },
    { name: 'Server listening', pattern: /\.listen\(\d+/ },
    { name: 'Fastify initialization', pattern: /fastify\(\)/i },
    { name: 'Database client connection', pattern: /(mongoose\.connect|new\s+Client\(|new\s+MongoClient\(|sequelize\.sync)/i },
    { name: 'Server-side route definitions', pattern: /\.(get|post|put|delete)\(['"]\/api\//i }
  ];

  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(process.cwd(), file);

    for (const sig of backendSignatures) {
      if (sig.pattern.test(content)) {
        console.error(`FAIL: Backend signature ("${sig.name}") detected in public source file: ${relativePath}`);
        failed = true;
      }
    }
  }

  return !failed;
}

function main() {
  console.log('Running Backend-Free Verification...');
  const dirPass = checkDirectoryStructure();
  const sigPass = checkSourceForBackendSignatures();

  if (!dirPass || !sigPass) {
    process.exit(1);
  } else {
    console.log('PASS: No backend folders, server configurations, or runtime signatures detected.');
    process.exit(0);
  }
}

main();
