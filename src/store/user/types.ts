
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const LOGOUT_USER = 'LOG_OUT_USER';

export type UserType = {
  id?: string;
  username?: string;
  email? : string;
  password?: string;
  status?: string;
};

export type SaveUser = {
  type: typeof SAVE_USER_INFO;
  user: UserType;
};

export type LogoutUser = {
  type: typeof LOGOUT_USER;
  user: UserType;
};


export type AllUserActions = SaveUser | LogoutUser;
