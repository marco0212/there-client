import styled from "styled-components";
import { bind } from "../../utils-structure";
import { useCoverImage } from "./useCoverImage";

export const CoverImage = bind(useCoverImage, ({ url, loading, error }) => {
  if (loading) {
    return <p>Loading</p>;
  }

  if (error || !url) {
    return <p>Error</p>;
  }

  return <Container src={url} />;
});

const Container = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center bottom;
  margin-bottom: 40px;
`;
