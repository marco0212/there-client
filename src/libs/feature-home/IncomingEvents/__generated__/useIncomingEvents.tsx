import * as Types from '../../../../graphql-types';

import { gql } from '@apollo/client';
import { IncomingEventRowFragmentDoc } from '../../IncomingEventRow/__generated__/useIncomingEventRow';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type EventsOnIncomingEventsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type EventsOnIncomingEventsQuery = { __typename?: 'Query', there: { __typename?: 'There', id: string, incomingEvents: Array<{ __typename?: 'Event', id: string, title: string, description?: string | null, reservedAt: any }> } };


export const EventsOnIncomingEventsDocument = gql`
    query EventsOnIncomingEvents {
  there {
    id
    incomingEvents {
      id
      ...IncomingEventRow
    }
  }
}
    ${IncomingEventRowFragmentDoc}`;

/**
 * __useEventsOnIncomingEventsQuery__
 *
 * To run a query within a React component, call `useEventsOnIncomingEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsOnIncomingEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsOnIncomingEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsOnIncomingEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsOnIncomingEventsQuery, EventsOnIncomingEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsOnIncomingEventsQuery, EventsOnIncomingEventsQueryVariables>(EventsOnIncomingEventsDocument, options);
      }
export function useEventsOnIncomingEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsOnIncomingEventsQuery, EventsOnIncomingEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsOnIncomingEventsQuery, EventsOnIncomingEventsQueryVariables>(EventsOnIncomingEventsDocument, options);
        }
export type EventsOnIncomingEventsQueryHookResult = ReturnType<typeof useEventsOnIncomingEventsQuery>;
export type EventsOnIncomingEventsLazyQueryHookResult = ReturnType<typeof useEventsOnIncomingEventsLazyQuery>;
export type EventsOnIncomingEventsQueryResult = Apollo.QueryResult<EventsOnIncomingEventsQuery, EventsOnIncomingEventsQueryVariables>;