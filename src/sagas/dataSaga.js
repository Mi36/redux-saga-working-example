import {FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED} from '../constants/index';
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchData() {
  try {
    const receivedData = yield Api.getDataFromApi();
    //if success
    //here put same as dispatch in thunk
    yield put({type: FETCH_SUCCEEDED, receivedData: receivedData});
  } catch (e) {
    console.log(e);
    yield put({type: FETCH_FAILED, error: e});
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_MOVIES, fetchData);
}
