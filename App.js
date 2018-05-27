import React from 'react';
import { Provider } from 'react-redux'
import store from '@config/store'
import App from '@modules/app/component'

export default (props) => (
  <Provider store={store}>
    <App />
  </Provider>
)