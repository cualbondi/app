import React from 'react'
import { bindActionCreators } from 'redux'
import { Transition } from 'react-navigation-fluid-transitions'
import { connect } from 'react-redux'
import * as actions from './actions'
import { View, StyleSheet, Text } from 'react-native'
import { MapView } from 'expo'
import * as Animatable from 'react-native-animatable'
import FloatButton from '@uikit/button/float'
import Input from '@uikit/input'

const MapScene = (props) => (
  <View style={styles.container}>
    <MapView
      ref={ref => { this.map = ref }}
      style={styles.mapContainer}
      userLocationAnnotationTitle={'Estás Aquí'}
      showsUserLocation={true}
      followsUserLocation={false}
      showsBuildings={false}
      loadingEnabled={true}
      initialRegion={props.initialRegion}
    />
    <Input
      placeholder="Buscar Recorrido..."
      style={styles.inputSearch}
      onPress={props.onSearchPress}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE'
  },
  mapContainer: {
    flex: 1
  },
  inputSearch: {
    ...StyleSheet.absoluteFillObject,
    top: 30,
    marginLeft: 15,
    marginRight: 15,
  }
});

export default connect(
  (state) => ({ ...state.map }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(MapScene)