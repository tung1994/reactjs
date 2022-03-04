import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { dashboardActions as actions } from '../slices/dashboard'
import * as api from '../api/dashboard'

function* initDashboard({ payload }) {
  try {
    const response = yield call(api.getData)

    yield put(actions.initDashboardSuccess(response.data))
  } catch {
  }
}

function* userSelected() {
  try {
    const res = yield call(api.getContent)

    yield put(actions.messageById(res.data))  
  } catch {

  }
}

export function* dashboardSaga() {
  yield takeLatest(actions.initDashboard.type, initDashboard)
  yield takeLatest(actions.initDashboard.type, userSelected)
}
