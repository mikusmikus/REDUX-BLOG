import cloneDeep from 'lodash/cloneDeep';
import {
  AllActions,
  PostType,
  ADD_POSTS,
  ADD_COMMENTS,
  ADD_NEW_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_POST,
  ADD_POST,
} from './types';

const initialState: PostType[] = [];

export const blogPostsReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_POSTS: {
      if (state.length === 0) {
        return action.posts;
      }
      return state;
    }
    case ADD_COMMENTS: {
      const copyState = [...state];
      const index = copyState.findIndex((post) => post.postId === action.comments[0].postId);
      copyState[index].comments = action.comments;
      return copyState;
    }
    case ADD_NEW_COMMENT: {
      const copyState = cloneDeep(state);
      const index = copyState.findIndex((post) => post.postId === action.comment.postId);
      copyState[index].comments.push(action.comment);
      return copyState;
    }

    case DELETE_POST: {
      const copyState = cloneDeep(state);
      const index = copyState.findIndex((post) => post.postId === action.postId);
      copyState.splice(index, 1);
      return copyState;
    }

    case DELETE_COMMENT: {
      const copyState = cloneDeep(state);
      const index = copyState.findIndex((post) => post.postId === action.postId);
      const commentIndex = copyState[index].comments.findIndex(
        (comment) => comment.commentId === action.commentId
      );
      copyState[index].comments.splice(commentIndex, 1);
      return copyState;
    }

    case EDIT_POST: {
      const copyState = cloneDeep(state);
      const index = copyState.findIndex((post) => post.postId === action.post.postId);
      copyState.splice(index, 1, action.post);
      return copyState;
    }

    case ADD_POST: {
      const copyState = cloneDeep(state);
      copyState.push(action.post);
      return copyState;
    }

    default:
      return state;
  }
};
