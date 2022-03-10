import styled from "styled-components";
import { Image } from "../../shared-ui";
import { FC } from "react";

type PostElementProps = {
  className?: string;
  post: { id: string; photos: string[] } | null;
};

export const PostElement: FC<PostElementProps> = ({ className, post }) => (
  <Container className={className}>
    {post ? <Image src={post.photos[0]} ratio="1:1" /> : null}
  </Container>
);

const Container = styled.div`
  position: relative;
  flex: 1;
`;
