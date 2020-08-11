import {all, takeEvery, select} from 'redux-saga/effects';

import {watchIncrement, watchDecrement} from './counterSaga';
import {watchFetchData} from './dataSaga';
import {watchImagesLoad} from './imagesSaga';

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
  });
}

function* rootSaga() {
  yield all([
    watchDecrement(),
    watchIncrement(),
    watchFetchData(),
    watchImagesLoad(),
    watchAndLog(),
  ]);
}
export default rootSaga;
