import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import stubbedFs from 'mock-fs';
import {After, Before, When} from '@cucumber/cucumber';

let lift, test;

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

Before(async function () {
  this.projectRoot = process.cwd();
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  ({lift, test} = await import('@form8ion/renovate-scaffolder'));

  stubbedFs({
    node_modules: stubbedNodeModules
  });
});

After(function () {
  stubbedFs.restore();
});

When('the scaffolder results are processed', async function () {
  if (await test({projectRoot: this.projectRoot})) {
    this.result = await lift({projectRoot: this.projectRoot});
  }
});
