import { createReducer } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../utils/loadingStatuses";
import { completeTask, loadTasks } from "./tasks.actions";


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

  [completeTask.successAC]: (draft, action) => {
    draft.list = draft.list.map((task) => {
      if (task.id === action.payload) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    })
    draft.status = LOADING_STATUS.SUCCESS;
  },
  [completeTask.failAC]: (draft) => {
    draft.status = LOADING_STATUS.FAILED;
  },
});
