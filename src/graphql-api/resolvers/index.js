import {
  getRule
} from './gets';

import {
  user
} from './users';

import {
  readAllEquipments
} from './equipments';

import {
  Economies
} from './economies';

import {
  Active
} from './sensors';

import GraphQLJSON from 'graphql-type-json';

export default {
  JSON: GraphQLJSON,

  Query: {
    hello: () => { return "Hello Worl" },
    user,
    readAllEquipments
  },

  Mutation: {
    Active,
    Economies
  },

  Users: {
    rules: ({ rule_id }) => getRule(rule_id)
  }
}
