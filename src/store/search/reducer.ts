import { InputSearchPost, INPUT_POST_SEARCH } from './types';




export const seachPostReducer = (state = '', action: InputSearchPost) => {
  switch (action.type) {
    case INPUT_POST_SEARCH: {
      return action.value;
    }
    default:
      return state;
  }
};
