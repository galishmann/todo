import { createReducer } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../utils/loadingStatuses";
import { loadTasks } from "./tasks.actions";


const initialState = {
  list: [],
  status: LOADING_STATUS.LOADING,
};

export const tasksReducerPath = 'tasks';

export const tasksReducer = createReducer(initialState, {
  [loadTasks.startAC]: (draft) => {
    draft.status = LOADING_STATUS.LOADING;
  },
  [loadTasks.successAC]: (draft, action) => {
    draft.list = action.payload;
    draft.status = LOADING_STATUS.SUCCESS;
  },
  [loadTasks.failAC]: (draft) => {
    draft.status = LOADING_STATUS.FAILED;
  },
});
