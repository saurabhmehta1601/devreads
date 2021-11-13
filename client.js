import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
  concat
} from "@apollo/client";

const httpLink = new HttpLink({ uri: 'https://devreads.hasura.app/v1/graphql',
 })
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_X_HASURA_ADMIN_SECRET
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
});

export default client
