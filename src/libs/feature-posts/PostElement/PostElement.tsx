import styled, { css } from "styled-components";
import { bind } from "../../utils-structure";
import { usePostElement } from "./usePostElement";

export const PostElement = bind(usePostElement, () => (
  <Container>
    <ImageField>
      <Image src="https://firebasestorage.googleapis.com/v0/b/there-ba25f.appspot.com/o/f43df444-3c3d-4e19-a267-e882a24fde79%2Fcover.jpeg?alt=media&token=fa7bc7e7-af58-44a7-b9e8-ff72184fcd53" />
    </ImageField>
  </Container>
));

const Container = styled.div`
  position: relative;
  flex: 1;
  margin-right: 3px;

  &:last-child {
    margin-right: 0;
  }
`;

const ImageField = styled.div`
  padding-top: 100%;
`;

const Image = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${(props) =>
    css`
      background: url(${props.src}) no-repeat center center / cover;
    `}
`;
