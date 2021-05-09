import { SET_LOCATION, SET_IS_LOADING, SET_CURRENT_LOCATION } from '../actionTypes';
import { getMyLocation } from '../../utils/geolocation';
import { setError } from './errorAction';
import { getLocationByCoordinates } from '../../api/AccuWeatherAPI';

const setLocation = (data) => ({ type: SET_LOCATION, payload: data });
const setCurrentLocation = (data) => ({ type: SET_CURRENT_LOCATION, payload: data });
const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, payload: isLoading });

export const updateLocation = (location) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    dispatch(setLocation(location));
    dispatch(setIsLoading(false));
  } catch (err) {
    process.env.NODE_ENV === 'development' && console.log(err);
    switch (err?.response?.status) {
      case 400:
        dispatch(setError('Bad request!'));
        break;
      case 401:
        dispatch(setError('API authorization failed!'));
        break;
      case 403:
        dispatch(setError('Permission denied!'));
        break;
      case 404:
        dispatch(setError('Data not found!'));
        break;
      default:
        dispatch(setError('Something went wrong'));
    }
  }
};

export const updateCurrentLocation = () => async (dispatch) => {
  try {
    let locationCoordinates = getMyLocation();
    if (!locationCoordinates) {
      //Tel aviv coordinates
      locationCoordinates = { lat: '32.109333', lon: '34.855499' };
    }
    if (process.env.REACT_APP_WEATHER_NODE_ENV === 'production') {
      console.log('production');
      const response = await getLocationByCoordinates(locationCoordinates);
      console.log('response', response);
      if (!response.data || response.data.length === 0) return;
      dispatch(setCurrentLocation({ key: response.data.Key, name: response.data.AdministrativeArea.LocalizedName }));
      dispatch(updateLocation({ key: response.data.Key, name: response.data.AdministrativeArea.LocalizedName }));
    } else {
      console.log('development');
      dispatch(setCurrentLocation({ key: '215805', name: 'Tel aviv' }));
      dispatch(updateLocation({ key: '215805', name: 'Tel aviv' }));
    }
  } catch (err) {
    process.env.NODE_ENV === 'development' && console.log(err);
    switch (err?.response?.status) {
      case 400:
        dispatch(setError('Bad request!'));
        break;
      case 401:
        dispatch(setError('API authorization failed!'));
        break;
      case 403:
        dispatch(setError('Permission denied!'));
        break;
      case 404:
        dispatch(setError('Data not found!'));
        break;
      default:
        dispatch(setError('Something went wrong'));
    }
  }
};
