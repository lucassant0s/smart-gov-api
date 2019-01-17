import {
  Rules,
  Users
} from './types';

import queries from './queries';
import mutations from './mutations';

export default `
  scalar JSON
  ${Rules}
  ${Users}
  ${queries}
  ${mutations}
`;
