import {fileExists} from '@form8ion/core';

import {describe, vi, it, expect, afterEach} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import shouldBeLifted from './predicate.js';

vi.mock('@form8ion/core');

describe('lift predicate', () => {
  const projectRoot = any.string();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should lift the project if it has a renovate config file', async () => {
    when(fileExists).calledWith(`${projectRoot}/.renovaterc.json`).mockResolvedValue(true);

    expect(await shouldBeLifted({projectRoot})).toBe(true);
  });

  it('should not lift the project if it does not has a renovate config file', async () => {
    when(fileExists).calledWith(`${projectRoot}/.renovaterc.json`).mockResolvedValue(false);

    expect(await shouldBeLifted({projectRoot})).toBe(false);
  });
});
