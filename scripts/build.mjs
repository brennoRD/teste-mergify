import { cpSync, mkdirSync, writeFileSync } from 'node:fs';

const marker = 'H1_OWNED_FORK_CACHE_MARKER_20261020\n';

mkdirSync('public', { recursive: true });
writeFileSync('public/h1-fork-cache-marker.txt', marker);

mkdirSync('.vercel/output/static', { recursive: true });
cpSync('public/index.html', '.vercel/output/static/index.html');
writeFileSync('.vercel/output/static/h1-fork-cache-marker.txt', marker);
writeFileSync(
  '.vercel/output/config.json',
  `${JSON.stringify({
    version: 3,
    cache: ['public/h1-fork-cache-marker.txt'],
  }, null, 2)}\n`,
);

console.log('H1_FORK_CACHE_MARKER_SEEDED');
