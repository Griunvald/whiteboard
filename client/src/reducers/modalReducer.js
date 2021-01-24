const initialState = {
  open: false,
  dimmer: undefined,
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true };
    case 'CLOSE_MODAL':
      return { open: false };
    default:
      return { open: false };
  }
};

export default modalReducer;
