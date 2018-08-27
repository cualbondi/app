import React from 'react'
import { View, StatusBar, Text, StyleSheet, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SelectCity extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <Image 
            source={require('@assets/images/example.png')}
          />
        </View>
        <View style={styles.list}>
          {this.props.cities.map((c, i) => 
            <Text key={i} style={styles.listItem}>{c.nombre}</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    backgroundColor: '#42BFE5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItem: {
    flex: 1,
    justifyContent: 'space-between',
    color: 'white',
    fontSize: 20
  }
})

export default connect(
  (state) => ({
    cities: state.cities.list
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)(SelectCity)