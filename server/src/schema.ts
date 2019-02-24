const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Query {
    hello: String!
    users: [User]!
  }

  type Mutation {
    createUser(name: String): [User]!
  }

  type User {
    id: ID!
    name: String!
    createdAt: String
    updatedAt: String
  }
`;
