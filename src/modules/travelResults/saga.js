import { all, call, put, takeLatest, select } from 'redux-saga/effects';

function* fetchTravelToDestination({ API, getCurrentLocation }, action) {
  const { coordinates } = action.payload.geom;
  const { cities } = yield select();
  const citySlug = cities.selected.slug;
  const from = yield call(getCurrentLocation);

  if (from) {
    try {
      const response = yield call(API.getTravel, {
        from: `${from.coords.longitude},${from.coords.latitude}`,
        to: `${coordinates[0]},${coordinates[1]}`,
        citySlug,
      });
      yield put({
        type: 'travel-results/FETCH_TRAVEL_TO_DESTINATION_SUCCESS',
        payload: response,
      });
    } catch (error) {
      console.log(error);
      yield put({
        type: 'travel-results/FETCH_TRAVEL_TO_DESTINATION_ERROR',
        payload: error,
      });
    }
  } else {
    yield put({
      type: 'travel-results/FETCH_TRAVEL_TO_DESTINATION_ERROR',
      payload: 'No podemos obtener su unicación actual por el momento.',
    });
  }
}

export default function* rootSaga(dependencies) {
  yield all([
    takeLatest(
      'travel-results/FETCH_TRAVEL_TO_DESTINATION_REQUESTED',
      fetchTravelToDestination,
      dependencies
    ),
  ]);
}
