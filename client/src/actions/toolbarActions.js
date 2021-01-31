const SELECT_COLOR = 'SELECT_COLOR';

export const selectColor = (color) => {
  return { type: SELECT_COLOR, payload: color };
};
