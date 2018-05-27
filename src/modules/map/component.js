import React from 'react'
import { View, StyleSheet, StatusBar, Text } from 'react-native'
import { MapView } from 'expo'
import * as Animatable from 'react-native-animatable'
import Icon from 'antd-mobile/lib/icon'
import Button from 'antd-mobile/lib/button'
import InputItem from '@uikit/input-item'
import List from 'antd-mobile/lib/list'

export default class MapScene extends React.Component {

  state = {
    focusedInput: null
  }

  constructor(props) {
    super(props);
    this.onTouchCoordinateInMap = this.handleOnTouchCoordinateInMap.bind(this);
    this.onFocusInput = this.handleFocusInput.bind(this);
    this.onBlurInput = this.handleBlurInput.bind(this);
  }

  handleOnTouchCoordinateInMap(e) {
    const { coordinate, position } = e.nativeEvent;
  }

  handleFocusInput(e) {
    this.setState({ focusedInput: true });
  }

  handleBlurInput(e) {
    this.setState({ focusedInput: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <MapView
          style={styles.mapContainer}
          showsUserLocation={true}
          userLocationAnnotationTitle={'Estás Aquí'}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsBuildings={false}
          loadingEnabled={true}
          onPress={this.onTouchCoordinateInMap}
          initialRegion={{
            latitude: 34.9205,
            longitude: -57.9536,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.inputContainer}>
              <InputItem
                onFocus={this.onFocusInput}
                onBlur={this.onBlurInput}
                placeholder={'Desde'}
                color={'#fff'}
                fontWeight={'600'}
                placeholderTextColor={'#e5e5e5'}
                style={{ 
                  backgroundColor: '#6099F3'
                }}
              />
              <InputItem 
                placeholder={'Hasta'}
                color={'#fff'}
                fontWeight={'600'}
                placeholderTextColor={'#e5e5e5'}
                style={{
                  marginTop: 10,
                  backgroundColor: '#6099F3'
                }}
              />
            </View>
            {this.state.focusedInput !== null && (
              <Animatable.View 
                animation={this.state.focusedInput ? 'bounceInRight' : 'bounceOutRight'} 
                style={styles.inputFocusedContainer}
              >
                <List renderHeader={() => 'Favoritos'}>
                  <List.Item onClick={e => alert('hola')} arrow={'horizontal'}>
                    <Text>Mi Ubicación</Text>
                  </List.Item>
                </List>
                <List renderHeader={() => 'Resultados de Búsqueda'}>
                  <List.Item>
                    <Text>Calle 12 #1503</Text>
                  </List.Item>
                </List>
              </Animatable.View>
            )}
          </View>
        </MapView>
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
  inputContainer: {
    backgroundColor: '#4688F1', 
    paddingTop: 30, 
    paddingBottom: 10, 
    paddingHorizontal: 15
  },
  inputFocusedContainer: {
    flex: 6,
    backgroundColor: '#E9EBEE'
  }
});