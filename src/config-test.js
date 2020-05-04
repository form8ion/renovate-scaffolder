import {promises as fs} from 'fs';
import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import scaffoldConfig from './config';

suite('config', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fs, 'writeFile');
  });

  teardown(() => sandbox.restore());

  test('that the default config is extended', async () => {
    const projectRoot = any.string();

    await scaffoldConfig({projectRoot});

    assert.calledWith(
      fs.writeFile,
      `${projectRoot}/.renovaterc.json`,
      JSON.stringify({extends: ['github>form8ion/renovate-config']})
    );
  });
});
