import { all, takeLatest } from "redux-saga/effects";

import { completeTask, loadTasks } from "../tasks.actions";
import { completeTaskSaga } from "./completeTask.saga";
import { loadTasksSaga } from "./loadTasks.saga";


export default function* watchTasksSagas() {
  yield all([
    takeLatest(
      loadTasks.triggerAC,
      loadTasksSaga,
    ),
    takeLatest(
      completeTask.triggerAC,
      completeTaskSaga,
    ),
  ]);
}
