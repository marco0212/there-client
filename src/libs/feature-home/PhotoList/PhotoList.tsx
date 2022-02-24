import styled from "styled-components";
import { bind } from "../../utils-structure";
import { usePhotoList } from "./usePhotoList";

export const PhotoList = bind(usePhotoList, ({ loading, error, photos }) => {
  if (loading) {
    return null;
  }

  if (error || !photos) {
    return <p>Error</p>;
  }

  if (photos.length === 0) {
    return (
      <EmptyView>
        <p>사진을 등록해주세요</p>
      </EmptyView>
    );
  }
  return (
    <Container>
      {photos?.map((photo) => (
        <Photo key={photo} src={photo} />
      ))}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
`;

const EmptyView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
const Photo = styled.img`
  max-width: 33.333%;
`;
