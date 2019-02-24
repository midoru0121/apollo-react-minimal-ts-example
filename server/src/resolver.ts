import { User } from "db/models/User";

export const resolvers = {
  Query: {
    /*
      {
        hello
      }
    */
    hello: (root: undefined, args: undefined, context: undefined) => "World!",

    /*
    {
      users {
        id
        name
      } 
    }
    */
    users: async (
      root: undefined,
      args: undefined,
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.User.findAll();
    }
  },

  Mutation: {
    /*
      mutation createUserTest {
        User: createUser(name: "hello") {
          id
        }
      }
    */
    createUser: async (
      _: undefined,
      {
        name
      }: {
        name: string;
      },
      { dataSources }: { dataSources: { User: User } }
    ) => {
      await dataSources.User.findOrCreate({ where: { name } });
      return await dataSources.User.findAll();
    }
  }
};
