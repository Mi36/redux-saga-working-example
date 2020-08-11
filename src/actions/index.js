import {
  INCREMENT,
  DECREMENT,
  FETCH_FAILED,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  ADD_MOVIE,
  IMAGES,
  STATS,
} from '../constants/index';

export const watchIncrement = () => {
  return {
    type: INCREMENT,
  };
};
export const watchDecrement = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchDataAction = (sort) => {
  return {
    type: FETCH_MOVIES,
    sort: sort,
  };
};
export const addDataAction = (newData) => {
  return {
    type: ADD_MOVIE,
    newData,
  };
};

export const fetchSuccessAction = (receivedData) => {
  return {
    type: FETCH_SUCCEEDED,
    receivedData,
  };
};

export const fetchFailedAction = (error) => {
  return {
    type: FETCH_FAILED,
    error,
  };
};

const loadImages = (a) => ({
  type: IMAGES.LOAD,
  a: a,
});

const setImages = (images) => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const setError = (error) => ({
  type: IMAGES.LOAD_FAIL,
  error,
});

const loadImageStats = (id) => ({
  type: STATS.LOAD,
  id,
});

const setImageStats = (id, downloads) => ({
  type: STATS.LOAD_SUCCESS,
  id,
  downloads,
});

const setImageStatsError = (id) => ({
  type: STATS.LOAD_FAIL,
  id,
});

export {
  loadImages,
  setImages,
  setError,
  loadImageStats,
  setImageStats,
  setImageStatsError,
};
