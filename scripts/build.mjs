import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';

const markerPath = 'public/h1-fork-cache-marker.txt';
const markerWasRestored = existsSync(markerPath);

mkdirSync('.vercel/output/static', { recursive: true });
cpSync('public/index.html', '.vercel/output/static/index.html');
if (markerWasRestored) {
  cpSync(markerPath, '.vercel/output/static/h1-fork-cache-marker.txt');
}
writeFileSync(
  '.vercel/output/static/h1-cache-restore-result.txt',
  markerWasRestored ? 'PRESENT\n' : 'ABSENT\n',
);
writeFileSync(
  '.vercel/output/config.json',
  `${JSON.stringify({
    version: 3,
    cache: [markerPath],
  }, null, 2)}\n`,
);

console.log(
  markerWasRestored
    ? 'H1_FORK_CACHE_RESTORE_PRESENT'
    : 'H1_FORK_CACHE_RESTORE_ABSENT',
);
