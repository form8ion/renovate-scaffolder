// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold} from './lib/index.cjs';

// remark-usage-ignore-next
stubbedFs();

// #### Execute
scaffold({projectRoot: process.cwd()});

// remark-usage-ignore-next
stubbedFs.restore();
