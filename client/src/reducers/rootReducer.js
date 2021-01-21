import { combineReducers } from 'redux';
import testReducer from './testReducer';
import loginModalReducer from './loginModalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  test: testReducer,
  loginModal: loginModalReducer,
  auth: authReducer,
});

export default rootReducer;
