import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type GetDetailsCategoryQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type GetDetailsCategoryQueryResponse = { __typename?: 'Query' } & {
  getDetailsCategory?: Types.Maybe<
    { __typename?: 'Category' } & Pick<
      Types.Category,
      'id' | 'description' | 'countPage' | 'createdAt' | 'updatedAt'
    > & {
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

export const GetDetailsCategoryDocument = gql`
  query getDetailsCategory($id: ID!) {
    getDetailsCategory(id: $id) {
      id
      description
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
export function useGetDetailsCategoryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetDetailsCategoryQueryResponse, GetDetailsCategoryQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetDetailsCategoryQueryResponse, GetDetailsCategoryQueryVariables>(
    GetDetailsCategoryDocument,
    baseOptions,
  );
}
export function useGetDetailsCategoryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetDetailsCategoryQueryResponse,
    GetDetailsCategoryQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<GetDetailsCategoryQueryResponse, GetDetailsCategoryQueryVariables>(
    GetDetailsCategoryDocument,
    baseOptions,
  );
}
export type GetDetailsCategoryQueryHookResult = ReturnType<typeof useGetDetailsCategoryQuery>;
export type GetDetailsCategoryLazyQueryHookResult = ReturnType<typeof useGetDetailsCategoryLazyQuery>;
export type GetDetailsCategoryQueryResult = ApolloReactCommon.QueryResult<
  GetDetailsCategoryQueryResponse,
  GetDetailsCategoryQueryVariables
>;
