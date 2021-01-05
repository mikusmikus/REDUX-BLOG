import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Image, Input, MainBody } from '../commonComponents';
import { deletePostAction } from '../store/blog/action';
import { addInputSearchValue } from '../store/search/action';
import { RootState } from '../store/store';
import { H1, H3 } from '../components/typography';
import PostCard from '../components/postCard';
import { chooseCategoryColor, filterPosts, makeCategoryList, sortPostsCategory } from '../helpers';



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
                {makeCategoryList(posts).map((category) => (
                  <Button
                    type="button"
                    key={category}
                    color={chooseCategoryColor(category, chosenCategory)}
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
              {!filterPosts(posts, searchValue).length ? (
                <>
                  <H3>Can not find any posts...</H3>
                  <Image
                    src="https://aubankaitis.files.wordpress.com/2014/04/search_600.jpg"
                    alt=".."
                  />
                </>
              ) : (
                filterPosts(posts, searchValue)
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
