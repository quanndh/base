import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type DeleteCategoryMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type DeleteCategoryMutationResponse = { __typename?: 'Mutation' } & Pick<Types.Mutation, 'deleteCategory'>;

export const DeleteCategoryDocument = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id)
  }
`;
export function useDeleteCategoryMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCategoryMutationResponse, DeleteCategoryMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteCategoryMutationResponse, DeleteCategoryMutationVariables>(
    DeleteCategoryDocument,
    baseOptions,
  );
}
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = ApolloReactCommon.MutationResult<DeleteCategoryMutationResponse>;
export type DeleteCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteCategoryMutationResponse,
  DeleteCategoryMutationVariables
>;
