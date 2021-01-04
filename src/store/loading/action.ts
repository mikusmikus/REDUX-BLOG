import { LOADING } from './types';

export const changeLoading = (isLoading:boolean) => {
  return {
    type: LOADING,
    isLoading
  };
};
