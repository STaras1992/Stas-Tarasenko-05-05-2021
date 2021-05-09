import { SET_WEATHER, SET_IS_LOADING, SET_FIVE_DAYS_FORECAST } from '../actionTypes.js';

const defaultState = {
  isLoading: false,
  weather: null,
  fiveDaysForecast: [],
};

const wetherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, weather: { ...action.payload } };
    case SET_FIVE_DAYS_FORECAST:
      return { ...state, fiveDaysForecast: [...action.payload] };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return { ...state };
  }
};

export default wetherReducer;
