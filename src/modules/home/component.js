import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import { View as AnimatedView } from 'react-native-animatable'

class Home extends React.PureComponent {
  render() {
    return (
      <Transition
        appear='scale'
        delay
        anchor={`city_${this.props.selectedCity.slug}`}
      >
        <View
          style={styles.container}
        >
          <Transition
            shared={`city_${this.props.selectedCity.slug}`}
          >
            <View
              style={{ alignItems: 'center' }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                >
                <Text
                  style={{ color: 'white', fontSize: 20 }}
                >
                  {this.props.selectedCity.nombre}
                </Text>
              </TouchableOpacity>
            </View>
          </Transition>
        </View>
      </Transition>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42BFE5',
    paddingTop: 25
  },
});

export default connect(
  (state) => ({
    selectedCity: state.cities.selected
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)(Home)