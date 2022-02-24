import styled, { keyframes } from "styled-components";
import spinner from "../../shared-ui/Icon/spinner.svg";

export const Spinner = () => (
  <Container>
    <SpinnerIcon src={spinner} />
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
  display: inline-block;
  animation: ${rotate} 1.5s infinite;
`;

const SpinnerIcon = styled.img`
  width: 20px;
`;
