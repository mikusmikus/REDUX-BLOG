import { SAVE_USER_INFO, LOGOUT_USER, UserType } from './types';

export const addUser = (user: UserType) => {
  return {
    type: SAVE_USER_INFO,
    user,
  };
};

export const LogOutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
