import React from 'react'
import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SelectCity extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
          <Image
            source={require('@assets/app_logo.png')}
            style={styles.image}
          />
          <List style={styles.listContainer}>
            {this.props.cities.map((c, i) => <ListItem style={styles.listItem} key={i} title={c.nombre} />)}
          </List>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    backgroundColor: '#42BFE5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: 100,
  },
  listContainer: {
    marginTop: 50,
    flex: 0.75
  },
  listItem: {
    flex: 1,
    justifyContent: 'space-between'
  },
  listItemText: {
    color: 'white',
    fontSize: 18
  }
});

export default connect(
  (state) => ({
    cities: state.cities.list
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)(SelectCity)