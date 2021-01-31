const SELECT_COLOR = 'SELECT_COLOR';
const SELECT_SIZE = 'SELECT_SIZE';

const initialState = { color: 'black', size: 1 };

const toolbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return { ...state, color: action.payload };
    case SELECT_SIZE:
      return { ...state, size: action.payload };
    default:
      return state;
  }
};

export default toolbarReducer;
