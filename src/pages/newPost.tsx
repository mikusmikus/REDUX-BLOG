import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { MainBody } from '../commonComponents';
import PostEditor from '../components/postEditor/postEditor';
import { H1 } from '../components/typography/typography';
import { PostType } from '../store/blog/types';
import { AddPostAction } from '../store/blog/action';
import { RootState } from '../store';

const NewPost = () => {
  const loggedUser = useSelector((state: RootState) => state.user.username);
  const history = useHistory();
  const dispatch = useDispatch();

  const SavePostHandler = (
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    body: string,
    image: string,
    category1: string,
    category2: string
  ) => {
    e.preventDefault();

    if (loggedUser) {
      const newPost: PostType = {
        postId: uuidv4(),
        title,
        body,
        author: loggedUser,
        image,
        updated: Date.now(),
        category: [category1, category2],
        comments: [],
      };
      dispatch(AddPostAction(newPost));

      const localPosts: PostType[] = JSON.parse(localStorage.blogPosts || '[]');
      localPosts.push(newPost);
      localStorage.blogPosts = JSON.stringify(localPosts);

      history.push('/');
    }
  };

  const handleCancel = () => {
    history.push('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-xs-12">
          <MainBody>
            <H1>This Is New Post Page</H1>
            <PostEditor SavePostHandler={SavePostHandler} handleCancel={handleCancel} />
          </MainBody>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
