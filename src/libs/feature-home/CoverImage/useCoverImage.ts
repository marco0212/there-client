import { gql, useQuery } from "@apollo/client";

const graphql = gql`
  query CoverImageOnCoverImage {
    there {
      id
      coverImage
    }
  }
`;

export function useCoverImage() {
  const { data, loading, error } = useQuery(graphql);

  return {
    loading,
    error,
    url: data?.there.coverImage,
  };
}
