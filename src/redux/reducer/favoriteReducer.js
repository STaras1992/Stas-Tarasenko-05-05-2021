import {
  SET_ERROR,
  SET_IS_LOADING,
  ADD_FAVORITE_LOCATION,
  REMOVE_FAVORITE_LOCATION,
  UPDATE_FAVORITE_LOCATION,
  LOAD_FAVORITE_LOCATIONS,
} from '../actionTypes.js';

const defaultState = {
  isLoading: false,
  favoriteLocations: [],
};

const favoriteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_LOCATION:
      return {
        ...state,
        favoriteLocations: state.favoriteLocations.find(
          (element) => element.location.key === action.payload.location.key
        )
          ? state.favoriteLocations
          : [...state.favoriteLocations, action.payload],
      };
    case UPDATE_FAVORITE_LOCATION:
      return {
        ...state,
        favoriteLocations: state.favoriteLocations.map((location) =>
          location.location.key === action.payload.location.key ? action.payload : location
        ),
      };
    case REMOVE_FAVORITE_LOCATION:
      return {
        ...state,
        favoriteLocations: state.favoriteLocations.filter(
          (favoriteLocation) => favoriteLocation.location.key !== action.payload.key
        ),
      };
    case LOAD_FAVORITE_LOCATIONS:
      return { ...state, favoriteLocations: [...action.payload] };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return { ...state };
  }
};

export default favoriteReducer;
