import { cpSync, mkdirSync, writeFileSync } from 'node:fs';

const marker = 'H1_TRUSTED_PR_DEFAULT_CACHE_MARKER_20261020\n';

mkdirSync('node_modules/.cache', { recursive: true });
writeFileSync('node_modules/.cache/h1-default-cache-marker.txt', marker);

mkdirSync('.vercel/output/static', { recursive: true });
cpSync('public/index.html', '.vercel/output/static/index.html');
writeFileSync('.vercel/output/static/default-cache-marker.txt', marker);
writeFileSync(
  '.vercel/output/config.json',
  `${JSON.stringify({
    version: 3,
  }, null, 2)}\n`,
);

console.log('H1_TRUSTED_PR_DEFAULT_CACHE_MARKER_SEEDED');
