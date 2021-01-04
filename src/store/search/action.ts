import { INPUT_POST_SEARCH } from './types';

export const addInputSearchValue = (value: string) => {
  return {
    type: INPUT_POST_SEARCH,
    value,
  };
};
