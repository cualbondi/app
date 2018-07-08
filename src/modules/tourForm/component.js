import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'

import InputItem from '@uikit/input'
import { List, Button } from 'antd-mobile-rn'

class TourForm extends React.Component {
  render() {
    return (
      <View
        pointerEvents='box-none'
        style={styles.overlayContainer}
      >
        <View style={styles.header}>
          <View style={styles.actionsContainer}>
            <Button onClick={this.props.onPressBack} style={{ backgroundColor: 'transparent', borderWidth: 0 }}>
              <Text style={{ color: '#fff', fontWeight: '600', fontSize: 30, textAlign: 'center' }}>{'<'}</Text>
            </Button>
          </View>
          <View style={styles.inputContainer}>
            <InputItem
              focused={true}
              placeholder={'Desde'}
              color={'#fff'}
              fontWeight={'600'}
              placeholderTextColor={'#e5e5e5'}
              style={{
                backgroundColor: '#6099F3',
                shadowOpacity: 0
              }}
            />
            <InputItem
              placeholder={'Hasta'}
              color={'#fff'}
              fontWeight={'600'}
              placeholderTextColor={'#e5e5e5'}
              style={{
                marginTop: 10,
                backgroundColor: '#6099F3',
                shadowOpacity: 0
              }}
            />
          </View>
        </View>
        <View
          style={styles.resultsContainer}
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayContainer: {
    ...StyleSheet.absoluteFillObject
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#4688F1',
    paddingTop: 30,
    paddingBottom: 10
  },
  actionsContainer: {
    flexBasis: 50,
  },
  inputContainer: {
    flex: 1,
    paddingRight: 15
  },
  resultsContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default connect(
  (state) => ({ ...state.tourForm }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(TourForm)