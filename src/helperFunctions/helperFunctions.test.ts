import { chooseCategoryColor } from './chooseCategoryColor';
import { filterPosts } from './filterPosts';
import { PostType } from '../store/blog/types';
import { formatTime } from './formatTime';
import { sortPostsCategory } from './sortPostsCategory';
import { multiplyText } from './multiplyText';
import { highlightsText } from './highlightsSearchText';
import { makeCategoryList } from './makeCategoryList';

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
        category: ['sport', 'summer', 'weather'],
        comments: [],
      },
      {
        postId: '2',
        title: 'what do you do now',
        body: 'hei some text here',
        author: 'author',
        image: 'image.sss',
        updated: 123,
        category: ['cars', 'weather', 'football'],
        comments: [],
      },
    ];
    const result = filterPosts(posts, searchValue);

    expect(result).toEqual([posts[1]]);
  });
});

describe('formatTime function', () => {
  it('it format time corectly from number to date', () => {
    const unixTime = 1610216822600;
    const result = formatTime(unixTime);
    expect(result).toEqual('January 9th, 8:27:02 pm');
  });
});
describe('sortPostsByCategory function', () => {
  it('return true if if your chosen category is in category []', () => {
    const categories = ['summer', 'weather', 'sport'];
    const chosenCategory = 'summer';
    const result = sortPostsCategory(categories, chosenCategory);
    expect(result).toEqual(true);
  });
});

describe('multiplyText function', () => {
  it('multiply your text by x times', () => {
    const text = 'this is my Text';
    const multipleX = 3;
    const result = multiplyText(text, multipleX);
    expect(result).toEqual('this is my Text this is my Text this is my Text this is my Text');
  });
});

describe('highlightsText function', () => {
  it('highlights searchValue text in Title', () => {
    const title = 'this is my Title';
    const searchValue = 'is my';
    const result = highlightsText(title, searchValue);
    expect(result).toEqual({
      __html: "<span>this </span><span class='success'>is my</span><span> Title</span",
    });
  });
});

describe('highlightsText function', () => {
  it('made Category array from posts unique categories', () => {
    const posts: PostType[] = [
      {
        postId: '1',
        title: 'this is first title',
        body: 'some RandomBody',
        author: 'author',
        image: 'image.sss',
        updated: 123,
        category: ['sport', 'summer', 'weather'],
        comments: [],
      },
      {
        postId: '2',
        title: 'what do you do now',
        body: 'hei some text here',
        author: 'author',
        image: 'image.sss',
        updated: 123,
        category: ['cars', 'weather', 'football'],
        comments: [],
      },
    ];
    const result = makeCategoryList(posts);
    expect(result).toEqual(['all', 'sport', 'summer', 'weather', 'cars', 'football']);
  });
});
