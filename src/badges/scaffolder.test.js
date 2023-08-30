import {describe, expect, it} from 'vitest';

import scaffoldBadges from './scaffolder.js';

describe('badges scaffolder', () => {
  it('should define the renovate badge', () => {
    const {badges} = scaffoldBadges();

    expect(badges.contribution.renovate).toEqual({
      text: 'Renovate',
      link: 'https://renovatebot.com',
      img: 'https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot'
    });
  });
});
