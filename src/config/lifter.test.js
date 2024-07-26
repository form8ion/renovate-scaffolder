import {promises as fs} from 'node:fs';
import {fileExists} from '@form8ion/core';

import any from '@travi/any';
import {when} from 'jest-when';
import {afterEach, describe, expect, it, vi} from 'vitest';

import liftConfig from './lifter.js';

vi.mock('node:fs');
vi.mock('@form8ion/core');

describe('config lifter', () => {
  const projectRoot = any.string();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should move legacy config to the modern filename', async () => {
    when(fileExists).calledWith(`${projectRoot}/renovate.json`).mockResolvedValue(true);

    await liftConfig({projectRoot});

    expect(fs.rename).toHaveBeenCalledWith(`${projectRoot}/renovate.json`, `${projectRoot}/.renovaterc.json`);
  });

  it('should not attempt to move legacy config if none exists', async () => {
    when(fileExists).calledWith(`${projectRoot}/renovate.json`).mockResolvedValue(false);

    await liftConfig({projectRoot});

    expect(fs.rename).not.toHaveBeenCalled();
  });
});
