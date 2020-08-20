import type * as Types from '../type.interface';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type MediasQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>;
  page?: Types.Maybe<Types.Scalars['Int']>;
  parentId?: Types.Maybe<Types.Scalars['String']>;
}>;

export type MediasQueryResponse = { __typename?: 'Query' } & {
  medias?: Types.Maybe<
    { __typename?: 'MediaConnection' } & {
      items?: Types.Maybe<
        Array<
          { __typename?: 'Media' } & Pick<
            Types.Media,
            | 'id'
            | 'fileSize'
            | 'name'
            | 'filePath'
            | 'mimeType'
            | 'isDeleted'
            | 'ownerId'
            | 'type'
            | 'createdAt'
            | 'updatedAt'
          >
        >
      >;
      meta: { __typename?: 'BasePaginationMeta' } & Pick<
        Types.BasePaginationMeta,
        'itemCount' | 'totalItems' | 'itemsPerPage' | 'totalPages' | 'currentPage'
      >;
    }
  >;
};

export const MediasDocument = gql`
  query medias($limit: Int, $page: Int, $parentId: String) {
    medias(limit: $limit, page: $page, parentId: $parentId) {
      items {
        id
        fileSize
        name
        filePath
        mimeType
        isDeleted
        ownerId
        type
        createdAt
        updatedAt
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
export function useMediasQuery(baseOptions?: Apollo.QueryHookOptions<MediasQueryResponse, MediasQueryVariables>) {
  return Apollo.useQuery<MediasQueryResponse, MediasQueryVariables>(MediasDocument, baseOptions);
}
export function useMediasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MediasQueryResponse, MediasQueryVariables>,
) {
  return Apollo.useLazyQuery<MediasQueryResponse, MediasQueryVariables>(MediasDocument, baseOptions);
}
export type MediasQueryHookResult = ReturnType<typeof useMediasQuery>;
export type MediasLazyQueryHookResult = ReturnType<typeof useMediasLazyQuery>;
export type MediasQueryResult = Apollo.QueryResult<MediasQueryResponse, MediasQueryVariables>;
