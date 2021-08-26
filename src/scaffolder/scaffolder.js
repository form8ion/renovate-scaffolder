import {info} from '@travi/cli-messages';
import scaffoldConfig from './config';

export default async function ({projectRoot}) {
  info('Configuring Renovate');

  await scaffoldConfig({projectRoot});

  return {
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
  };
}
