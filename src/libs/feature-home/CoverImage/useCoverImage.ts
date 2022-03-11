import { gql } from "@apollo/client";
import { useCoverImageOnCoverImageQuery } from "./__generated__/useCoverImage";

gql`
  query CoverImageOnCoverImage {
    there {
      id
      coverImage
    }
  }
`;

export function useCoverImage() {
  const { data, loading, error } = useCoverImageOnCoverImageQuery();

  return {
    loading,
    error,
    url: data?.there.coverImage,
  };
}
