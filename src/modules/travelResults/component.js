import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { View as AnimatedView } from 'react-native-animatable';
import { ListItem } from 'react-native-elements';
import { Transition } from 'react-navigation-fluid-transitions';
import * as actions from './actions';

class TravelResults extends React.PureComponent {
  componentWillMount() {
    this.props.fetchTravelResults(this.props.destination);
  }

  render() {
    return (
      <Transition appear="right" delay anchor={`result_${this.props.destination.name}`}>
        <View style={styles.container}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
            <Text style={{ padding: 10 }}>VOLVER</Text>
          </TouchableHighlight>
          <FlatList
            data={this.props.travels}
            renderItem={row => this.renderResultItem(row)}
            keyExtractor={(item, index) => `travel-${index}`}
          />
        </View>
      </Transition>
    );
  }

  renderResultItem({ item }) {
    return (
      <ListItem
        title={item.itinerario.map(i => `${i.nombre} >`).join('')}
        leftIcon={{ name: 'directions-bus' }}
        wrapperStyle={{ paddingVertical: 15 }}
        containerStyle={{ borderBottomColor: '#f2f2f2' }}
        onPress={() => {}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});

export default connect(
  (state, ownProps) => ({
    travels: state.travel.results,
    destination: ownProps.navigation.state.params,
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(TravelResults);
