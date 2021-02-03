const SELECT_COLOR = 'SELECT_COLOR';
const SELECT_SIZE = 'SELECT_SIZE';
const CLEAR_LOCAL_CANVAS = 'CLEAR_LOCAL_CANVAS';

const initialState = { color: 'black', size: 1, clear: false };

const toolbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return { ...state, color: action.payload };
    case SELECT_SIZE:
      return { ...state, size: action.payload };
    case CLEAR_LOCAL_CANVAS:
      return { ...state, clear: action.payload };
    default:
      return state;
  }
};

export default toolbarReducer;
