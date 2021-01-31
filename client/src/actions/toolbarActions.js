const SELECT_COLOR = 'SELECT_COLOR';
const SELECT_SIZE = 'SELECT_SIZE';

export const selectColor = (color) => {
  return { type: SELECT_COLOR, payload: color };
};

export const selectSize = (size) => {
  return { type: SELECT_SIZE, payload: size };
};
