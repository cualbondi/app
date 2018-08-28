import { createStackNavigator } from 'react-navigation'
// Scenes
import SelectCityScene from '@modules/selectCity/component'

export default createStackNavigator({
  'select-city': {
    screen: SelectCityScene,
    navigationOptions: {
      header: null
    }
  }
});