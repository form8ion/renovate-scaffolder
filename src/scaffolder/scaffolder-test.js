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

    assert.deepEqual(
      await scaffold({projectRoot}),
      {
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
      }
    );
    assert.calledWith(config.default, {projectRoot});
  });
});
