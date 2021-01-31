import { combineReducers } from 'redux';
import testReducer from './testReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import toolbarReducer from './toolbarReducer';

const rootReducer = combineReducers({
  test: testReducer,
  modal: modalReducer,
  auth: authReducer,
  toolbar: toolbarReducer,
});

export default rootReducer;
