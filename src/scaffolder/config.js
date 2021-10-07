import {promises as fs} from 'fs';

export default async function ({projectRoot}) {
  await fs.writeFile(
    `${projectRoot}/.renovaterc.json`,
    JSON.stringify({
      $schema: 'https://docs.renovatebot.com/renovate-schema.json',
      extends: ['github>form8ion/renovate-config']
    })
  );
}
