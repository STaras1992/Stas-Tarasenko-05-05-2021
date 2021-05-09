import axios from 'axios';

export const getLocationAutocomplete = async (text) => {
  try {
    return await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete', {
      params: { apikey: process.env.REACT_APP_WEATHER_API_KEY, q: text },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getLocationByCoordinates = async (coordinates) => {
  try {
    return await axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
      params: { apikey: process.env.REACT_APP_WEATHER_API_KEY, q: `${coordinates.lat},${coordinates.lon}` },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentWeather = async (locationKey) => {
  try {
    return await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
      params: { apikey: process.env.REACT_APP_WEATHER_API_KEY },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getFiveDayForecast = async (locationKey) => {
  try {
    return await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, {
      params: { apikey: process.env.REACT_APP_WEATHER_API_KEY },
    });
  } catch (err) {
    console.log(err);
  }
};
