// import { createStackNavigator } from 'react-navigation'
import { FluidNavigator } from 'react-navigation-fluid-transitions'
// Scenes
import MapScene from '@modules/map/component'
import TourFormScene from '@modules/tourForm/component'

export default FluidNavigator({
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