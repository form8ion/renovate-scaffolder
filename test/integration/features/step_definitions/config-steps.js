import {promises as fs} from 'node:fs';

import {Given} from '@cucumber/cucumber';
import any from '@travi/any';

Given('the project uses a renovate config with the modern filename', async function () {
  await fs.writeFile(`${this.projectRoot}/.renovaterc.json`, JSON.stringify(any.simpleObject()));
});
