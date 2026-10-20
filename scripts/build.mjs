import { cpSync, mkdirSync, writeFileSync } from 'node:fs';

const marker = 'H1_TRUSTED_PR_CACHE_MARKER_20261020\n';

mkdirSync('h1-cache', { recursive: true });
writeFileSync('h1-cache/trusted-marker.txt', marker);

mkdirSync('.vercel/output/static', { recursive: true });
cpSync('public/index.html', '.vercel/output/static/index.html');
writeFileSync('.vercel/output/static/trusted-marker.txt', marker);
writeFileSync(
  '.vercel/output/config.json',
  `${JSON.stringify({
    version: 3,
    cache: ['h1-cache/trusted-marker.txt'],
  }, null, 2)}\n`,
);

console.log('H1_TRUSTED_PR_CACHE_MARKER_SEEDED');
