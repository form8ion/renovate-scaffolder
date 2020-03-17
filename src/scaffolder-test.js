import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as config from './config';
import scaffold from './scaffolder';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(config, 'default');
  });

  teardown(() => sandbox.restore());

  test('that renovate gets scaffolded', async () => {
    const projectRoot = any.string();

    assert.deepEqual(await scaffold({projectRoot}), {});
    assert.calledWith(config.default, {projectRoot});
  });
});
