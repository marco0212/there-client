import styled from "styled-components";
import { Modal, PlusButton, Title } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { useAddPostModal } from "./useAddPostModal";
import { Image } from "../../shared-ui";

export const AddPostModal = bind(
  useAddPostModal,
  ({ photos, location, setLocation, addPost, loading, resetPhotos }) => (
    <Modal
      title="새 게시물 만들기"
      opened={Boolean(photos.length)}
      onClose={resetPhotos}
    >
      <PhotoList className="mb-30">
        {photos.map((photo) => (
          <Photo key={photo} src={photo} ratio="1:1" />
        ))}
      </PhotoList>

      <Label className="mb-40">
        <Title level={3} className="mb-10" color="black" weight="bold">
          위치 추가
        </Title>
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.currentTarget.value)}
        />
      </Label>

      <PlusButton color="#ff9b44" onClick={addPost} loading={loading} full />
    </Modal>
  )
);

const PhotoList = styled.div`
  display: flex;
`;

const Photo = styled(Image)`
  flex-basis: 33.333%;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  border-bottom: 1px solid #eee;
  outline: none;
  padding: 0 0 10px;
  color: #757575;
`;
