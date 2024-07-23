import {write} from '@form8ion/config-file';
import {fileTypes} from '@form8ion/core';

export default async function ({projectRoot}) {
  await write({
    name: 'renovate',
    format: fileTypes.JSON,
    path: projectRoot,
    config: {
      $schema: 'https://docs.renovatebot.com/renovate-schema.json',
      extends: ['github>form8ion/renovate-config']
    }
  });
}
