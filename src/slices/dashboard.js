import { createSlice } from '@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from '../utils/redux-injector'

import { dashboardSaga } from '../sagas/dashboard'

export const initialState = {
  user: [],
  content: [],
}

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    initDashboard(state, action) {
      
    },
    initDashboardSuccess(state, action) {
      const {friends} = action.payload
      state.user = friends
    },
    // currentSelected()

    userSelected(state, action) {
      const {messages} = action.payload
      state.content = messages
    }
  },
})

export const { actions: dashboardActions } = slice

export const useDashboardSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: dashboardSaga })
  return { actions: slice.actions }
}
