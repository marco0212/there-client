import * as Types from '../../../../graphql-types';

import { gql } from '@apollo/client';
export type PostElementFragment = { __typename?: 'Post', id: string, photos: Array<string> };

export const PostElementFragmentDoc = gql`
    fragment PostElement on Post {
  id
  photos
}
    `;