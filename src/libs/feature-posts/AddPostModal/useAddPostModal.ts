import { gql, useMutation } from "@apollo/client";
import { useCallback, useState } from "react";
import { usePostSceneContext } from "../../provider-posts";

const graphql = gql`
  mutation AddPostOnAddPostModal($photos: [String], $location: String) {
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

export function useAddPostModal() {
  const { photos, setPhotos } = usePostSceneContext();
  const [location, setLocation] = useState("");

  const [addPostMutation, { loading }] = useMutation<
    unknown,
    { photos: string[]; location: string }
  >(graphql);

  const addPost = async () => {
    await addPostMutation({ variables: { photos, location } });
    setPhotos([]);
    setLocation("");
  };

  const resetPhotos = useCallback(() => {
    setPhotos([]);
  }, [setPhotos]);

  return { photos, loading, addPost, location, setLocation, resetPhotos };
}
