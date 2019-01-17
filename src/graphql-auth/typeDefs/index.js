import {
  Signup
} from './inputs';

import {
  Users,
  Rules
} from './types';

import enums from './enums';
import queries from './queries';
import mutations from './mutations';

export default `
  ${Signup}
  ${Users}
  ${Rules}
  ${enums}
  ${queries}
  ${mutations}
`;
