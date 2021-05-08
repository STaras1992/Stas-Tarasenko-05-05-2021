import { SET_LOCATION, SET_ERROR, SET_IS_LOADING, SET_CURRENT_LOCATION } from '../actionTypes';
// import { getLocationAutocomplete } from '../../api/AccuWeatherAPI';
import { getMyLocation } from '../../utils/geolocation';
import { getLocationByCoordinates } from '../../api/AccuWeatherAPI';

const setLocation = (data) => ({ type: SET_LOCATION, payload: data });
const setError = (errorMessage) => ({ type: SET_ERROR, payload: errorMessage });
const setCurrentLocation = (data) => ({ type: SET_CURRENT_LOCATION, payload: data });
const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, payload: isLoading });

export const updateLocation = (location) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    // const response = await weatherApi.getLocationAutocomplete(text);
    // dispatch(setLocation(response.data));
    dispatch(setLocation(location));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.log(err);
    dispatch(setError('ERROR'));
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
      if (!response.data || response.data.length === 0) return;
      dispatch(setCurrentLocation({ key: response.data.Key, name: response.data.AdministrativeArea.LocalizedName }));
    } else {
      console.log('development');
      dispatch(setCurrentLocation({ key: '215805', name: 'Tel aviv' }));
    }
  } catch (err) {
    console.log(err);
    dispatch(setError('ERROR'));
  }
};
