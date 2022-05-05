import { all } from 'redux-saga/effects';

import watchTasksSagas from './tasks/sagas';


function* rootSaga() {
  yield all([
    watchTasksSagas(),
  ]);
}

export default rootSaga;
