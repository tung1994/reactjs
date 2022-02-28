import { createSelector } from "@reduxjs/toolkit";

import { initialState } from "src/slices/dashboard";

const selectSlice = (state) => state.dashboard || initialState;

export const selectDashboard = () => createSelector([selectSlice], state => state)

export const selectListUser = () => createSelector([selectSlice], state => state.user)