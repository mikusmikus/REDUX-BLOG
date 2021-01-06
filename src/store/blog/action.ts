import { Dispatch } from 'redux';
import random from 'lodash/random';
import sampleSize from 'lodash/sampleSize';
import axios from 'axios';
import {
  ADD_POSTS,
  ADD_NEW_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_POST,
  ADD_POST,
  PostType,
  Comment,
} from './types';
import { Authors } from '../../data/authors';
import { multiplyText } from '../../helperFunctions/multiplyText';
import { categories } from '../../data/categories';
import { changeLoading } from '../loading/action';

export const addBlogPosts = (posts: PostType[]) => {
  return {
    type: ADD_POSTS,
    posts,
  };
};

export const addCommentAction = (comment: Comment) => {
  return {
    type: ADD_NEW_COMMENT,
    comment,
  };
};

export const deletePostAction = (postId: string) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const deleteCommentAction = (commentId: string, postId: string) => {
  return {
    type: DELETE_COMMENT,
    commentId,
    postId,
  };
};

export const AddPostAction = (post: PostType) => {
  return {
    type: ADD_POST,
    post,
  };
};
export const EditPostAction = (post: PostType) => {
  return {
    type: EDIT_POST,
    post,
  };
};

export const getPostsData = () => {
  return async (dispatch: Dispatch) => {

    dispatch(changeLoading(true));

    const postsResolve = axios.get('https://jsonplaceholder.typicode.com/posts');
    const commentResolve = axios.get('https://jsonplaceholder.typicode.com/comments');

    await Promise.all([postsResolve, commentResolve]).then((res) => {
      const posts: PostType[] = res[0].data.map(
        (post: { id: number; title: string; body: string }) => ({
          postId: `${post.id}`,
          title: post.title,
          body: multiplyText(post.body, 6),
          author: Authors[random(Authors.length - 1)],
          image: `https://picsum.photos/id/${post.id + 5}/500/500`,
          updated: Date.now() - random(10000),
          category: sampleSize(categories, 2),
          comments: [],
        })
      );

      const comments: Comment[] = res[1].data.map(
        (comment: { id: number; postId: number; email: string; body: string }) => ({
          commentId: `${comment.id}`,
          postId: `${comment.postId}`,
          email: comment.email,
          body: comment.body,
        })
      );

      posts.forEach((post: PostType) => {
        comments.forEach((comment: Comment) => {
          if (post.postId === comment.postId) {
            post.comments.push(comment);
          }
        });
      });

      dispatch(addBlogPosts(posts));
      dispatch(changeLoading(false));

      const localPosts = JSON.parse(localStorage.blogPosts || '[]');
      if (!localPosts.length) {
        localStorage.blogPosts = JSON.stringify(posts);
      }
    });
  };
};
