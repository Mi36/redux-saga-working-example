import {
  FETCH_FAILED,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  ADD_MOVIE,
} from '../constants/index';

const dataReducers = (data = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.receivedData;
    case FETCH_FAILED:
      return [];
    case ADD_MOVIE:
      return [...data, action.newMovie];
    default:
      return data;
  }
};

export default dataReducers;
