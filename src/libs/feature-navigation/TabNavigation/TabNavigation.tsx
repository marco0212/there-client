import styled from "styled-components";
import { ROUTE_PATHS } from "../../../constants";
import { bind } from "../../utils-structure";
import { TabButton } from "../TabButton";
import { useTabNavigation } from "./useTabNavigation";

export const TabNavigation = bind(useTabNavigation, () => (
  <Container>
    <TabButton kind="home" path={ROUTE_PATHS.home} />
    <TabButton kind="photo" path={ROUTE_PATHS.posts} />
  </Container>
));

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
