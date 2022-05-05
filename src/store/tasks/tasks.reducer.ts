import { createReducer } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../utils/loadingStatuses";
import { loadTasks } from "./tasks.actions";


const initialState = {
  list: [
    { id: 1, title: 'First task', date: 1, completed: false },
    { id: 2, title: 'Second task', date: 2, completed: true },
    { id: 3, title: 'Third task', date: 3, completed: false },
  ],
  status: LOADING_STATUS.LOADING,
};

export const tasksReducerPath = 'tasks';

export const tasksReducer = createReducer(initialState, {
  [loadTasks.startAC]: (draft) => {
    draft.status = LOADING_STATUS.LOADING;
  },
  [loadTasks.successAC]: (draft, payload) => {
    draft.list = payload.data;
    draft.status = LOADING_STATUS.LOADING;
  },
  [loadTasks.failAC]: (draft) => {
    draft.status = LOADING_STATUS.LOADING;
  },
});
