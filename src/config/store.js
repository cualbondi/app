import { createStore, applyMiddleware } from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import rootReducer from '@modules/reducer'

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const store = createStore(
  rootReducer,
  applyMiddleware(middleware),
);

export default store;