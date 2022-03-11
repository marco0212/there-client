import styled from "styled-components";
import { Button } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { useAddPostButton } from "./useAddPostButton";

export const AddPostButton = bind(
  useAddPostButton,
  ({ selectPhotos, loading }) => (
    <Container>
      <Label>
        <Button type="plus" color="#ffbd83" loading={loading} />
        <HideInput
          type="file"
          accept="image/*"
          multiple
          onChange={selectPhotos}
        />
      </Label>
    </Container>
  )
);

const Container = styled.div`
  position: fixed;
  max-width: 640px;
  margin: auto;
  right: 40px;
  bottom: 80px;
`;

const Label = styled.label`
  display: block;
`;

const HideInput = styled.input`
  display: none;
`;
