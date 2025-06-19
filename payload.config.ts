import { buildConfig } from 'payload/config';
import { customWorkflowPlugin } from 'payload-plugin-workflow';

import { Users } from './collections/Users';
import { Articles } from './collections/Articles';

export default buildConfig(
  customWorkflowPlugin([
    Articles,
  ])
  , {
    collections: [Users],
    admin: {
      user: 'users',
    },
    globals: [],
  }
);
