import deepmerge from 'deepmerge';
import {info} from '@travi/cli-messages';

import {scaffold as scaffoldBadges} from '../badges/index.js';
import {scaffold as scaffoldConfig} from '../config/index.js';

export default async function ({projectRoot}) {
  info('Configuring Renovate');

  await scaffoldConfig({projectRoot});

  return deepmerge.all([
    scaffoldBadges(),
    {
      nextSteps: [
        {
          summary: 'Decide if the default renovate config is appropriate, '
            + 'or if one of the :js-app or :js-package version are a better fit'
        }
      ]
    }
  ]);
}
