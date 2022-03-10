import { gql, useQuery } from "@apollo/client";

const graphql = gql`
  query ThereOnPostList {
    there {
      id
      posts {
        id
        photos
      }
    }
  }
`;

type Post = {
  id: string;
  photos: string[];
};

const ITEMS_IN_ROW = 3;
const GRID_GAP = 3;

export function usePostList() {
  const { data, loading } = useQuery<{ there: { posts: Post[] } }>(graphql);

  const posts = data?.there.posts ?? [];

  const groupedPostList = posts.reduce<(Post | null)[][]>(
    (rows, post, index) => {
      const remainderOfCountInRow = index % ITEMS_IN_ROW;
      if (remainderOfCountInRow === 0) {
        const row: (Post | null)[] = Array(ITEMS_IN_ROW).fill(null);
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
