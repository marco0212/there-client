import { gql } from "@apollo/client";
import {
  PostElementFragment,
  PostElementFragmentDoc,
} from "../PostElement/__generated__/usePostElement";
import { useThereOnPostListQuery } from "./__generated__/usePostList";

gql`
  ${PostElementFragmentDoc}
  query ThereOnPostList {
    there {
      id
      posts {
        ...PostElement
      }
    }
  }
`;

const ITEMS_IN_ROW = 3;
const GRID_GAP = 3;

export function usePostList() {
  const { data, loading } = useThereOnPostListQuery();

  const posts = data?.there.posts ?? [];

  const groupedPostList = posts.reduce<(PostElementFragment | null)[][]>(
    (rows, post, index) => {
      const remainderOfCountInRow = index % ITEMS_IN_ROW;
      if (remainderOfCountInRow === 0) {
        const row: (PostElementFragment | null)[] =
          Array(ITEMS_IN_ROW).fill(null);
        row[0] = post;
        rows.push(row);
      } else {
        rows[rows.length - 1][remainderOfCountInRow] = post;
      }
      return rows;
    },
    []
  );

  const containerWidth = Math.min(window.innerWidth, 640);

  return {
    groupedPostList,
    loading,
    gridGap: GRID_GAP,
    skeletonHeight: containerWidth / ITEMS_IN_ROW - GRID_GAP / 2,
  };
}
