import {fileExists} from '@form8ion/core';

import {describe, vi, it, expect, afterEach} from 'vitest';
import any from '@travi/any';
import {when} from 'vitest-when';

import shouldBeLifted from './predicate.js';

vi.mock('@form8ion/core');

describe('lift predicate', () => {
  const projectRoot = any.string();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should lift the project if it has a renovate config file', async () => {
    when(fileExists).calledWith(`${projectRoot}/.renovaterc.json`).thenResolve(true);

    expect(await shouldBeLifted({projectRoot})).toBe(true);
  });

  it('should lift the project if it has a legacy renovate config file', async () => {
    when(fileExists).calledWith(`${projectRoot}/.renovaterc.json`).thenResolve(false);
    when(fileExists).calledWith(`${projectRoot}/renovate.json`).thenResolve(true);

    expect(await shouldBeLifted({projectRoot})).toBe(true);
  });

  it('should not lift the project if it does not has a renovate config file', async () => {
    when(fileExists).calledWith(`${projectRoot}/.renovaterc.json`).thenResolve(false);
    when(fileExists).calledWith(`${projectRoot}/renovate.json`).thenResolve(false);

    expect(await shouldBeLifted({projectRoot})).toBe(false);
  });
});
