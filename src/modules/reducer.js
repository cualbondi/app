// reducers
import mapReducer from '@modules/map/reducer'
import cityReducer from '@modules/selectCity/reducer'

export default {
  cities: cityReducer,
  map: mapReducer,
}