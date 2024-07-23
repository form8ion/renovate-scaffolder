import {promises as fs} from 'node:fs';
import {fileExists} from '@form8ion/core';

import assert from 'node:assert';
import {Given, Then} from '@cucumber/cucumber';
import any from '@travi/any';

Given('the project uses a renovate config with the modern filename', async function () {
  await fs.writeFile(`${this.projectRoot}/.renovaterc.json`, JSON.stringify(any.simpleObject()));
});

Given('the project uses a renovate config with the legacy filename', async function () {
  await fs.writeFile(`${this.projectRoot}/renovate.json`, JSON.stringify(any.simpleObject()));
});

Then('the project uses config with the modern filename', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/renovate.json`), false);
  assert.equal(await fileExists(`${this.projectRoot}/.renovaterc.json`), true);
});
