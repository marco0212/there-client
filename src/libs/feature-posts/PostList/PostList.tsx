import styled from "styled-components";
import { Skeleton } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { PostElement } from "../PostElement";
import { usePostList } from "./usePostList";

export const PostList = bind(
  usePostList,
  ({ loading, groupedPostList, skeletonHeight, gridGap }) => {
    if (loading) {
      return (
        <Container>
          {new Array(4).fill(null).map((_, index) => (
            <Row key={index} gap={gridGap}>
              {new Array(3).fill(null).map((_, index) => (
                <Skeleton key={index} width="33.333%" height={skeletonHeight} />
              ))}
            </Row>
          ))}
        </Container>
      );
    }

    if (groupedPostList.length === 0) {
      return (
        <EmptyViewContainer>
          <EmptyViewText>등록된 사진이 없습니다</EmptyViewText>
        </EmptyViewContainer>
      );
    }

    return (
      <Container>
        {groupedPostList.map((groupedPost, index) => (
          <Row key={index} gap={gridGap}>
            {groupedPost.map((post, index) => {
              return <PostElement key={post?.id ?? index} post={post} />;
            })}
          </Row>
        ))}
      </Container>
    );
  }
);

const EmptyViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: flex-start;
  align-content: flex-start;
`;

const Row = styled.div<{ gap: number }>`
  width: 100%;
  display: flex;
  ${(props) => `margin-bottom: ${props.gap}px;`}

  &:last-child {
    margin-bottom: 0;
  }

  & > * {
    ${(props) => `margin-right: ${props.gap}px;`}
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const EmptyViewText = styled.p`
  text-align: center;
  flex: 1;
`;
