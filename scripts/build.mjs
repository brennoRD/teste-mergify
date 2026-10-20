import { writeFileSync } from 'node:fs';

writeFileSync('PROJECT-BUILD-RAN.txt', 'unexpected\n');
console.error('PROJECT_BUILD_RAN_UNEXPECTED');
