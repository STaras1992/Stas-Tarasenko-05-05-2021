import {
  SET_ERROR,
  SET_IS_LOADING,
  ADD_FAVORITE_LOCATION,
  REMOVE_FAVORITE_LOCATION,
  UPDATE_FAVORITE_LOCATION,
  LOAD_FAVORITE_LOCATIONS,
} from '../actionTypes';
import { getCurrentWeather } from '../../api/AccuWeatherAPI';

const addFavorite = (data) => ({ type: ADD_FAVORITE_LOCATION, payload: data });
const removeFavorite = (location) => ({ type: REMOVE_FAVORITE_LOCATION, payload: location });
const updateFavorite = (newData) => ({ type: UPDATE_FAVORITE_LOCATION, payload: newData });
const setError = (errorMessage) => ({ type: SET_ERROR, payload: errorMessage });
const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, payload: isLoading });
const loadFavorites = (favorites) => ({ type: LOAD_FAVORITE_LOCATIONS, payload: favorites });
/*
Add new location to list of favorite locations.
try & catch for future backend requests  
*/
export const addFavoriteLocation = (data) => async (dispatch) => {
  try {
    setIsLoading(true);
    dispatch(addFavorite({ location: data }));
    dispatch(updateFavoriteLocation(data));
    setIsLoading(false);
  } catch (err) {
    console.log(err);
    setError(err);
  }
};
/*
Remove location from list of favorite locations.
try & catch for future backend requests  
*/
export const removeFavoriteLocation = (favoriteLocation) => async (dispatch) => {
  try {
    setIsLoading(true);
    dispatch(removeFavorite(favoriteLocation));
    setIsLoading(false);
  } catch (err) {
    console.log(err);
    dispatch(setError('ERROR'));
  }
};
/*
Update location from favorites list with newest weather data 
*/
export const updateFavoriteLocation = (favoriteLocation) => async (dispatch) => {
  try {
    if (process.env.REACT_APP_WEATHER_NODE_ENV === 'production') {
      console.log('production');
      const response = await getCurrentWeather(favoriteLocation.key);
      console.log('response', response);
      dispatch(
        updateFavorite({
          location: favoriteLocation,
          date: response.data[0].LocalObservationDateTime,
          isDayTime: response.data[0].IsDayTime,
          icon: response.data[0].WeatherIcon,
          temperature: { c: response.data[0].Temperature.Metric.Value, f: response.data[0].Temperature.Imperial.Value },
          weatherText: response.data[0].WeatherText,
        })
      );
    } else {
      console.log('development');
      dispatch(
        updateFavorite({
          location: favoriteLocation,
          date: '2021-05-08T21:05:00+03:00',
          isDayTime: true,
          icon: 1,
          temperature: { c: 25, f: 77 },
          weatherText: 'Clear',
        })
      );
    }
  } catch (err) {
    console.log(err);
    dispatch(setError('ERROR'));
  }
};

export const updateAllFavoriteLocations = (favoriteLocations) => async (dispatch) => {
  try {
    favoriteLocations.forEach((location) => dispatch(updateFavoriteLocation(location)));
  } catch (err) {
    console.log(err);
    dispatch(setError('ERROR'));
  }
};

export const loadFavoriteLocations = () => (dispatch) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteLocations') || '[]');
  dispatch(loadFavorites(favorites));
};
