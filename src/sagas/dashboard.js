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

function* userSelected(friend_id) {
  try {
    const response = yield call(api.getContent, 1)
    console.log(response);
    yield put(actions.userSelected(response.data))  
  } catch {

  }
}

export function* dashboardSaga() {
  yield takeLatest(actions.initDashboard.type, initDashboard)
  yield takeLatest(actions.userSelected.type, userSelected)
}
