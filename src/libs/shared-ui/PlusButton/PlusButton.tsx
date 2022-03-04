import plus from "../../shared-ui/Icon/plus-solid.svg";
import styled, { css } from "styled-components";
import { Spinner } from "../Spinner";

type PlusButtonProps = {
  color: string;
  onClick?(): void;
  loading?: boolean;
  full?: boolean;
};

export const PlusButton = ({
  color,
  onClick,
  loading,
  full,
}: PlusButtonProps) => {
  return (
    <Container
      disabled={loading}
      onClick={onClick}
      full={full}
      style={{ backgroundColor: color }}
      role="button"
    >
      {loading ? <Spinner /> : <PlusIcon src={plus} />}
    </Container>
  );
};

const Container = styled.div<{ disabled?: boolean; full?: boolean }>`
  ${(props) =>
    props.full
      ? css`
          width: 100%;
        `
      : css`
          width: 40px;
        `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  display: flex;
  background-color: #b3b3b3;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: 0;
  cursor: pointer;

  transition: background-color 0.1s;
  &:active {
    background-color: #eee;
  }
`;

const PlusIcon = styled.img`
  width: 18px;
`;
