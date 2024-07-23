import deepmerge from 'deepmerge';

import {scaffold as scaffoldBadges} from '../badges/index.js';
import {lift as liftConfig} from '../config/index.js';

export default async function ({projectRoot}) {
  await liftConfig({projectRoot});

  return deepmerge.all([
    scaffoldBadges(),
    {branchesToVerify: ['renovate/**']}
  ]);
}
