import { FC } from "react";
import styled, { keyframes } from "styled-components";
import spinner from "../../shared-ui/Icon/spinner.svg";

type SpinnerProps = {
  size?: number;
  className?: string;
};

export const Spinner: FC<SpinnerProps> = ({ className, size = 20 }) => (
  <Container className={className}>
    <SpinnerIcon src={spinner} size={size} />
  </Container>
);

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerIcon = styled.img<{ size: number }>`
  ${(props) => `width: ${props.size}px;`}
  animation: ${rotate} 1.5s infinite;
`;
