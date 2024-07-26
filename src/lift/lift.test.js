import deepmerge from 'deepmerge';

import {afterEach, describe, expect, it, vi} from 'vitest';
import {when} from 'jest-when';
import any from '@travi/any';

import {scaffold as scaffoldBadges} from '../badges/index.js';
import {lift as liftConfig} from '../config/index.js';
import lift from './lift.js';

vi.mock('deepmerge');
vi.mock('../badges');
vi.mock('../config/index.js');

describe('lift', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should define renovate branches as branches to verify', async () => {
    const badgesResults = any.simpleObject();
    const mergedResults = any.simpleObject();
    const projectRoot = any.string();
    scaffoldBadges.mockReturnValue(badgesResults);
    when(deepmerge.all)
      .calledWith([badgesResults, {branchesToVerify: ['renovate/**']}])
      .mockReturnValue(mergedResults);

    expect(await lift({projectRoot})).toEqual(mergedResults);

    expect(liftConfig).toHaveBeenCalledWith({projectRoot});
  });
});
