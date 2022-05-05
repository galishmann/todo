import { put, select } from "redux-saga/effects";

import { TaskType } from "../../../types/TaskType";
import { completeTask } from "../tasks.actions";
import { getTasksList } from "../tasks.selector";


export function* completeTaskSaga(action) {
  yield put(completeTask.startAC());

  try {
    yield put(completeTask.successAC(action.payload));
    const tasks: TaskType[] = yield select(getTasksList);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    yield put(completeTask.failAC(error));
  }
}
