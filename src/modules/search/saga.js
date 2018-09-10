import { delay } from 'redux-saga';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';

function* searchByText({ API }, action) {
  yield delay(1000);
  const { text } = action.payload;
  const { cities } = yield select();
  try {
    const results = yield call(API.getPlaceByNameAndCity, {
      name: text,
      citySlug: cities.selected.slug,
    });
    yield put({ type: 'SEARCH/SEARCH_BY_TEXT_SUCCESS', payload: results });
  } catch (error) {
    yield put({ type: 'SEARCH/SEARCH_BY_TEXT_ERROR', payload: error });
  }
}

function* goToTravelResults(action) {
  yield put({
    type: 'NAVIGATE_TO',
    payload: {
      routeName: 'travel-results',
      params: {
        ...action.payload,
      },
    },
  });
}

export default function* rootSaga(dependencies) {
  yield all([
    takeLatest('SEARCH/SEARCH_BY_TEXT_REQUESTED', searchByText, dependencies),
    takeLatest('SEARCH/DESTINATION_PLACE_SELECTED', goToTravelResults),
  ]);
}
