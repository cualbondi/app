import { composeWithDevTools } from 'redux-devtools-extension';
import { connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '@modules/reducer';
import rootSaga from '@modules/saga';
import AppNavigator from '@navigator';
import API from '@api';
import { getCurrent as getCurrentLocation } from '@api/location';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';

const rootReducer = combineReducers({
  ...reducers,
  nav: createNavigationReducer(AppNavigator),
});

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const sagaMiddlware = createSagaMiddleware();

const App = reduxifyNavigator(AppNavigator, 'root');

const AppWithNavigationState = connect(state => ({ state: state.nav }))(App);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleware), applyMiddleware(sagaMiddlware))
);

sagaMiddlware.run(rootSaga, { API, getCurrentLocation });

export { AppWithNavigationState, store };
