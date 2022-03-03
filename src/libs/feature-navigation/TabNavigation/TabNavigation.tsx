import styled from "styled-components";
import { bind } from "../../utils-structure";
import { TabButton } from "../TabButton";
import { useTabNavigation } from "./useTabNavigation";

export const TabNavigation = bind(
  useTabNavigation,
  ({ moveToHome, moveToPhotos }) => (
    <Container>
      <TabButton kind="home" path="/" />
      <TabButton kind="photos" path="/photos" />
    </Container>
  )
);

const Container = styled.nav`
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 640px;
  margin: auto;
  border-top: 1px solid #ebebeb;
  display: flex;
`;
