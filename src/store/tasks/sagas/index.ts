import { all, takeLatest } from "redux-saga/effects";

import { loadTasks } from "../tasks.actions";
import { loadTasksSaga } from "./loadTasks.saga";


export default function* watchTasksSagas() {
  yield all([
    takeLatest(
      loadTasks.triggerAC,
      loadTasksSaga,
    ),
  ]);
}
