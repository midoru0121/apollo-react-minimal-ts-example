import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: 'same-origin'
});

export const appClient = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache()
});
