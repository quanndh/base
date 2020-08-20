import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type GetPagingCategoryQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>;
  page?: Types.Maybe<Types.Scalars['Int']>;
  search?: Types.Maybe<Types.Scalars['String']>;
}>;

export type GetPagingCategoryQueryResponse = { __typename?: 'Query' } & {
  getPagingCategory?: Types.Maybe<
    { __typename?: 'CategoryConnection' } & {
      items?: Types.Maybe<
        Array<
          { __typename?: 'Category' } & Pick<
            Types.Category,
            'id' | 'parentId' | 'countPage' | 'description' | 'createdAt' | 'updatedAt'
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
                    'id' | 'parentId' | 'countPage' | 'description' | 'createdAt' | 'updatedAt'
                  > & {
                      translations?: Types.Maybe<
                        Array<
                          { __typename?: 'CategoryTranslations' } & Pick<
                            Types.CategoryTranslations,
                            'id' | 'name' | 'lang'
                          >
                        >
                      >;
                      children?: Types.Maybe<
                        Array<
                          { __typename?: 'Category' } & Pick<
                            Types.Category,
                            'id' | 'parentId' | 'countPage' | 'description' | 'createdAt' | 'updatedAt'
                          > & {
                              translations?: Types.Maybe<
                                Array<
                                  { __typename?: 'CategoryTranslations' } & Pick<
                                    Types.CategoryTranslations,
                                    'id' | 'name' | 'lang'
                                  >
                                >
                              >;
                              parent?: Types.Maybe<
                                { __typename?: 'Category' } & Pick<
                                  Types.Category,
                                  'id' | 'parentId' | 'countPage' | 'description' | 'createdAt' | 'updatedAt'
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
                  'id' | 'parentId' | 'countPage' | 'description' | 'createdAt' | 'updatedAt'
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
              >;
            }
        >
      >;
      meta: { __typename?: 'BasePaginationMeta' } & Pick<
        Types.BasePaginationMeta,
        'itemCount' | 'totalItems' | 'itemsPerPage' | 'totalPages' | 'currentPage'
      >;
    }
  >;
};

export const GetPagingCategoryDocument = gql`
  query getPagingCategory($limit: Int, $page: Int, $search: String) {
    getPagingCategory(limit: $limit, page: $page, search: $search) {
      items {
        id
        parentId
        countPage
        translations {
          id
          name
          lang
        }
        description
        createdAt
        updatedAt
        children {
          id
          parentId
          countPage
          translations {
            id
            name
            lang
          }
          description
          createdAt
          updatedAt
          children {
            id
            parentId
            countPage
            description
            createdAt
            updatedAt
            translations {
              id
              name
              lang
            }
            parent {
              id
              parentId
              countPage
              description
              createdAt
              updatedAt
            }
          }
        }
        parent {
          id
          parentId
          countPage
          translations {
            id
            name
            lang
          }
          description
          createdAt
          updatedAt
        }
      }
      meta {
        itemCount
        totalItems
        itemsPerPage
        totalPages
        currentPage
      }
    }
  }
`;
export function useGetPagingCategoryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetPagingCategoryQueryResponse, GetPagingCategoryQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetPagingCategoryQueryResponse, GetPagingCategoryQueryVariables>(
    GetPagingCategoryDocument,
    baseOptions,
  );
}
export function useGetPagingCategoryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPagingCategoryQueryResponse, GetPagingCategoryQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetPagingCategoryQueryResponse, GetPagingCategoryQueryVariables>(
    GetPagingCategoryDocument,
    baseOptions,
  );
}
export type GetPagingCategoryQueryHookResult = ReturnType<typeof useGetPagingCategoryQuery>;
export type GetPagingCategoryLazyQueryHookResult = ReturnType<typeof useGetPagingCategoryLazyQuery>;
export type GetPagingCategoryQueryResult = ApolloReactCommon.QueryResult<
  GetPagingCategoryQueryResponse,
  GetPagingCategoryQueryVariables
>;
