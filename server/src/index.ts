import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolver";
import { User } from "./db/models/User";
import { getDB, DataBaseStore } from "./db";

const boot = async () => {
  const store = await getDB();

  const server = new ApolloServer({
    cors: {
      origin: "*",
      credentials: true
    },
    typeDefs,
    resolvers,
    dataSources: () => ({
      User: new User(store as DataBaseStore)
    })
  });

  server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

boot();
