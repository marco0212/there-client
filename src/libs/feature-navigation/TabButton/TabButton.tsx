import styled, { css } from "styled-components";
import { bind } from "../../utils-structure";
import { useTabButton } from "./useTabButton";

export const TabButton = bind(
  useTabButton,
  ({ icon, isMatchPath, moveToPath }) => {
    return (
      <Container onClick={moveToPath}>
        <TabIcon src={icon} active={isMatchPath} />
      </Container>
    );
  }
);

const Container = styled.button`
  border: 0;
  padding: 10px 0;
  flex: 1;
  cursor: pointer;
  background: transparent;
`;

const TabIcon = styled.img<{ active: boolean }>`
  height: 20px;

  ${(props) =>
    !props.active &&
    css`
      opacity: 0.2;
    `}
`;
