import { combineReducers } from 'redux';
import testReducer from './testReducer';
import loginModalReducer from './loginModalReducer';

const rootReducer = combineReducers({
  test: testReducer,
  loginModal: loginModalReducer,
});

export default rootReducer;
