export default `
  type Mutation {
    Signup(user: Signup): String!
    Signin(email: String, password: String): String
  }
`;
