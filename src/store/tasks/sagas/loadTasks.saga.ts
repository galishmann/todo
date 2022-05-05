import { put } from "redux-saga/effects";

import { tasksData } from "../../../data/tasks";
import { TaskType } from "../../../types/TaskType";
import { loadTasks } from "../tasks.actions";


export function* loadTasksSaga() {
  yield put(loadTasks.startAC());

  try {
    let tasks: TaskType[] = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) {
      tasks = tasksData;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    yield put(loadTasks.successAC(tasks));
  } catch (error) {
    yield put(loadTasks.failAC(error));
  }
}
