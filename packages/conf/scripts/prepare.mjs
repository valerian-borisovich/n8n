#!/usr/bin/env node

import { $, echo, fs } from 'zx';

$.verbose = true;
process.env.FORCE_COLOR = '1';

echo('🏗️ Started scripts/prepare.mjs ');

//const path = require('path');
//path.join("../",__dirname, 'latest');


/*
import {execSync} from 'node:child_process';
///
const suggestion = '\033[1;92mpnpm\033[0;31m';
console.error('\033[0;31m');
console.error('╭───────────────────────────────────────────╮');
console.error(`│\tPlease use ${suggestion} instead of ${name} \t    │`);
console.error('╰───────────────────────────────────────────╯');
console.error('\033[0m');
///
/// Skip install in CI or Docker build
if (process.env.CI || process.env.DOCKER_BUILD) { process.exit(0); }
///
execSync('./node_modules/.bin/lefthook install', { stdio: 'inherit' });
*/

/*
console.log('\033[0;31m');
console.log('╭───────────────────────────────────────────╮');
console.log(`│\t     \t    │`);
console.log('╰───────────────────────────────────────────╯');
console.log('\033[0m');
*/

//echo('🏗️ chmod +x scripts/*.sh');
await $`chmod +x scripts/*.sh`;

//echo('🏗️ Running scripts/testim.sh');
//await $`scripts/testim.sh`;

echo('🏗️ Running scripts/load.sh');
await $`scripts/load.sh`;

