import styled from "styled-components";
import { bind } from "../../utils-structure";
import { PostElement } from "../PostElement";
import { usePostList } from "./usePostList";

export const PostList = bind(usePostList, ({ groupedPostList }) => {
  if (groupedPostList.length === 0) {
    return (
      <Container>
        <EmptyViewText>등록된 사진이 없습니다</EmptyViewText>
      </Container>
    );
  }

  return (
    <Container>
      {groupedPostList.map((groupedPost, index) => (
        <Row key={index}>
          {groupedPost.map((post, index) => {
            return <PostElement key={post?.id ?? index} />;
          })}
        </Row>
      ))}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EmptyViewText = styled.p`
  text-align: center;
  flex: 1;
`;
