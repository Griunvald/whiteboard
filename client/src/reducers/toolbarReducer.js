const SELECT_COLOR = 'SELECT_COLOR';

const initialState = { color: 'black' };

const toolbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default toolbarReducer;
