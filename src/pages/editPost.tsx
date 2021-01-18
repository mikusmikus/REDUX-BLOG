import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../store';
import { EditPostAction } from '../store/blog/action';
import { PostType } from '../store/blog/types';
import { MainBody } from '../commonComponents';
import PostEditor from '../components/postEditor/postEditor';
import { H1 } from '../components/typography/typography';

const EditPost = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { postId } = useParams<{ postId: string }>();

  const { post, loggedUser } = useSelector(
    (state: RootState) => ({
      post: state.blogPosts.find((onePost) => onePost.postId === postId),
      loggedUser: state.user.username,
    }),
    shallowEqual
  );

  const SavePostHandler = (
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    body: string,
    image: string,
    category1: string,
    category2: string
  ) => {
    e.preventDefault();
    if (loggedUser && post) {
      const newPost: PostType = {
        postId: post.postId,
        title,
        body,
        author: loggedUser,
        image,
        updated: Date.now(),
        category: [category1, category2],
        comments: post.comments,
      };
      dispatch(EditPostAction(newPost));

      const localPosts: PostType[] = JSON.parse(localStorage.blogPosts || '[]');
      const localPostIndex = localPosts.findIndex((localPost) => localPost.postId === post.postId);
      localPosts.splice(localPostIndex, 1, newPost);
      localStorage.blogPosts = JSON.stringify(localPosts);

      history.push(`/blog/${postId}`);
    }
  };
  const handleCancel = () => {
    history.push(`/blog/${postId}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-xs-12">
          <MainBody>
            <H1>This EDIT Post Page</H1>
            <PostEditor SavePostHandler={SavePostHandler} handleCancel={handleCancel} />
          </MainBody>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
