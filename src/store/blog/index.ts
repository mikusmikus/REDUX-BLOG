import { blogPostsReducer } from './reducer';
import type { PostType, Comment } from './types';
import {
  addBlogPosts,
  addCommentHandler,
  addComments,
  AddPostAction,
  EditPostAction,
  deleteCommentAction,
  deletePostAction,
  getPostsData,
} from './action';

export {
  blogPostsReducer,
  addBlogPosts,
  addComments,
  addCommentHandler,
  deletePostAction,
  deleteCommentAction,
  AddPostAction,
  EditPostAction,
  getPostsData,
};

export type { PostType, Comment };
