import * as Types from '../../../../graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DaysWithEventsOnWeeklyCalendarQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type DaysWithEventsOnWeeklyCalendarQuery = { __typename?: 'Query', daysWithEvents: Array<{ __typename?: 'EventInDay', id: string, events: Array<{ __typename?: 'Event', id: string }> }> };


export const DaysWithEventsOnWeeklyCalendarDocument = gql`
    query DaysWithEventsOnWeeklyCalendar {
  daysWithEvents {
    id
    events {
      id
    }
  }
}
    `;

/**
 * __useDaysWithEventsOnWeeklyCalendarQuery__
 *
 * To run a query within a React component, call `useDaysWithEventsOnWeeklyCalendarQuery` and pass it any options that fit your needs.
 * When your component renders, `useDaysWithEventsOnWeeklyCalendarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDaysWithEventsOnWeeklyCalendarQuery({
 *   variables: {
 *   },
 * });
 */
export function useDaysWithEventsOnWeeklyCalendarQuery(baseOptions?: Apollo.QueryHookOptions<DaysWithEventsOnWeeklyCalendarQuery, DaysWithEventsOnWeeklyCalendarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DaysWithEventsOnWeeklyCalendarQuery, DaysWithEventsOnWeeklyCalendarQueryVariables>(DaysWithEventsOnWeeklyCalendarDocument, options);
      }
export function useDaysWithEventsOnWeeklyCalendarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DaysWithEventsOnWeeklyCalendarQuery, DaysWithEventsOnWeeklyCalendarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DaysWithEventsOnWeeklyCalendarQuery, DaysWithEventsOnWeeklyCalendarQueryVariables>(DaysWithEventsOnWeeklyCalendarDocument, options);
        }
export type DaysWithEventsOnWeeklyCalendarQueryHookResult = ReturnType<typeof useDaysWithEventsOnWeeklyCalendarQuery>;
export type DaysWithEventsOnWeeklyCalendarLazyQueryHookResult = ReturnType<typeof useDaysWithEventsOnWeeklyCalendarLazyQuery>;
export type DaysWithEventsOnWeeklyCalendarQueryResult = Apollo.QueryResult<DaysWithEventsOnWeeklyCalendarQuery, DaysWithEventsOnWeeklyCalendarQueryVariables>;