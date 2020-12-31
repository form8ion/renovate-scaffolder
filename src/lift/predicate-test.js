import * as core from '@form8ion/core';
import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import shouldBeLifted from './predicate';

suite('lift predicate', () => {
  let sandbox;
  const projectRoot = any.string();

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(core, 'fileExists');
  });

  teardown(() => sandbox.restore());

  test('that the project should be lifted if it has a renovate config file', async () => {
    core.fileExists.withArgs(`${projectRoot}/.renovaterc.json`).resolves(true);

    assert.isTrue(await shouldBeLifted({projectRoot}));
  });

  test('that the project should not be lifted if it does not have a renovate config file', async () => {
    core.fileExists.resolves(false);

    assert.isFalse(await shouldBeLifted({projectRoot}));
  });
});
