import { all, put, takeLatest } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'

import selectCityRootSaga from '@modules/selectCity/saga'

function* navigateTo(action) {
  yield put(NavigationActions.navigate({
    ...action.payload
  }))
}

function* navigateBack(action) {
  yield put(NavigationActions.back({
    ...(action.payload || {})
  }))
}


export default function* rootSaga() {
  yield all([
    yield takeLatest('NAVIGATE_TO', navigateTo),
    yield takeLatest('NAVIGATE_BACK', navigateBack),
    selectCityRootSaga()
  ])
}