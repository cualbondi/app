import { createStackNavigator } from 'react-navigation'
// Scenes
import SelectCityScene from '@modules/selectCity/component'
/* import MapScene from '@modules/map/component'
import TourFormScene from '@modules/tourForm/component' */

export default createStackNavigator({
  'select-city': {
    screen: SelectCityScene,
    navigationOptions: {
      header: null
    }
  },
  /* 'map': {
    screen: MapScene,
    navigationOptions: {
      header: null
    }
  },
  'tourForm': {
    screen: TourFormScene,
    navigationOptions: {
      header: null
    }
  } */
});