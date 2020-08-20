import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type DeleteMediaMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['ID']>;
}>;

export type DeleteMediaMutationResponse = { __typename?: 'Mutation' } & {
  deleteMedia: { __typename?: 'DeleteMedia' } & Pick<Types.DeleteMedia, 'id' | 'isDeleted'>;
};

export const DeleteMediaDocument = gql`
  mutation deleteMedia($id: ID) {
    deleteMedia(id: $id) {
      id
      isDeleted
    }
  }
`;
export function useDeleteMediaMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteMediaMutationResponse, DeleteMediaMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteMediaMutationResponse, DeleteMediaMutationVariables>(
    DeleteMediaDocument,
    baseOptions,
  );
}
export type DeleteMediaMutationHookResult = ReturnType<typeof useDeleteMediaMutation>;
export type DeleteMediaMutationResult = ApolloReactCommon.MutationResult<DeleteMediaMutationResponse>;
export type DeleteMediaMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteMediaMutationResponse,
  DeleteMediaMutationVariables
>;
