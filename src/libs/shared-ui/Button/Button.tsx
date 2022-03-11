import plus from "../../shared-ui/Icon/plus-solid.svg";
import doorOpen from "../../shared-ui/Icon/door-open-solid.svg";
import styled, { css } from "styled-components";
import { Spinner } from "../Spinner";

type ButtonProps = {
  type: keyof typeof iconMap;
  color: string;
  onClick?(): void;
  loading?: boolean;
  full?: boolean;
};

const iconMap = {
  "door-open": doorOpen,
  plus: plus,
};

export const Button = ({
  type,
  color,
  onClick,
  loading,
  full,
}: ButtonProps) => {
  const icon = iconMap[type];
  return (
    <Container
      disabled={loading}
      onClick={onClick}
      full={full}
      style={{ backgroundColor: color }}
      role="button"
    >
      {loading ? <Spinner /> : <Icon src={icon} />}
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

const Icon = styled.img`
  width: 18px;
`;
