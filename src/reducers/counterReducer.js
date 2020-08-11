import {DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC} from '../constants/index';

const initialState = {
  age: 20,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ASYNC:
      return {...state, age: state.age + action.value};
      break;
    case DECREMENT_ASYNC:
      return {...state, age: state.age - action.value};
      break;
    default:
      return state;
  }
};

export default counterReducer;
