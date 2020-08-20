import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type LogoutMutationVariables = Types.Exact<{ [key: string]: never }>;

export type LogoutMutationResponse = { __typename?: 'Mutation' } & {
  logout: { __typename?: 'LogoutModel' } & Pick<Types.LogoutModel, 'isDeleted'>;
};

export const LogoutDocument = gql`
  mutation logout {
    logout {
      isDeleted
    }
  }
`;
export function useLogoutMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutationResponse, LogoutMutationVariables>,
) {
  return ApolloReactHooks.useMutation<LogoutMutationResponse, LogoutMutationVariables>(LogoutDocument, baseOptions);
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutationResponse>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LogoutMutationResponse,
  LogoutMutationVariables
>;
