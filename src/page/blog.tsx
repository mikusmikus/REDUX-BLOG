/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletePostAction } from '../store/blog/action';
import { addInputSearchValue } from '../store/search/action';
import { RootState } from '../store/store';
import { H1, H3 } from '../components/typography/typography';
import Button from '../commonComponents/button/button';
import MainBody from '../commonComponents/mainBody/mainBody';
import Input from '../commonComponents/Input/input';
import PostCard from '../components/postCard/postCard';
import Image from '../commonComponents/image/image';

export const categories = ['all'];

const Blog = () => {
  const [chosenCategory, setChosenCategory] = useState('all');
  const dispatch = useDispatch();
  const history = useHistory();

  const { posts, searchValue, loading, user } = useSelector((state: RootState) => ({
    posts: state.blogPosts,
    searchValue: state.seachPost,
    loading: state.loading,
    user: state.user,
  }));

  posts.forEach((post) =>
    post.category.forEach((category) => {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    })
  );

  const handleReadMore = (id: string) => {
    history.push(`/blog/${id}`);
  };

  const deletePostHandler = (id: string) => {
    window.confirm('Are you sure want to delete post?') && dispatch(deletePostAction(id));
  };

  const handlePostSearch = (value: string) => {
    if (value.length > 1) {
      setChosenCategory('all');
    }
    dispatch(addInputSearchValue(value));
  };

  const sortPostsCategory = (category: string[], chosenTag: string) => {
    if (chosenTag === 'all') {
      return true;
    }
    return category.some((eachCategory) => eachCategory === chosenTag);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const chosenCategoryColor = (category: string): 'success' | 'primary' => {
    if (category === chosenCategory) {
      return 'success';
    }
    return 'primary';
  };

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <MainBody>
              <H1>loading...</H1>
            </MainBody>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <MainBody>
            <H1>This is Blog Page</H1>
            <div className="row end-xs">
              <div className="col-xs-12 margin-right--16">
                {user.username && (
                  <Button
                    type="button"
                    handleClick={() => history.push('/newpost')}
                    size="large"
                    color="success"
                  >
                    New Post
                  </Button>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-xs-8 margin-left--16">
                <Input
                  type="search"
                  placeholder="Find post by title here..."
                  value={searchValue}
                  onChangeHandler={handlePostSearch}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 margin-left--16">
                {categories.map((category) => (
                  <Button
                    type="button"
                    key={category}
                    color={chosenCategoryColor(category)}
                    handleClick={() => {
                      setChosenCategory(category);
                      dispatch(addInputSearchValue(''));
                    }}
                  >
                    <em>#{category}</em>
                  </Button>
                ))}
              </div>
            </div>
            <>
              {!filteredPosts.length ? (
                <>
                  <H3>Can not find any posts...</H3>
                  <Image
                    src="https://aubankaitis.files.wordpress.com/2014/04/search_600.jpg"
                    alt=".."
                  />
                </>
              ) : (
                filteredPosts
                  .sort((post, postNext) => postNext.updated - post.updated)
                  .map(
                    (post) =>
                      sortPostsCategory(post.category, chosenCategory) && (
                        <PostCard
                          user={user}
                          chosenCategory={chosenCategory}
                          key={post.postId}
                          searchValue={searchValue}
                          post={post}
                          deletePostHandler={() => deletePostHandler(post.postId)}
                          handleReadMore={() => handleReadMore(post.postId)}
                        />
                      )
                  )
              )}
            </>
          </MainBody>
        </div>
      </div>
    </div>
  );
};

export default Blog;
