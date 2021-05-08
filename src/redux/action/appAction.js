import { SET_THEME, SET_TEMPERATURE_UNITS } from '../actionTypes';

const changeTheme = (theme) => ({ type: SET_THEME, payload: theme });
const changeTemperature = (units) => ({ type: SET_TEMPERATURE_UNITS, payload: units });

export const changeCurrentTheme = (theme) => (dispatch) => {
  localStorage.setItem('theme', theme);
  dispatch(changeTheme(theme));
};

export const changeTemperatureUnits = (units) => (dispatch) => {
  localStorage.setItem('temperatureUnits', units);
  dispatch(changeTemperature(units));
};

export const loadTheme = () => (dispatch) => {
  const theme = localStorage.getItem('theme');
  theme && dispatch(changeTheme(theme));
};
