import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type GetAllCategoryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAllCategoryQueryResponse = { __typename?: 'Query' } & {
  getAllCategory?: Types.Maybe<
    Array<
      { __typename?: 'Category' } & Pick<
        Types.Category,
        'id' | 'countPage' | 'description' | 'createdAt' | 'updatedAt'
      > & {
          children?: Types.Maybe<
            Array<
              { __typename?: 'Category' } & Pick<
                Types.Category,
                'id' | 'countPage' | 'description' | 'createdAt' | 'updatedAt'
              > & {
                  translations?: Types.Maybe<
                    Array<
                      { __typename?: 'CategoryTranslations' } & Pick<Types.CategoryTranslations, 'id' | 'name' | 'lang'>
                    >
                  >;
                  children?: Types.Maybe<
                    Array<
                      { __typename?: 'Category' } & Pick<
                        Types.Category,
                        'id' | 'countPage' | 'description' | 'createdAt' | 'updatedAt'
                      > & {
                          translations?: Types.Maybe<
                            Array<
                              { __typename?: 'CategoryTranslations' } & Pick<
                                Types.CategoryTranslations,
                                'id' | 'name' | 'lang'
                              >
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
              'id' | 'countPage' | 'description' | 'createdAt' | 'updatedAt'
            >
          >;
          translations?: Types.Maybe<
            Array<{ __typename?: 'CategoryTranslations' } & Pick<Types.CategoryTranslations, 'id' | 'name' | 'lang'>>
          >;
        }
    >
  >;
};

export const GetAllCategoryDocument = gql`
  query getAllCategory {
    getAllCategory {
      id
      countPage
      description
      createdAt
      updatedAt
      children {
        id
        countPage
        description
        createdAt
        updatedAt
        translations {
          id
          name
          lang
        }
        children {
          id
          countPage
          description
          createdAt
          updatedAt
          translations {
            id
            name
            lang
          }
        }
      }
      parent {
        id
        countPage
        description
        createdAt
        updatedAt
      }
      translations {
        id
        name
        lang
      }
    }
  }
`;
export function useGetAllCategoryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllCategoryQueryResponse, GetAllCategoryQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetAllCategoryQueryResponse, GetAllCategoryQueryVariables>(
    GetAllCategoryDocument,
    baseOptions,
  );
}
export function useGetAllCategoryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllCategoryQueryResponse, GetAllCategoryQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetAllCategoryQueryResponse, GetAllCategoryQueryVariables>(
    GetAllCategoryDocument,
    baseOptions,
  );
}
export type GetAllCategoryQueryHookResult = ReturnType<typeof useGetAllCategoryQuery>;
export type GetAllCategoryLazyQueryHookResult = ReturnType<typeof useGetAllCategoryLazyQuery>;
export type GetAllCategoryQueryResult = ApolloReactCommon.QueryResult<
  GetAllCategoryQueryResponse,
  GetAllCategoryQueryVariables
>;
