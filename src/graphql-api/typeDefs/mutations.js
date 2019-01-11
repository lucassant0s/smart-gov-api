export default `
  type Mutation {
    user(name: String): Users
    Active(name: String, active: Boolean): JSON

    Economies(economy: JSON): JSON
  }
`;
