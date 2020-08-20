import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import possibleTypes from './possibleTypes.json';
// import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
// import { from } from 'apollo-link';
// import { HttpLink } from 'apollo-link-http';
// import ApolloLinkTimeout from 'apollo-link-timeout';
// import introspectionResult from './introspection-result';

// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   introspectionQueryResultData: introspectionResult,
// });

// const timeoutLink = new ApolloLinkTimeout(10000); // 10 second timeout

const httpLink = new BatchHttpLink({
  uri: process.env.REACT_APP_API_URL,
  credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
  includeExtensions: true,
  batchMax: 5,
});

// setup your client
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({ possibleTypes: possibleTypes.possibleTypes }),
  name: 'mbageascms-dashboard',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
  },
  connectToDevTools: process.env.NODE_ENV !== 'production',
});
