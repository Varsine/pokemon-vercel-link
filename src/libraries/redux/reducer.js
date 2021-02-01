import { combineReducers } from 'redux';

import * as reducers from '../../store/reducers/index';

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
