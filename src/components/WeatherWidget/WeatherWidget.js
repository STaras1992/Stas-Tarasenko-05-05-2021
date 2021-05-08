import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import city1 from '../../assets/city1.jpg';
import WeatherCard from '../WeatherCard/WeatherCard';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { updateWeather, updateFiveDaysForecast } from '../../redux/action/weatherAction';
import { addFavoriteLocation, removeFavoriteLocation } from '../../redux/action/favoritesAction';
import { changeTemperatureUnits } from '../../redux/action/appAction';

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 'calc(72px + 2%)', //header height + some more margin
  },
  mainContainer: {
    margin: '0 1rem',
    padding: '1rem',
    [theme.breakpoints.up('sm')]: {
      margin: '0 5%',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '0 10%',
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    justifyContent: 'center',
  },
  cityDataWrapper: {
    height: '150px',
    display: 'flex',
    border: '3px solid',
    borderColor: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      height: '160px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '170px',
    },
  },
  cityData: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '1rem 2rem',
  },
  cityImageWrapper: {
    // width: '200px',
    // height: '150px',
    // width: '40%',
    padding: 'auto auto',
    backgroundImage: `url(${city1})`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
      width: '250px',
    },
    [theme.breakpoints.up('md')]: {
      width: '250px',
    },
  },
  weatherText: {
    margin: '3rem 0',
  },
  cardsContainer: {
    // width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      width: '100%',
    },
  },
  toggleButtonsWrapper: {
    // border: '2px solid ',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '2rem',
    marginRight: '2rem',
    '& span': {
      color: theme.palette.text.primary,
    },
  },
  toggleButton: {
    '&.MuiToggleButton-root.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  favoriteButtonContainer: {
    width: '100%',
    display: 'flex',
    margin: '1rem 0',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
  },
}));

const WeatherWidget = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedLocation = useSelector((state) => state.location.location);
  const myLocation = useSelector((state) => state.location.currentLocation);
  const locationWeather = useSelector((state) => state.weather.weather);
  const locationForecast = useSelector((state) => state.weather.fiveDaysForecast);
  const favoriteLocations = useSelector((state) => state.favorite.favoriteLocations);
  const temperatureUnits = useSelector((state) => state.app.temperatureUnits);
  const [forecastItems, setForecastItems] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInitRender, setIsInitRender] = useState(true);

  const prepareForecastItems = () => {
    const tempItems = locationForecast.map((forecast) => (
      <WeatherCard key={forecast.location.key + forecast.date} weather={forecast} />
    ));
    setForecastItems(tempItems);
  };

  const handleAddFavorite = () => {
    if (selectedLocation) dispatch(addFavoriteLocation(selectedLocation));
    else dispatch(addFavoriteLocation(myLocation));
    setIsFavorite(true);
  };

  const handleRemoveFavorite = () => {
    if (selectedLocation) dispatch(removeFavoriteLocation(selectedLocation));
    else dispatch(removeFavoriteLocation(myLocation));
    setIsFavorite(false);
  };

  const handleChangeTemperatureUnits = (e, value) => {
    dispatch(changeTemperatureUnits(value));
  };

  useEffect(() => {
    if (selectedLocation) {
      dispatch(updateWeather(selectedLocation));
      dispatch(updateFiveDaysForecast(selectedLocation));
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (myLocation) {
      dispatch(updateWeather(myLocation));
      dispatch(updateFiveDaysForecast(myLocation));
    }
  }, [myLocation]);

  useEffect(() => {
    prepareForecastItems();
  }, [locationForecast]);

  useEffect(() => {
    const currentLocationKey = locationWeather?.location?.key;
    if (currentLocationKey) {
      if (favoriteLocations.some((favoriteLocation) => favoriteLocation.location.key === currentLocationKey))
        setIsFavorite(true);
      else setIsFavorite(false);
    }
  }, [locationWeather]);

  useEffect(() => {
    if (isInitRender) return setIsInitRender(false);
    localStorage.setItem('favoriteLocations', JSON.stringify(favoriteLocations));
  }, [favoriteLocations]);

  return (
    <Paper className={classes.mainContainer}>
      <Grid item container justify='space-between'>
        <Grid item xs={12} md={6} lg={4}>
          <div className={classes.cityDataWrapper}>
            <div className={classes.cityImageWrapper} />
            <div className={classes.cityData}>
              <Typography variant='h4'>{locationWeather?.location?.name}</Typography>
              <Typography variant='h4'>{locationWeather?.temperature?.c || 0} C</Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.favoriteButtonContainer} md={6} lg={8} item>
          {isFavorite ? (
            <Button variant='contained' onClick={handleRemoveFavorite}>
              Remove from favorites
            </Button>
          ) : (
            <Button variant='contained' onClick={handleAddFavorite}>
              Add to favorites
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid className={classes.weatherText} item>
        <Typography variant='h1' color='primary'>
          {locationWeather?.weatherText}
        </Typography>
      </Grid>
      <Grid item>
        <div className={classes.cardsContainer}>{forecastItems}</div>
      </Grid>
      <ToggleButtonGroup
        className={classes.toggleButtonsWrapper}
        value={temperatureUnits}
        size='small'
        exclusive
        onChange={handleChangeTemperatureUnits}
        aria-label='theme'
      >
        <ToggleButton className={classes.toggleButton} value='celsius' aria-label='celcius'>
          Celcius
        </ToggleButton>
        <ToggleButton className={classes.toggleButton} value='fahrenheit' aria-label='fahrenheit'>
          Fahrenheit
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
};

export default WeatherWidget;
