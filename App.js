import React from 'react';
import { Provider } from 'react-redux'
import { store, AppWithNavigationState } from '@config/bootstrap'

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)