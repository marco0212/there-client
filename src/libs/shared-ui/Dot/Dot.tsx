import styled from "styled-components";

export const Dot = () => <Container />;

const Container = styled.div`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #ff5600;
  margin-right: 1px;

  &:last-child {
    margin-right: 0;
  }
`;
