import { writeFileSync } from 'node:fs';

writeFileSync('PROJECT-PREINSTALL-RAN.txt', 'unexpected\n');
console.error('PROJECT_PREINSTALL_RAN_UNEXPECTED');
