import {validateOptions, optionsSchemas} from '@form8ion/core';

import {Then, When} from '@cucumber/cucumber';

// eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
import * as plugin from '@form8ion/renovate-scaffolder';

When('the renovate plugin is compared to form8ion plugin conventions', async function () {
  return undefined;
});

Then('the public interface is compatible with the plugin schema', async function () {
  validateOptions(optionsSchemas.form8ionPlugin, plugin);
});
