import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { dashboardActions as actions } from '../slices/dashboard'
import * as api from '../api/dashboard'
import { selectMessageById } from 'src/selectors/dashboard'

function* initDashboard({ payload }) {
  try {
    const response = yield call(api.getData)

    yield put(actions.initDashboardSuccess(response.data))
  } catch {
  }
}

function* userSelected({ payload }) {
  try {
    const res = yield call(api.getContent, payload)

    yield put(actions.fetchMessageByIdSuccess(res.data))  
  } catch {

  }
}

// function* fetchMessages({ payload }) {
//   try {
//     const result = yield call(api.getContent, payload)

//     yield put(actions.fetchMessagesSuccess(result.data))
//   } catch {

//   }
// }

export function* dashboardSaga() {
  yield takeLatest(actions.initDashboard.type, initDashboard)
  yield takeLatest(actions.fetchMessageById.type, userSelected)
  // yield takeLatest(actions.fetchMessages.type, fetchMessages)
}
