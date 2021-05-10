import axios from 'axios';

export const getLocationAutocomplete = async (text) => {
  return await axios.get('https://dataservice.accuweather.com/locations/v1/cities/autocomplete', {
    params: { apikey: process.env.REACT_APP_WEATHER_API_KEY, q: text },
  });
};

export const getLocationByCoordinates = async (coordinates) => {
  return await axios.get('https://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
    params: { apikey: process.env.REACT_APP_WEATHER_API_KEY, q: `${coordinates.lat},${coordinates.lon}` },
  });
};

export const getCurrentWeather = async (locationKey) => {
  return await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
    params: { apikey: process.env.REACT_APP_WEATHER_API_KEY },
  });
};

export const getFiveDayForecast = async (locationKey) => {
  return await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, {
    params: { apikey: process.env.REACT_APP_WEATHER_API_KEY },
  });
};
