import * as Types from '../../../../graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DayCountFromMetOnDayCounterFromMetQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type DayCountFromMetOnDayCounterFromMetQuery = { __typename?: 'Query', there: { __typename?: 'There', id: string, dayCountFromMet: number } };


export const DayCountFromMetOnDayCounterFromMetDocument = gql`
    query DayCountFromMetOnDayCounterFromMet {
  there {
    id
    dayCountFromMet
  }
}
    `;

/**
 * __useDayCountFromMetOnDayCounterFromMetQuery__
 *
 * To run a query within a React component, call `useDayCountFromMetOnDayCounterFromMetQuery` and pass it any options that fit your needs.
 * When your component renders, `useDayCountFromMetOnDayCounterFromMetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDayCountFromMetOnDayCounterFromMetQuery({
 *   variables: {
 *   },
 * });
 */
export function useDayCountFromMetOnDayCounterFromMetQuery(baseOptions?: Apollo.QueryHookOptions<DayCountFromMetOnDayCounterFromMetQuery, DayCountFromMetOnDayCounterFromMetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DayCountFromMetOnDayCounterFromMetQuery, DayCountFromMetOnDayCounterFromMetQueryVariables>(DayCountFromMetOnDayCounterFromMetDocument, options);
      }
export function useDayCountFromMetOnDayCounterFromMetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DayCountFromMetOnDayCounterFromMetQuery, DayCountFromMetOnDayCounterFromMetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DayCountFromMetOnDayCounterFromMetQuery, DayCountFromMetOnDayCounterFromMetQueryVariables>(DayCountFromMetOnDayCounterFromMetDocument, options);
        }
export type DayCountFromMetOnDayCounterFromMetQueryHookResult = ReturnType<typeof useDayCountFromMetOnDayCounterFromMetQuery>;
export type DayCountFromMetOnDayCounterFromMetLazyQueryHookResult = ReturnType<typeof useDayCountFromMetOnDayCounterFromMetLazyQuery>;
export type DayCountFromMetOnDayCounterFromMetQueryResult = Apollo.QueryResult<DayCountFromMetOnDayCounterFromMetQuery, DayCountFromMetOnDayCounterFromMetQueryVariables>;