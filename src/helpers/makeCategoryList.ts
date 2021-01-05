import { PostType } from '../store/blog/types';

export const categories = ['all'];

export const makeCategoryList = (posts:PostType[]) => {
  posts.forEach((post) =>
    post.category.forEach((category) => {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    })
  );
  return categories;
};
