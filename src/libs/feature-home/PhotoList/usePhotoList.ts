import { gql, useQuery } from "@apollo/client";

const graphql = gql`
  query photosOnPhotosOnPhotoList {
    photos {
      id
      url
    }
  }
`;

type Photo = {
  id: string;
  url: string;
};

export function usePhotoList() {
  const { data, loading, error } = useQuery<{ photos: Photo[] }>(graphql);
  return { loading, error, photos: data?.photos.map((photo) => photo.url) };
}
