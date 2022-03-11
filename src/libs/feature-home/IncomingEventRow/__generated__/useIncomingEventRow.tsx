import * as Types from '../../../../graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type IncomingEventRowFragment = { __typename?: 'Event', id: string, title: string, description?: string | null, reservedAt: any };

export type UpdateEventDescriptionOnIncomingEventRowMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  description: Types.Scalars['String'];
}>;


export type UpdateEventDescriptionOnIncomingEventRowMutation = { __typename?: 'Mutation', updateEventDescription: { __typename?: 'Event', id: string, description?: string | null } };

export type EventDescriptionUpdatedOnIncomingEventRowSubscriptionVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type EventDescriptionUpdatedOnIncomingEventRowSubscription = { __typename?: 'Subscription', eventDescriptionUpdated: { __typename?: 'Event', id: string, description?: string | null } };

export const IncomingEventRowFragmentDoc = gql`
    fragment IncomingEventRow on Event {
  id
  title
  description
  reservedAt
}
    `;
export const UpdateEventDescriptionOnIncomingEventRowDocument = gql`
    mutation UpdateEventDescriptionOnIncomingEventRow($id: ID!, $description: String!) {
  updateEventDescription(id: $id, description: $description) {
    id
    description
  }
}
    `;
export type UpdateEventDescriptionOnIncomingEventRowMutationFn = Apollo.MutationFunction<UpdateEventDescriptionOnIncomingEventRowMutation, UpdateEventDescriptionOnIncomingEventRowMutationVariables>;

/**
 * __useUpdateEventDescriptionOnIncomingEventRowMutation__
 *
 * To run a mutation, you first call `useUpdateEventDescriptionOnIncomingEventRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventDescriptionOnIncomingEventRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventDescriptionOnIncomingEventRowMutation, { data, loading, error }] = useUpdateEventDescriptionOnIncomingEventRowMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateEventDescriptionOnIncomingEventRowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventDescriptionOnIncomingEventRowMutation, UpdateEventDescriptionOnIncomingEventRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventDescriptionOnIncomingEventRowMutation, UpdateEventDescriptionOnIncomingEventRowMutationVariables>(UpdateEventDescriptionOnIncomingEventRowDocument, options);
      }
export type UpdateEventDescriptionOnIncomingEventRowMutationHookResult = ReturnType<typeof useUpdateEventDescriptionOnIncomingEventRowMutation>;
export type UpdateEventDescriptionOnIncomingEventRowMutationResult = Apollo.MutationResult<UpdateEventDescriptionOnIncomingEventRowMutation>;
export type UpdateEventDescriptionOnIncomingEventRowMutationOptions = Apollo.BaseMutationOptions<UpdateEventDescriptionOnIncomingEventRowMutation, UpdateEventDescriptionOnIncomingEventRowMutationVariables>;
export const EventDescriptionUpdatedOnIncomingEventRowDocument = gql`
    subscription EventDescriptionUpdatedOnIncomingEventRow($id: ID!) {
  eventDescriptionUpdated(id: $id) {
    id
    description
  }
}
    `;

/**
 * __useEventDescriptionUpdatedOnIncomingEventRowSubscription__
 *
 * To run a query within a React component, call `useEventDescriptionUpdatedOnIncomingEventRowSubscription` and pass it any options that fit your needs.
 * When your component renders, `useEventDescriptionUpdatedOnIncomingEventRowSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventDescriptionUpdatedOnIncomingEventRowSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventDescriptionUpdatedOnIncomingEventRowSubscription(baseOptions: Apollo.SubscriptionHookOptions<EventDescriptionUpdatedOnIncomingEventRowSubscription, EventDescriptionUpdatedOnIncomingEventRowSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<EventDescriptionUpdatedOnIncomingEventRowSubscription, EventDescriptionUpdatedOnIncomingEventRowSubscriptionVariables>(EventDescriptionUpdatedOnIncomingEventRowDocument, options);
      }
export type EventDescriptionUpdatedOnIncomingEventRowSubscriptionHookResult = ReturnType<typeof useEventDescriptionUpdatedOnIncomingEventRowSubscription>;
export type EventDescriptionUpdatedOnIncomingEventRowSubscriptionResult = Apollo.SubscriptionResult<EventDescriptionUpdatedOnIncomingEventRowSubscription>;