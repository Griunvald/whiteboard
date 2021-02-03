const SELECT_COLOR = 'SELECT_COLOR';
const SELECT_SIZE = 'SELECT_SIZE';
const CLEAR_LOCAL_CANVAS = 'CLEAR_LOCAL_CANVAS';

export const selectColor = (color) => {
  return { type: SELECT_COLOR, payload: color };
};

export const selectSize = (size) => {
  return { type: SELECT_SIZE, payload: size };
};

export const clearLocalCanvas = (bool) => {
  return { type: CLEAR_LOCAL_CANVAS, payload: bool };
};
