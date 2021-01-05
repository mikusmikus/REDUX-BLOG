export const sortPostsCategory = (category: string[], chosenCategory: string) => {
  if (chosenCategory === 'all') {
    return true;
  }
  return category.some((eachCategory) => eachCategory === chosenCategory);
};
