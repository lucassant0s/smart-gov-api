import {
  Signin,
  Signup
} from './auth';

import GraphQLJSON from 'graphql-type-json';

export default {
  JSON: GraphQLJSON,

  Query: {
    hello: () => {
      return "Hello World!"
    }
  },

  Mutation: {
    Signin,
    Signup
  }
}
