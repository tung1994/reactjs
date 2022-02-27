import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { dashboardActions as actions } from '../slices/dashboard'

function* initDashboard({ payload }) {
  try {
    console.log('Init Dashboard Saga')
    yield put(actions.initDashboardSuccess())
  } catch {
  }
}

export function* dashboardSaga() {
  yield takeLatest(actions.initDashboard.type, initDashboard)
}
