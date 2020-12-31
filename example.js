// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {lift, predicate, scaffold} from './lib/index.cjs';

// remark-usage-ignore-next
stubbedFs();

// #### Execute
scaffold({projectRoot: process.cwd()});

predicate({projectRoot: process.cwd()});

lift();

// remark-usage-ignore-next
stubbedFs.restore();
