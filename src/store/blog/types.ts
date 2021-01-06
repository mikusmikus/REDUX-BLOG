export const ADD_POSTS = 'ADD_POSTS';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';

export type Comment = {
  commentId: string;
  postId: string;
  email: string;
  body: string;
};

export type PostType = {
  postId: string;
  title: string;
  body: string;
  author: string;
  image: string;
  updated: number;
  category: string[];
  comments: Comment[];
};

export type BlogPostAction = {
  type: typeof ADD_POSTS;
  posts: PostType[];
};

export type NewCommentAction = {
  type: typeof ADD_NEW_COMMENT;
  comment: Comment;
};
export type DeletePostAction = {
  type: typeof DELETE_POST;
  postId: string;
};

export type DeleteCommentAction = {
  type: typeof DELETE_COMMENT;
  commentId: string;
  postId: string;
};

export type AddPostAction = {
  type: typeof ADD_POST;
  post: PostType;
};

export type EditPostAction = {
  type: typeof EDIT_POST;
  post: PostType;
};

export type AllActions =
  | BlogPostAction
  | NewCommentAction
  | DeletePostAction
  | DeleteCommentAction
  | EditPostAction
  | AddPostAction;
