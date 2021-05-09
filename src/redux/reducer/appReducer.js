import { SET_THEME, SET_TEMPERATURE_UNITS } from '../actionTypes.js';

const defaultState = {
  theme: 'light',
  temperatureUnits: 'celsius',
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_TEMPERATURE_UNITS:
      return { ...state, temperatureUnits: action.payload };
    default:
      return { ...state };
  }
};

export default appReducer;
