import {fileTypes} from '@form8ion/core';
import {write} from '@form8ion/config-file';

import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import scaffoldConfig from './scaffolder.js';

vi.mock('@form8ion/config-file');

describe('config', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should extend the default config', async () => {
    const projectRoot = any.string();

    await scaffoldConfig({projectRoot});

    expect(write).toHaveBeenCalledWith({
      name: 'renovate',
      format: fileTypes.JSON,
      path: projectRoot,
      config: {
        $schema: 'https://docs.renovatebot.com/renovate-schema.json',
        extends: ['github>form8ion/renovate-config']
      }
    });
  });
});
