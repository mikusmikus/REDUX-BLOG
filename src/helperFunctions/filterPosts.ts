import { PostType } from '../store/blog/types';

export const filterPosts = (posts: PostType[], searchValue:string) => {
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return filteredPosts;
};
