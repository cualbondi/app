import cityReducer from '@modules/selectCity/reducer';
import searchReducer from '@modules/search/reducer';
import travelResultsReducer from '@modules/travelResults/reducer';

export default {
  cities: cityReducer,
  search: searchReducer,
  travel: travelResultsReducer,
};
