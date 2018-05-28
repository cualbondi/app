import { createStackNavigator } from 'react-navigation'
// Scenes
import MapScene from '@modules/map/component'
import TourFormScene from '@modules/tourForm/component'

export default createStackNavigator({
  'map': {
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
  }
});