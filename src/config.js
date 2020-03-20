import {promises as fs} from 'fs';

export default async function ({projectRoot}) {
  await fs.writeFile(`${projectRoot}/renovate.json`, JSON.stringify({extends: ['github>form8ion/renovate-config']}));
}
