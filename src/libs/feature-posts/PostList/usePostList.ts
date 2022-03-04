type Post = {
  id: string;
  url: string;
};

const ITEMS_IN_ROW = 3;

export function usePostList() {
  const posts: (Post | null)[] = [];

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

  return { groupedPostList };
}
