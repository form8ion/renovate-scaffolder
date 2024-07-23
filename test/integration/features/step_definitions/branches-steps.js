import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('renovate branches are suggested for verification', async function () {
  assert.deepEqual(this.result.branchesToVerify, ['renovate/**']);
});
