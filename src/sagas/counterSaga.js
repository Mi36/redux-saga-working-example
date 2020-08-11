import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC,
} from '../constants/index';

import {takeEvery, delay, put} from 'redux-saga/effects';

function* increment() {
  //yield delay(2000);
  console.log('this is increment saga');
  yield put({type: INCREMENT_ASYNC, value: 1});
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}
function* decrement() {
  console.log('this is decrement saga');
  yield put({type: DECREMENT_ASYNC, value: 1});
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}
