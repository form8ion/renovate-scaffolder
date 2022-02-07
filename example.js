// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {lift, predicate as projectUsesRenovate, scaffold} from './lib/index.cjs';

// remark-usage-ignore-next
stubbedFs();

// #### Execute
(async () => {
  await scaffold({projectRoot: process.cwd()});

  if (await projectUsesRenovate({projectRoot: process.cwd()})) {
    await lift();
  }
})();
