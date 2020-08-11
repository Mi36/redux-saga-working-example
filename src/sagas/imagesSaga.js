import {put, call, takeEvery} from 'redux-saga/effects';

import {setImages, setError} from '../actions';
import {IMAGES} from '../constants';
import {Api} from './Api';

function* handleImagesLoad(action) {
  try {
    console.log('here', action.a);
    const images = yield Api.fetchImages();
    //  const images = yield call(Api.fetchImages);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError('Error occured, please again'));
  }
}

export function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
