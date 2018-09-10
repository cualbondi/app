import { NavigationActions } from 'react-navigation';

import selectCityRootSaga from '@modules/selectCity/saga';
import searchRootSaga from '@modules/search/saga';
import travelResultsRootSaga from '@modules/travelResults/saga';
import { all, put, takeLatest } from 'redux-saga/effects';

function* navigateTo(action) {
  yield put(
    NavigationActions.navigate({
      ...action.payload,
    })
  );
}

function* navigateBack(action) {
  yield put(
    NavigationActions.back({
      ...(action.payload || {}),
    })
  );
}

export default function* rootSaga(dependencies) {
  yield all([
    yield takeLatest('NAVIGATE_TO', navigateTo),
    yield takeLatest('NAVIGATE_BACK', navigateBack),
    selectCityRootSaga(dependencies),
    searchRootSaga(dependencies),
    travelResultsRootSaga(dependencies),
  ]);
}
