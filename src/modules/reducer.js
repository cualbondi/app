import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '@navigator'
// reducers
import appReducer from '@modules/app/reducer'
import mapReducer from '@modules/map/reducer'

export default combineReducers({
  nav: createNavigationReducer(AppNavigator),
  app: appReducer,
  map: mapReducer,
});