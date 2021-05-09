import { SET_WEATHER, SET_IS_LOADING, SET_FIVE_DAYS_FORECAST } from '../actionTypes';
import { getCurrentWeather, getFiveDayForecast } from '../../api/AccuWeatherAPI';
import { getDayTime } from '../../utils/dateHelper';
import { calcAverageTemperature } from '../../utils/temperatureHelper';
import { setError } from './errorAction';

const setWeather = (data) => ({ type: SET_WEATHER, payload: data });
const setFiveDaysForecast = (data) => ({ type: SET_FIVE_DAYS_FORECAST, payload: data });
const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, payload: isLoading });

export const updateWeather = (location) => async (dispatch) => {
  try {
    if (!location) return;

    dispatch(setIsLoading(true));
    if (process.env.REACT_APP_WEATHER_NODE_ENV === 'production') {
      console.log('production');
      const response = await getCurrentWeather(location.key);
      console.log('response', response);
      dispatch(
        setWeather({
          location: location,
          date: response.data[0].LocalObservationDateTime,
          icon: response.data[0].WeatherIcon,
          isDayTime: response.data[0].IsDayTime,
          temperature: { c: response.data[0].Temperature.Metric.Value, f: response.data[0].Temperature.Imperial.Value },
          weatherText: response.data[0].WeatherText,
        })
      );
    } else {
      console.log('development');
      dispatch(
        setWeather({
          location: location,
          date: '2021-05-08T21:05:00+03:00',
          isDayTime: true,
          icon: 1,
          temperature: { c: 25, f: 77 },
          weatherText: 'Clear',
        })
      );
    }
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

export const updateFiveDaysForecast = (location) => async (dispatch) => {
  try {
    if (!location) return;

    dispatch(setIsLoading(true));
    if (process.env.REACT_APP_WEATHER_NODE_ENV === 'production') {
      console.log('production');
      const response = await getFiveDayForecast(location.key);
      console.log(response);
      const data = response.data.DailyForecasts.map((forecast) => ({
        location: location,
        date: forecast.Date,
        isDayTime: getDayTime(new Date(forecast.Date)) === 'day',
        icon: getDayTime(new Date(forecast.Date)) === 'day' ? forecast.Day.Icon : forecast.Night.Icon,
        temperature: {
          c: calcAverageTemperature(forecast.Temperature.Minimum.Value, forecast.Temperature.Maximum.Value, 'c'),
          f: calcAverageTemperature(forecast.Temperature.Minimum.Value, forecast.Temperature.Maximum.Value, 'f'),
        },
        weatherText:
          getDayTime(new Date(forecast.Date)) === 'day' ? forecast.Day.IconFhrase : forecast.Night.IconFhrase,
      }));
      dispatch(setFiveDaysForecast(data));
    } else {
      console.log('development');
      dispatch(
        setFiveDaysForecast([
          {
            location: location,
            date: '2021-05-08T21:05:00+03:00',
            isDayTime: true,
            icon: 1,
            temperature: { c: 25, f: 77 },
            weatherText: 'Clear',
          },
          {
            location: location,
            date: '2021-05-09T21:05:00+03:00',
            isDayTime: false,
            icon: 1,
            temperature: { c: 11, f: 72 },
            weatherText: 'Clouds',
          },
          {
            location: location,
            date: '2021-05-10T21:05:00+03:00',
            isDayTime: true,
            icon: 1,
            temperature: { c: 21, f: 82 },
            weatherText: 'Rain',
          },
          {
            location: location,
            date: '2021-05-11T21:05:00+03:00',
            isDayTime: true,
            icon: 1,
            temperature: { c: 28, f: 71 },
            weatherText: 'Sunny',
          },
          {
            location: location,
            date: '2021-05-12T21:05:00+03:00',
            isDayTime: false,
            icon: 1,
            temperature: { c: 20, f: 70 },
            weatherText: 'Clear',
          },
        ])
      );
    }
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
