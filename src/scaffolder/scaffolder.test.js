import deepmerge from 'deepmerge';

import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import {scaffold as scaffoldConfig} from '../config/index.js';
import {scaffold as scaffoldBadges} from '../badges/index.js';
import scaffold from './scaffolder.js';

vi.mock('deepmerge');
vi.mock('../badges');
vi.mock('../config/index.js');

describe('scaffolder', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should scaffold renovate', async () => {
    const projectRoot = any.string();
    const badgesResults = any.simpleObject();
    const mergedResults = any.simpleObject();
    scaffoldBadges.mockReturnValue(badgesResults);
    when(deepmerge.all)
      .calledWith([
        badgesResults,
        {
          nextSteps: [{
            summary: 'Decide if the default renovate config is appropriate, '
              + 'or if one of the :js-app or :js-package version are a better fit'
          }]
        }
      ])
      .mockReturnValue(mergedResults);

    expect(await scaffold({projectRoot})).toEqual(mergedResults);
    expect(scaffoldConfig).toHaveBeenCalledWith({projectRoot});
  });
});
