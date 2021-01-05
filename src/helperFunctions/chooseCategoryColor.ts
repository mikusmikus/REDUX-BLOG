export const chooseCategoryColor = (
  category: string,
  chosenCategory: string
): 'success' | 'primary' => {
  if (category === chosenCategory) {
    return 'success';
  }
  return 'primary';
};
