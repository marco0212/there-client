import * as Types from '../../../../graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CoverImageOnCoverImageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CoverImageOnCoverImageQuery = { __typename?: 'Query', there: { __typename?: 'There', id: string, coverImage?: string | null } };


export const CoverImageOnCoverImageDocument = gql`
    query CoverImageOnCoverImage {
  there {
    id
    coverImage
  }
}
    `;

/**
 * __useCoverImageOnCoverImageQuery__
 *
 * To run a query within a React component, call `useCoverImageOnCoverImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoverImageOnCoverImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoverImageOnCoverImageQuery({
 *   variables: {
 *   },
 * });
 */
export function useCoverImageOnCoverImageQuery(baseOptions?: Apollo.QueryHookOptions<CoverImageOnCoverImageQuery, CoverImageOnCoverImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoverImageOnCoverImageQuery, CoverImageOnCoverImageQueryVariables>(CoverImageOnCoverImageDocument, options);
      }
export function useCoverImageOnCoverImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoverImageOnCoverImageQuery, CoverImageOnCoverImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoverImageOnCoverImageQuery, CoverImageOnCoverImageQueryVariables>(CoverImageOnCoverImageDocument, options);
        }
export type CoverImageOnCoverImageQueryHookResult = ReturnType<typeof useCoverImageOnCoverImageQuery>;
export type CoverImageOnCoverImageLazyQueryHookResult = ReturnType<typeof useCoverImageOnCoverImageLazyQuery>;
export type CoverImageOnCoverImageQueryResult = Apollo.QueryResult<CoverImageOnCoverImageQuery, CoverImageOnCoverImageQueryVariables>;