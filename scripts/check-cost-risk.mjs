import fs from 'fs';
import path from 'path';

const FORBIDDEN_DEPENDENCIES = [
  'supabase',
  'firebase',
  '@vercel/analytics',
  '@vercel/speed-insights',
  'netlify',
  'clerk',
  'stripe',
  'resend',
  'emailjs',
  'openai',
  'anthropic',
  'express',
  'fastify',
  'next',
  'mongodb',
  'pg',
  'mysql',
  'mysql2',
  'redis',
  'prisma',
  'mongoose',
  'sequelize'
];

function checkPackageJson() {
  const pkgPath = path.resolve('package.json');
  if (!fs.existsSync(pkgPath)) {
    console.error('FAIL: package.json not found!');
    process.exit(1);
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const allDeps = {
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {})
  };

  const foundForbidden = [];
  for (const dep of FORBIDDEN_DEPENDENCIES) {
    if (allDeps[dep] || Object.keys(allDeps).some(k => k.includes(dep))) {
      foundForbidden.push(dep);
    }
  }

  return foundForbidden;
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
      if (['.ts', '.tsx', '.js', '.jsx', '.mjs', '.html'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

function checkSourceImports() {
  const sourceFiles = scanDir(path.resolve('src'));
  const foundImports = [];

  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, 'utf8');
    for (const dep of FORBIDDEN_DEPENDENCIES) {
      // Look for import statements or require calls, e.g., import ... from 'supabase' or require('supabase')
      const regex = new RegExp(`(import|from|require)\\s+['"\`]${dep}['"\`]`, 'i');
      if (regex.test(content)) {
        foundImports.push({ file: path.relative(process.cwd(), file), dependency: dep });
      }
    }
  }

  return foundImports;
}

function main() {
  console.log('Running Cost Risk & Dependency Check...');
  const forbiddenDeps = checkPackageJson();
  const forbiddenImports = checkSourceImports();

  let failed = false;

  if (forbiddenDeps.length > 0) {
    console.error(`FAIL: Forbidden dependency found in package.json: ${forbiddenDeps.join(', ')}`);
    failed = true;
  }

  if (forbiddenImports.length > 0) {
    console.error('FAIL: Forbidden imports found in source files:');
    forbiddenImports.forEach(imp => {
      console.error(`  - In file: ${imp.file} (imported: ${imp.dependency})`);
    });
    failed = true;
  }

  if (failed) {
    process.exit(1);
  } else {
    console.log('PASS: No forbidden dependencies or imports detected.');
    process.exit(0);
  }
}

main();
