import plus from "../../shared-ui/Icon/plus-solid.svg";
import styled from "styled-components";
import { Spinner } from "../../shared-ui/Spinner";

type PlusButtonProps = {
  color: string;
  onClick?(): void;
  loading?: boolean;
};

export const PlusButton = ({ color, onClick, loading }: PlusButtonProps) => {
  return (
    <Container
      disabled={loading}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {loading ? <Spinner /> : <PlusIcon src={plus} />}
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  background-color: #b3b3b3;
  width: 100%;
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
