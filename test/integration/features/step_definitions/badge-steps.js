import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the renovate badge details are defined', async function () {
  assert.deepEqual(
    this.result.badges.contribution.renovate,
    {
      text: 'Renovate',
      link: 'https://renovatebot.com',
      img: 'https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot'
    }
  );
});
