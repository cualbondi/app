import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '@modules/reducer'
import rootSaga from '@modules/saga'

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const sagaMiddlware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(middleware),
    applyMiddleware(sagaMiddlware)
  )
);

sagaMiddlware.run(rootSaga);

export default store;