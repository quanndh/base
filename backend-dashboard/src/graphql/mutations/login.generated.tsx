import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type LoginMutationVariables = Types.Exact<{
  password: Types.Scalars['String'];
  username: Types.Scalars['String'];
}>;

export type LoginMutationResponse = { __typename?: 'Mutation' } & {
  login: { __typename?: 'AuthConnection' } & Pick<Types.AuthConnection, 'accessToken' | 'refreshToken'> & {
      user: { __typename?: 'User' } & Pick<
        Types.User,
        | 'id'
        | 'firstName'
        | 'username'
        | 'email'
        | 'lastName'
        | 'isActive'
        | 'userType'
        | 'defaultLanguage'
        | 'createdAt'
        | 'updatedAt'
        | 'isDeleted'
        | 'deletedAt'
        | 'role'
        | 'fullName'
      >;
    };
};

export const LoginDocument = gql`
  mutation login($password: String!, $username: String!) {
    login(password: $password, username: $username) {
      accessToken
      refreshToken
      user {
        id
        firstName
        username
        email
        lastName
        isActive
        userType
        defaultLanguage
        createdAt
        updatedAt
        isDeleted
        deletedAt
        role
        fullName
      }
    }
  }
`;
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutationResponse, LoginMutationVariables>,
) {
  return ApolloReactHooks.useMutation<LoginMutationResponse, LoginMutationVariables>(LoginDocument, baseOptions);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutationResponse>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutationResponse, LoginMutationVariables>;
