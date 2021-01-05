import React, { FC, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header } from './components/header';
import { users } from './data/users';
import { addBlogPosts, getPostsData } from './store/blog/action';
import { addUser } from './store/user/action';
import Login from './page/login';
import Blog from './page/blog';
import RegisterPage from './page/register';
import PostPage from './page/post';
import NewPost from './page/newPost';
import EditPost from './page/editPost';
import NotFoundPage from './page/notFound';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    const localUsers = JSON.parse(localStorage.usersBlog || '[]');
    const localPosts = JSON.parse(localStorage.blogPosts || '[]');
    const currentUser = JSON.parse(localStorage.usersBlogUser || '{}');

    if (localUsers.length === 0) {
      localStorage.usersBlog = JSON.stringify(users);
    }
    
    if (localPosts.length === 0) {
      dispatch(getPostsData());
    } else {
      dispatch(addBlogPosts(localPosts));
    }

    dispatch(addUser(currentUser));
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/newpost">
          <NewPost />
        </Route>
        <Route exact path="/editpost/:postId">
          <EditPost />
        </Route>
        <Route exact path="/blog/:postId">
          <PostPage />
        </Route>
        <Route exact path="/notfound">
          <NotFoundPage />
        </Route>
        <Route exact path="/">
          <Blog />
        </Route>
        <Redirect to="/notfound" />
      </Switch>
    </Router>
  );
};

export default App;
