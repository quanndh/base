import { ApolloClient, InMemoryCache, NormalizedCacheObject, HttpLink } from '@apollo/client';
import possibleTypes from './possibleTypes.json';
import { GetServerSidePropsContext } from 'next';

const langs = ['en', 'vi'];
export type InitApolloProps = {
  initialState?: NormalizedCacheObject;
  ctx?: GetServerSidePropsContext;
  lang?: string;
};
export function createApolloClient({ initialState, lang }: InitApolloProps) {
  const isServer = typeof window === 'undefined';
  let apiURL = process.env.API_URL;
  if (process.env.INTERNAL_SERVICE === 'true') {
    apiURL = isServer ? `${process.env.INTERNAL_SERVICE_NAME}/graphql` : '/graphql';
  }

  const cache = new InMemoryCache({
    addTypename: true,
    possibleTypes: possibleTypes.possibleTypes,
    typePolicies: {
      MenuModel: {
        fields: {
          children: {
            merge(existing = [], incoming: unknown[]) {
              // return [...existing, ...incoming];
              return incoming;
            },
          },
        },
      },
    },
  });
  return new ApolloClient({
    link: new HttpLink({
      uri: apiURL,
      headers: {
        language: lang ? (langs.includes(lang) ? lang : 'vi') : 'vi',
      },
    }),
    assumeImmutableResults: true,
    // ssrForceFetchDelay: 100,
    name: 'MBAL-Portal',
    ssrMode: isServer,
    cache: initialState ? cache.restore(initialState) : cache,
    defaultOptions: {
      query: {
        fetchPolicy: 'cache-first',
      },
    },
  });
}
