import * as Types from '../type.interface';

import { UserFragmentFragment } from '../fragments/user-fragment.generated';
import gql from 'graphql-tag';
import { UserFragmentFragmentDoc } from '../fragments/user-fragment.generated';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQueryResponse = { __typename?: 'Query' } & { me: { __typename?: 'User' } & UserFragmentFragment };

export const MeDocument = gql`
  query me {
    me {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQueryResponse, MeQueryVariables>) {
  return ApolloReactHooks.useQuery<MeQueryResponse, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQueryResponse, MeQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<MeQueryResponse, MeQueryVariables>(MeDocument, baseOptions);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQueryResponse, MeQueryVariables>;
