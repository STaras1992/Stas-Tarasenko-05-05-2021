import { SET_ERROR, CLEAR_ERROR } from '../actionTypes.js';

const defaultState = {
  error: null,
};

const errorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export default errorReducer;
