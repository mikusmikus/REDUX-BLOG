import React, { FC, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header } from './components/header/header';
import { USERS } from './data/users';
import { addBlogPosts, getPostsData } from './store/blog/action';
import Login from './pages/login';
import Blog from './pages/blog';
import RegisterPage from './pages/register';
import PostPage from './pages/post';
import NewPost from './pages/newPost';
import EditPost from './pages/editPost';
import NotFoundPage from './pages/notFound';
import Footer from './components/footer/footer';
import About from './pages/about';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.usersBlog || '[]');
    const localPosts = JSON.parse(localStorage.blogPosts || '[]');

    if (!localUsers.length) localStorage.usersBlog = JSON.stringify(USERS);

    if (!localPosts.length) {
      dispatch(getPostsData());
    } else {
      dispatch(addBlogPosts(localPosts));
    }
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/newpost">
          <NewPost />
        </Route>
        <Route exact path="/editpost/:postId">
          <EditPost />
        </Route>
        <Route exact path="/blog/:postId">
          <PostPage />
        </Route>
        <Route path="/notfound">
          <NotFoundPage />
        </Route>
        <Route exact path="/">
          <Blog />
        </Route>
        <Redirect to="/notfound" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
