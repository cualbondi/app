/* import { createStackNavigator } from 'react-navigation'*/
import { createFluidNavigator } from 'react-navigation-fluid-transitions'

// Scenes
import SelectCityScene from '@modules/selectCity/component'
import HomeScene from '@modules/home/component'

export default createFluidNavigator({
  'select-city': {
    screen: SelectCityScene,
    navigationOptions: {
      header: null
    }
  },
  'home': {
    screen: HomeScene
  }
});