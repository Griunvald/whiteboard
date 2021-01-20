import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const configureStore = () => {
  return createStore(rootReducer, devToolsEnhancer());
};

export default configureStore;
