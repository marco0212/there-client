import { gql, useQuery } from "@apollo/client";

const graphql = gql`
  query CoverImageOnCoverImage {
    coverImage
  }
`;

export function useCoverImage() {
  const { data, loading, error } = useQuery(graphql);

  return {
    loading,
    error,
    url: data?.coverImage,
  };
}
