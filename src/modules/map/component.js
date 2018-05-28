import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'
import { View, StyleSheet, Text } from 'react-native'
import { MapView } from 'expo'
import * as Animatable from 'react-native-animatable'
import FloatButton from '@uikit/button/float'
import Input from '@uikit/input'

class MapScene extends React.Component {

  static defaultProps = {
    initialRegion: {
      latitude: -34.9205,
      longitude: -57.9536,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => { this.map = ref }}
          style={styles.mapContainer}
          userLocationAnnotationTitle={'Estás Aquí'}
          showsUserLocation={true}
          followsUserLocation={false}
          showsBuildings={false}
          loadingEnabled={true}
          initialRegion={this.props.initialRegion}
        />
        <Input
          placeholder="Buscar Recorrido..."
          style={styles.inputSearch}
          onPress={this.props.onSearchPress}
        />
      </View>
    );
  }
}

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