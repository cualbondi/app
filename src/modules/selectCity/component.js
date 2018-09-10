import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StatusBar, StyleSheet, Image, ScrollView } from 'react-native';
import { View as AnimatedView } from 'react-native-animatable';
import { List, ListItem } from 'react-native-elements';
import { Transition } from 'react-navigation-fluid-transitions';
import * as actions from './actions';

class SelectCity extends React.PureComponent {
  handleSelectCity(city) {
    this.props.onSelectedCity(city);
    this.props.navigation.navigate('search');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AnimatedView animation="slideInDown" style={styles.imageContainer}>
          <Image
            source={require('@assets/app_logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </AnimatedView>
        <ScrollView contentContainerStyle={styles.listContainer} bounces={false}>
          <List containerStyle={{ borderTopWidth: 0, backgroundColor: '#42BFE5' }}>
            {this.props.cities.map((city, i) => (
              <AnimatedView key={i} animation="bounceInLeft" delay={i * 100}>
                <Transition shared={`city_${city.slug}`}>
                  <ListItem
                    containerStyle={styles.listItem}
                    titleStyle={styles.listItemTitle}
                    chevronColor={'#fff'}
                    title={city.nombre}
                    onPress={() => this.handleSelectCity(city)}
                  />
                </Transition>
              </AnimatedView>
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42BFE5',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
  },
  image: {
    width: 150,
    height: 130,
  },
  listContainer: {
    paddingHorizontal: 50,
  },
  listItem: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: '#e9e9e9',
    backgroundColor: '#42BFE5',
  },
  listItemTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default connect(
  state => ({
    cities: state.cities.list,
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(SelectCity);
