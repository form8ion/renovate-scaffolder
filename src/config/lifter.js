import {promises as fs} from 'node:fs';
import {fileExists} from '@form8ion/core';

export default async function ({projectRoot}) {
  if (await fileExists(`${projectRoot}/renovate.json`)) {
    await fs.rename(`${projectRoot}/renovate.json`, `${projectRoot}/.renovaterc.json`);
  }
}
