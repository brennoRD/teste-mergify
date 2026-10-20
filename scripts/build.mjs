import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';

const markerPath = 'node_modules/.cache/h1-default-cache-marker.txt';
const markerWasRestored = existsSync(markerPath);

mkdirSync('.vercel/output/static', { recursive: true });
cpSync('public/index.html', '.vercel/output/static/index.html');
if (markerWasRestored) {
  cpSync(markerPath, '.vercel/output/static/default-cache-marker.txt');
}
writeFileSync(
  '.vercel/output/static/h1-default-cache-restore-result.txt',
  markerWasRestored ? 'PRESENT\n' : 'ABSENT\n',
);
writeFileSync(
  '.vercel/output/config.json',
  `${JSON.stringify({
    version: 3,
  }, null, 2)}\n`,
);

console.log(
  markerWasRestored
    ? 'H1_TRUSTED_PR_DEFAULT_CACHE_RESTORE_PRESENT'
    : 'H1_TRUSTED_PR_DEFAULT_CACHE_RESTORE_ABSENT',
);
