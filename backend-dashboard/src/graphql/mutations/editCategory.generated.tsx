import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type EditCategoryMutationVariables = Types.Exact<{
  input: Types.EditCategoryInput;
}>;

export type EditCategoryMutationResponse = { __typename?: 'Mutation' } & {
  editCategory?: Types.Maybe<
    { __typename?: 'Category' } & Pick<
      Types.Category,
      'id' | 'description' | 'countPage' | 'createdAt' | 'updatedAt'
    > & {
        children?: Types.Maybe<
          Array<
            { __typename?: 'Category' } & Pick<
              Types.Category,
              'id' | 'description' | 'countPage' | 'createdAt' | 'updatedAt'
            > & {
                children?: Types.Maybe<
                  Array<
                    { __typename?: 'Category' } & Pick<
                      Types.Category,
                      'id' | 'description' | 'countPage' | 'createdAt' | 'updatedAt'
                    > & {
                        parent?: Types.Maybe<
                          { __typename?: 'Category' } & Pick<
                            Types.Category,
                            'id' | 'description' | 'countPage' | 'createdAt' | 'updatedAt'
                          > & {
                              children?: Types.Maybe<
                                Array<
                                  { __typename?: 'Category' } & Pick<
                                    Types.Category,
                                    'id' | 'description' | 'countPage' | 'createdAt' | 'updatedAt'
                                  >
                                >
                              >;
                              parent?: Types.Maybe<
                                { __typename?: 'Category' } & Pick<
                                  Types.Category,
                                  'id' | 'description' | 'countPage' | 'createdAt' | 'updatedAt'
                                >
                              >;
                              translations?: Types.Maybe<
                                Array<
                                  { __typename?: 'CategoryTranslations' } & Pick<
                                    Types.CategoryTranslations,
                                    'id' | 'name' | 'lang'
                                  >
                                >
                              >;
                            }
                        >;
                        translations?: Types.Maybe<
                          Array<
                            { __typename?: 'CategoryTranslations' } & Pick<
                              Types.CategoryTranslations,
                              'id' | 'name' | 'lang'
                            > & {
                                category: { __typename?: 'Category' } & Pick<
                                  Types.Category,
                                  'id' | 'description' | 'countPage' | 'createdAt' | 'updatedAt'
                                >;
                              }
                          >
                        >;
                      }
                  >
                >;
              }
          >
        >;
        parent?: Types.Maybe<
          { __typename?: 'Category' } & Pick<
            Types.Category,
            'id' | 'description' | 'countPage' | 'createdAt' | 'updatedAt'
          >
        >;
        translations?: Types.Maybe<
          Array<{ __typename?: 'CategoryTranslations' } & Pick<Types.CategoryTranslations, 'id' | 'name' | 'lang'>>
        >;
      }
  >;
};

export const EditCategoryDocument = gql`
  mutation editCategory($input: EditCategoryInput!) {
    editCategory(input: $input) {
      id
      description
      children {
        id
        description
        children {
          id
          description
          parent {
            id
            description
            children {
              id
              description
              countPage
              createdAt
              updatedAt
            }
            parent {
              id
              description
              countPage
              createdAt
              updatedAt
            }
            countPage
            createdAt
            updatedAt
            translations {
              id
              name
              lang
            }
          }
          countPage
          createdAt
          updatedAt
          translations {
            id
            name
            lang
            category {
              id
              description
              countPage
              createdAt
              updatedAt
            }
          }
        }
        countPage
        createdAt
        updatedAt
      }
      parent {
        id
        description
        countPage
        createdAt
        updatedAt
      }
      countPage
      createdAt
      updatedAt
      translations {
        id
        name
        lang
      }
    }
  }
`;
export function useEditCategoryMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<EditCategoryMutationResponse, EditCategoryMutationVariables>,
) {
  return ApolloReactHooks.useMutation<EditCategoryMutationResponse, EditCategoryMutationVariables>(
    EditCategoryDocument,
    baseOptions,
  );
}
export type EditCategoryMutationHookResult = ReturnType<typeof useEditCategoryMutation>;
export type EditCategoryMutationResult = ApolloReactCommon.MutationResult<EditCategoryMutationResponse>;
export type EditCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditCategoryMutationResponse,
  EditCategoryMutationVariables
>;
