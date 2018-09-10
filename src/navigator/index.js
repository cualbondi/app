import { createFluidNavigator } from 'react-navigation-fluid-transitions';
// Scenes
import SelectCityScene from '@modules/selectCity/component';
import SearchScene from '@modules/search/component';
import TravelResultsScene from '@modules/travelResults/component';

export default createFluidNavigator({
  'select-city': {
    screen: SelectCityScene,
    navigationOptions: {
      header: null,
    },
  },
  search: {
    screen: SearchScene,
  },
  'travel-results': {
    screen: TravelResultsScene,
  },
});
