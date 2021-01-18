import { chooseCategoryColor } from './chooseCategoryColor';
import { filterPosts } from './filterPosts';
import { PostType } from '../store/blog/types';

describe('chooseCategory function', () => {
  it('return success class when category and chosenCategory are same', () => {
    const category = 'summer';
    const chosenCategory = 'summer';
    const result = chooseCategoryColor(category, chosenCategory);
    expect(result).toEqual('success');
  });
  it('return primry class when category and chosenCategory are not same', () => {
    const category = 'asd';
    const chosenCategory = 'asdxvv';
    const result = chooseCategoryColor(category, chosenCategory);
    expect(result).toEqual('primary');
  });
});

describe('filterPosts function', () => {
  it('it should return correct filtered posts Array with spaces and upper/lovercase', () => {
    const searchValue = 'yoU dO';
    const posts: PostType[] = [
      {
        postId: '1',
        title: 'this is first title',
        body: 'some RandomBody',
        author: 'author',
        image: 'image.sss',
        updated: 123,
        category: [],
        comments: [],
      },
      {
        postId: '2',
        title: 'what do you do now',
        body: 'hei some text here',
        author: 'author',
        image: 'image.sss',
        updated: 123,
        category: [],
        comments: [],
      },
    ];
    const result = filterPosts(posts, searchValue);

    expect(result).toEqual([posts[1]]);
  });
});
