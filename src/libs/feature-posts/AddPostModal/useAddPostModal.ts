import { gql } from "@apollo/client";
import { useCallback, useState } from "react";
import { usePostSceneContext } from "../../provider-posts";
import { useAddPostOnAddPostModalMutation } from "./__generated__/useAddPostModal";

gql`
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

export function useAddPostModal() {
  const { photos, setPhotos } = usePostSceneContext();
  const [location, setLocation] = useState("");

  const [addPostMutation, { loading }] = useAddPostOnAddPostModalMutation();

  const addPost = async () => {
    if (location.trim().length === 0) {
      alert("위치를 입력해주세요");
      return;
    }

    await addPostMutation({ variables: { photos, location } });
    setPhotos([]);
    setLocation("");
  };

  const resetPhotos = useCallback(() => {
    setPhotos([]);
  }, [setPhotos]);

  const photoWidth = (window.innerWidth - 40) / 3;

  return {
    photos,
    loading,
    addPost,
    location,
    setLocation,
    resetPhotos,
    photoWidth,
  };
}
