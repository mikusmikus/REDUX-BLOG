import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './user/reducer';
import { blogPostsReducer } from './blog/reducer';
import { seachPostReducer } from './search/reducer';

import { loadingReducer } from './loading/reducer';

const rootReducer = combineReducers({
  user: loginReducer,
  blogPosts: blogPostsReducer,
  seachPost: seachPostReducer,
  loading: loadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
