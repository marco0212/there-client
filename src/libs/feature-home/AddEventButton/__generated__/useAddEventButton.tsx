import * as Types from '../../../../graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddEventOnAddEventModalMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  reservedAt: Types.Scalars['Date'];
  description?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type AddEventOnAddEventModalMutation = { __typename?: 'Mutation', addEvent?: { __typename?: 'AddEventResult', there: { __typename?: 'There', id: string, incomingEvents: Array<{ __typename?: 'Event', id: string, title: string, description?: string | null, reservedAt: any }> }, daysWithEvent: { __typename?: 'EventInDay', id: string, events: Array<{ __typename?: 'Event', id: string }> } } | null };


export const AddEventOnAddEventModalDocument = gql`
    mutation AddEventOnAddEventModal($title: String!, $reservedAt: Date!, $description: String) {
  addEvent(title: $title, reservedAt: $reservedAt, description: $description) {
    there {
      id
      incomingEvents {
        id
        title
        description
        reservedAt
      }
    }
    daysWithEvent {
      id
      events {
        id
      }
    }
  }
}
    `;
export type AddEventOnAddEventModalMutationFn = Apollo.MutationFunction<AddEventOnAddEventModalMutation, AddEventOnAddEventModalMutationVariables>;

/**
 * __useAddEventOnAddEventModalMutation__
 *
 * To run a mutation, you first call `useAddEventOnAddEventModalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEventOnAddEventModalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEventOnAddEventModalMutation, { data, loading, error }] = useAddEventOnAddEventModalMutation({
 *   variables: {
 *      title: // value for 'title'
 *      reservedAt: // value for 'reservedAt'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddEventOnAddEventModalMutation(baseOptions?: Apollo.MutationHookOptions<AddEventOnAddEventModalMutation, AddEventOnAddEventModalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddEventOnAddEventModalMutation, AddEventOnAddEventModalMutationVariables>(AddEventOnAddEventModalDocument, options);
      }
export type AddEventOnAddEventModalMutationHookResult = ReturnType<typeof useAddEventOnAddEventModalMutation>;
export type AddEventOnAddEventModalMutationResult = Apollo.MutationResult<AddEventOnAddEventModalMutation>;
export type AddEventOnAddEventModalMutationOptions = Apollo.BaseMutationOptions<AddEventOnAddEventModalMutation, AddEventOnAddEventModalMutationVariables>;