import styled from "styled-components";
import { PlusButton } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { useAddPostButton } from "./useAddPostButton";

export const AddPostButton = bind(useAddPostButton, () => (
  <Container>
    <Label>
      <PlusButton color="#ffbd83" />
      <HideInput type="file" accept="image/*" multiple />
    </Label>
  </Container>
));

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
