import React from 'react';
import AppNavigator from '@navigator'
import { connect } from 'react-redux'
import { createNavigationPropConstructor, initializeListeners } from 'react-navigation-redux-helpers'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = createNavigationPropConstructor("root");
  }

  componentDidMount() {
    initializeListeners("root", this.props.nav);
  }

  render() {
    return (
      <AppNavigator 
        navigation={this.navigation(
          this.props.dispatch,
          this.props.nav,
        )}
      />
    );
  }
}

export default connect(state => ({ nav: state.nav }))(App);