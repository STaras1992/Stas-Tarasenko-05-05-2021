import { SET_LOCATION, SET_IS_LOADING, SET_CURRENT_LOCATION } from '../actionTypes.js';

const defaultState = {
  isLoading: false,
  location: null,
  currentLocation: null,
};

const locationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: { ...action.payload } };
    case SET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return { ...state };
  }
};

export default locationReducer;
