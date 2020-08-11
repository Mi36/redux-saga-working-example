import {combineReducers} from 'redux';

import counterReducer from './counterReducer';
import dataReducer from './dataReducer';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  dataReducer,
  images: imagesReducer,
});

export default rootReducer;
