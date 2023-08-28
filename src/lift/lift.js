import deepmerge from 'deepmerge';

import {scaffold as scaffoldBadges} from '../badges';

export default function () {
  return deepmerge.all([
    scaffoldBadges(),
    {branchesToVerify: ['renovate/**']}
  ]);
}
