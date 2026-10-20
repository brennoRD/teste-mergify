import { writeFileSync } from 'node:fs';

writeFileSync('PROJECT-APP-BUILD-RAN.txt', 'unexpected\n');
console.error('PROJECT_APP_BUILD_RAN_UNEXPECTED');
