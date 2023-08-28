import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import scaffoldConfig from './config';
import scaffold from './scaffolder';

vi.mock('./config');

describe('scaffolder', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should scaffold renovate', async () => {
    const projectRoot = any.string();

    expect(await scaffold({projectRoot})).toEqual({
      badges: {
        contribution: {
          renovate: {
            text: 'Renovate',
            link: 'https://renovatebot.com',
            img: 'https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot'
          }
        }
      },
      nextSteps: [
        {
          summary: 'Decide if the default renovate config is appropriate, '
            + 'or if one of the :js-app or :js-package version are a better fit'
        }
      ]
    });
    expect(scaffoldConfig).toHaveBeenCalledWith({projectRoot});
  });
});
