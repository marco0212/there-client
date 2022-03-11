import * as Types from '../../../../graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddPostOnAddPostModalMutationVariables = Types.Exact<{
  photos: Array<Types.Scalars['String']> | Types.Scalars['String'];
  location: Types.Scalars['String'];
}>;


export type AddPostOnAddPostModalMutation = { __typename?: 'Mutation', addPost: { __typename?: 'AddPostResult', there: { __typename?: 'There', id: string, posts: Array<{ __typename?: 'Post', id: string, photos: Array<string>, location: string, createdAt: any }> } } };


export const AddPostOnAddPostModalDocument = gql`
    mutation AddPostOnAddPostModal($photos: [String!]!, $location: String!) {
  addPost(photos: $photos, location: $location) {
    there {
      id
      posts {
        id
        photos
        location
        createdAt
      }
    }
  }
}
    `;
export type AddPostOnAddPostModalMutationFn = Apollo.MutationFunction<AddPostOnAddPostModalMutation, AddPostOnAddPostModalMutationVariables>;

/**
 * __useAddPostOnAddPostModalMutation__
 *
 * To run a mutation, you first call `useAddPostOnAddPostModalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostOnAddPostModalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostOnAddPostModalMutation, { data, loading, error }] = useAddPostOnAddPostModalMutation({
 *   variables: {
 *      photos: // value for 'photos'
 *      location: // value for 'location'
 *   },
 * });
 */
export function useAddPostOnAddPostModalMutation(baseOptions?: Apollo.MutationHookOptions<AddPostOnAddPostModalMutation, AddPostOnAddPostModalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPostOnAddPostModalMutation, AddPostOnAddPostModalMutationVariables>(AddPostOnAddPostModalDocument, options);
      }
export type AddPostOnAddPostModalMutationHookResult = ReturnType<typeof useAddPostOnAddPostModalMutation>;
export type AddPostOnAddPostModalMutationResult = Apollo.MutationResult<AddPostOnAddPostModalMutation>;
export type AddPostOnAddPostModalMutationOptions = Apollo.BaseMutationOptions<AddPostOnAddPostModalMutation, AddPostOnAddPostModalMutationVariables>;