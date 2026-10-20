import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';

const markerPath =
  'node_modules/.cache/h1-owned-fork-default-cache-marker.txt';
const markerWasRestored = existsSync(markerPath);

mkdirSync('.vercel/output/static', { recursive: true });
cpSync('public/index.html', '.vercel/output/static/index.html');
if (markerWasRestored) {
  cpSync(
    markerPath,
    '.vercel/output/static/h1-owned-fork-default-cache-marker.txt',
  );
}
writeFileSync(
  '.vercel/output/static/h1-cross-fork-default-cache-result.txt',
  markerWasRestored ? 'PRESENT\n' : 'ABSENT\n',
);
writeFileSync(
  '.vercel/output/config.json',
  `${JSON.stringify({ version: 3 }, null, 2)}\n`,
);

console.log(
  markerWasRestored
    ? 'H1_TRUSTED_PRODUCTION_CROSS_FORK_CACHE_PRESENT'
    : 'H1_TRUSTED_PRODUCTION_CROSS_FORK_CACHE_ABSENT',
);
