import {fileExists} from '@form8ion/core';

export default async function ({projectRoot}) {
  const [configExists, legacyConfigExists] = await Promise.all([
    fileExists(`${projectRoot}/.renovaterc.json`),
    fileExists(`${projectRoot}/renovate.json`)
  ]);

  return configExists || legacyConfigExists;
}
