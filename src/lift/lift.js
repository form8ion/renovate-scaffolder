import deepmerge from 'deepmerge';

import {scaffold as scaffoldBadges} from '../badges/index.js';

export default function () {
  return deepmerge.all([
    scaffoldBadges(),
    {branchesToVerify: ['renovate/**']}
  ]);
}
