import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { blogPostsReducer } from './blog';
import { loginReducer } from './user';
import { seachPostReducer } from './search';
import { loadingReducer } from './loading';

const rootReducer = combineReducers({
  user: loginReducer,
  blogPosts: blogPostsReducer,
  seachPost: seachPostReducer,
  loading: loadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
