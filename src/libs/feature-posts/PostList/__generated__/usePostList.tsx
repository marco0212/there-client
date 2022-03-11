import * as Types from '../../../../graphql-types';

import { gql } from '@apollo/client';
import { PostElementFragmentDoc } from '../../PostElement/__generated__/usePostElement';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ThereOnPostListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ThereOnPostListQuery = { __typename?: 'Query', there: { __typename?: 'There', id: string, posts: Array<{ __typename?: 'Post', id: string, photos: Array<string> }> } };


export const ThereOnPostListDocument = gql`
    query ThereOnPostList {
  there {
    id
    posts {
      ...PostElement
    }
  }
}
    ${PostElementFragmentDoc}`;

/**
 * __useThereOnPostListQuery__
 *
 * To run a query within a React component, call `useThereOnPostListQuery` and pass it any options that fit your needs.
 * When your component renders, `useThereOnPostListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThereOnPostListQuery({
 *   variables: {
 *   },
 * });
 */
export function useThereOnPostListQuery(baseOptions?: Apollo.QueryHookOptions<ThereOnPostListQuery, ThereOnPostListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThereOnPostListQuery, ThereOnPostListQueryVariables>(ThereOnPostListDocument, options);
      }
export function useThereOnPostListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThereOnPostListQuery, ThereOnPostListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThereOnPostListQuery, ThereOnPostListQueryVariables>(ThereOnPostListDocument, options);
        }
export type ThereOnPostListQueryHookResult = ReturnType<typeof useThereOnPostListQuery>;
export type ThereOnPostListLazyQueryHookResult = ReturnType<typeof useThereOnPostListLazyQuery>;
export type ThereOnPostListQueryResult = Apollo.QueryResult<ThereOnPostListQuery, ThereOnPostListQueryVariables>;