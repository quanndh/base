import { useMemo } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createApolloClient, InitApolloProps } from './client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export function initializeApollo(args?: InitApolloProps) {
  const { initialState, ctx, lang } = args ?? {};
  const _apolloClient = apolloClient ?? createApolloClient({ initialState, ctx, lang });

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(args?: InitApolloProps) {
  const { initialState, lang } = args ?? {};
  const store = useMemo(() => initializeApollo({ initialState, lang }), [initialState, lang]);
  return store;
}
