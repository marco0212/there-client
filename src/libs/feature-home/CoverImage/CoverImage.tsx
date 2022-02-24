import styled from "styled-components";
import { Skeleton } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { useCoverImage } from "./useCoverImage";

export const CoverImage = bind(useCoverImage, ({ url, loading, error }) => {
  if (loading) {
    return <Skeleton className="mb-40" width="100%" height={370} />;
  }

  if (error || !url) {
    return <p>Error</p>;
  }

  return <Container className="mb-40" src={url} />;
});

const Container = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center bottom;
`;
