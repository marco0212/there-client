import styled from "styled-components";
import { Image } from "../../shared-ui";
import { FC } from "react";
import { bind } from "../../utils-structure";
import { usePostElement } from "./usePostElement";

export const PostElement = bind(usePostElement, ({ className, post }) => (
  <Container className={className}>
    {post ? <Image src={post.photos[0]} ratio="1:1" /> : null}
  </Container>
));

const Container = styled.div`
  position: relative;
  flex: 1;
  cursor: pointer;
`;
