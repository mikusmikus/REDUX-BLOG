import { SAVE_USER_INFO, LOGOUT_USER } from './types';
import { UserType } from '../../data/users';

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
