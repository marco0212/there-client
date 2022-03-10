import { AddPostModal, AddPostButton, PostList } from "../libs/feature-posts";
import { PostSceneProvider } from "../libs/provider-posts";

export const Posts = () => {
  return (
    <PostSceneProvider>
      <PostList />
      <AddPostButton />
      <AddPostModal />
    </PostSceneProvider>
  );
};
