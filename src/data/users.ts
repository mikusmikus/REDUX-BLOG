export type UserType = {
  id?: string;
  username?: string;
  email? : string;
  password?: string;
  status?: string;
};

export const users: UserType[] = [
  {
    id: '123csxc',
    username: 'mikus',
    email: 'mikus@inbox.lv',
    password: 'redux',
    status: 'admin',
  },
  {
    id: '1234csxc',
    username: 'gatis',
    email: 'gatis@inbox.lv',
    password: 'derux',
    status: 'user',
  },
];
