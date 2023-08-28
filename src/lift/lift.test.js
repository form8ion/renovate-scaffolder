import deepmerge from 'deepmerge';

import {afterEach, describe, expect, it, vi} from 'vitest';
import {when} from 'jest-when';
import any from '@travi/any';

import {scaffold as scaffoldBadges} from '../badges';
import lift from './lift';

vi.mock('deepmerge');
vi.mock('../badges');

describe('lift', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should define renovate branches as branches to verify', () => {
    const badgesResults = any.simpleObject();
    const mergedResults = any.simpleObject();
    scaffoldBadges.mockReturnValue(badgesResults);
    when(deepmerge.all)
      .calledWith([badgesResults, {branchesToVerify: ['renovate/**']}])
      .mockReturnValue(mergedResults);

    expect(lift()).toEqual(mergedResults);
  });
});
