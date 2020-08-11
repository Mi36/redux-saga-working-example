import {IMAGES} from '../constants/index';
const initialState = {
  images: null,
  error: null,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return {...state, images: action.images};
      break;
    case IMAGES.LOAD_FAIL:
      return {...state, error: action.error};
      break;
    default:
      return state;
  }
};

export default imagesReducer;
