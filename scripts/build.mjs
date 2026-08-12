import { mkdir, copyFile, access } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

async function copyIfExists(source, target) {
  try {
    await access(source, fsConstants.F_OK);
    await mkdir(dirname(target), { recursive: true });
    await copyFile(source, target);
  } catch {
    // File does not exist; skip it.
  }
}

await mkdir(dist, { recursive: true });
await copyIfExists(join(root, 'index.html'), join(dist, 'index.html'));
await copyIfExists(join(root, '.nojekyll'), join(dist, '.nojekyll'));
await copyIfExists(join(root, 'nojekyll'), join(dist, 'nojekyll'));
await copyIfExists(join(root, 'src', 'App.js'), join(dist, 'src', 'App.js'));
await copyIfExists(join(root, 'src', 'main.js'), join(dist, 'src', 'main.js'));

console.log('Build complete: copied app files to dist/.');
