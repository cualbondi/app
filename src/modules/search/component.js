import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { Button, ListItem } from 'react-native-elements';

import * as actions from './actions';

import Input from './components/input';

class SearchScreen extends React.PureComponent {
  state = {
    inputFocused: false,
    text: '',
  };

  handleOnFocusInput() {
    this.setState({ inputFocused: true });
  }

  handleClearPress() {
    this.setState({
      text: '',
    });
  }

  handleChangeText(text) {
    this.setState({ text }, () => {
      this.props.searchByText({
        text: this.state.text,
      });
    });
  }

  render() {
    return (
      <Transition
        disappear="flip"
        appear="scale"
        delay
        anchor={`city_${this.props.selectedCity.slug}`}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            {!this.state.inputFocused && (
              <Button
                rightIcon={{ name: 'keyboard-arrow-down' }}
                title={this.props.selectedCity.nombre}
                fontSize={20}
                onPress={() => this.props.navigation.goBack()}
                backgroundColor={'transparent'}
              />
            )}
            <Input
              placeholder={`Dime donde quieres ir...`}
              showLoadingIcon={this.state.inputFocused && this.props.loading}
              value={this.state.text}
              onClearText={() => this.handleClearPress()}
              onFocus={() => this.handleOnFocusInput()}
              onChangeText={text => this.handleChangeText(text)}
              containerStyle={{
                marginTop: !this.state.inputFocused ? 100 : 0,
              }}
            />
          </View>
          {this.state.inputFocused && (
            <View style={styles.resultsContainer}>
              {!this.props.searchResults.length ? (
                <Text style={{ color: '#43484d', textAlign: 'center', marginTop: 30 }}>
                  {!this.props.loading && 'No hay resultados de búsqueda.'}
                </Text>
              ) : (
                <View>
                  <View
                    style={{
                      backgroundColor: '#f2f2f2',
                      paddingVertical: 8,
                      paddingHorizontal: 16,
                    }}>
                    <Text style={{ color: '#43484d' }}>Resultados Sugeridos</Text>
                  </View>
                  <FlatList
                    data={this.props.searchResults}
                    renderItem={row => this.renderResultItem(row)}
                    keyExtractor={(item, index) => `result-${index}`}
                  />
                </View>
              )}
            </View>
          )}
        </View>
      </Transition>
    );
  }

  renderResultItem({ item }) {
    return (
      <ListItem
        title={item.nombre}
        leftIcon={{ name: 'location-on' }}
        wrapperStyle={{ paddingVertical: 15 }}
        containerStyle={{ borderBottomColor: '#f2f2f2' }}
        onPress={() => this.props.onSelectDestinationPlace(item)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 0,
    paddingTop: 15,
    paddingBottom: 5,
    backgroundColor: '#42BFE5',
  },
  focusedStyles: {
    marginTop: 15,
  },
  resultsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default connect(
  state => ({
    selectedCity: state.cities.selected,
    loading: state.search.searching,
    searchResults: state.search.results,
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(SearchScreen);
