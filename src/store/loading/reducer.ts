import { ChangeLoadingAction, LOADING } from './types';

export const loadingReducer = (state = false, action: ChangeLoadingAction) => {
  switch (action.type) {
    case LOADING: {
      return action.isLoading;
    }
    default:
      return state;
  }
};