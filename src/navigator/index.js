import { createStackNavigator } from 'react-navigation'
// Scenes
import MapScene from '@modules/map/component'

export default createStackNavigator({
  MapScene: { 
    screen: MapScene,
    navigationOptions: {
      header: null
    }
  }
});