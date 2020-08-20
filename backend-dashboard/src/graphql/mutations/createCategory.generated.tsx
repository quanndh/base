import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type CreateCategoryMutationVariables = Types.Exact<{
  input: Types.NewCategoryInput;
}>;

export type CreateCategoryMutationResponse = { __typename?: 'Mutation' } & {
  createCategory?: Types.Maybe<
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

export const CreateCategoryDocument = gql`
  mutation createCategory($input: NewCategoryInput!) {
    createCategory(input: $input) {
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
export function useCreateCategoryMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCategoryMutationResponse, CreateCategoryMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateCategoryMutationResponse, CreateCategoryMutationVariables>(
    CreateCategoryDocument,
    baseOptions,
  );
}
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = ApolloReactCommon.MutationResult<CreateCategoryMutationResponse>;
export type CreateCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCategoryMutationResponse,
  CreateCategoryMutationVariables
>;
