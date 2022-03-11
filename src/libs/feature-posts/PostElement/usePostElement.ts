import { gql } from "@apollo/client";
import { PostElementFragment } from "./__generated__/usePostElement";

gql`
  fragment PostElement on Post {
    id
    photos
  }
`;

type UsePostElementProps = {
  className?: string;
  post: PostElementFragment | null;
};

export function usePostElement({ post, className }: UsePostElementProps) {
  return {
    className,
    post,
  };
}
