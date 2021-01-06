import { AllUserActions, SAVE_USER_INFO, LOGOUT_USER, UserType } from './types';

const initialState: UserType = JSON.parse(localStorage.usersBlogUser || '{}');

export const loginReducer = (state = initialState, action: AllUserActions) => {
  switch (action.type) {
    
    case SAVE_USER_INFO: {
      return action.user;
    }

    case LOGOUT_USER: {
      return {};
    }

    default:
      return state;
  }
};
