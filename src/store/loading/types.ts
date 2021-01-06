export const LOADING = 'LOADING';

export type ChangeLoadingAction = {
  type: typeof LOADING;
  isLoading:boolean
};