import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import city1 from '../../assets/city1.jpg';
import WeatherCard from '../WeatherCard/WeatherCard';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { updateWeather, updateFiveDaysForecast } from '../../redux/action/weatherAction';
import { addFavoriteLocation, removeFavoriteLocation } from '../../redux/action/favoritesAction';
import { changeTemperatureUnits } from '../../redux/action/appAction';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    boxShadow: theme.shadow.primary,
    background: theme.palette.background.paper,
  },
  cityDataWrapper: {
    height: '150px',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      height: '170px',
    },
  },
  cityData: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '0 2rem',
  },
  cityImageWrapper: {
    width: '150px',
    padding: 'auto auto',
    backgroundImage: `url(${city1})`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
      width: '200px',
    },
  },
  weatherText: {
    margin: '3rem 0',
    '& .MuiTypography-root': {
      display: 'inline-block',
      fontFamily: 'Fredoka One, cursive',
      transition: 'all 0.5s ease-in-out',
      '&:hover': {
        transition: 'all 0.5s ease-in-out 0.2s',
        transform: 'rotateX(360deg) scale(1.5)',
      },
    },
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    },
  },
  toggleButtonsWrapper: {
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
  favoriteButton: {
    backgroundColor: theme.palette.background.button.primary,
    boxShadow: theme.shadow.button,
    border: '1px solid #fb3640',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      borderRadius: '8px',
      transition: 'all 0.3s ease-in-out',
      transform: 'scale(1.1)',
      backgroundColor: theme.palette.background.button.secondary,
    },
  },
  locationTitle: {
    fontWeight: 500,
    fontSize: '1.8rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.1rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.3rem',
    },
  },
  temperatureTitle: {
    fontWeight: 600,
    fontSize: '2.3rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.8rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.0rem',
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
    console.log('SELECTED  LOCATION EFFECT', selectedLocation);
    if (selectedLocation) {
      dispatch(updateWeather(selectedLocation));
      dispatch(updateFiveDaysForecast(selectedLocation));
    }
  }, [selectedLocation]);

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

  useEffect(() => {}, []);

  return (
    <Paper className={clsx(classes.paper, classes.root)}>
      <Grid item container justify='space-between'>
        <Grid item xs={12} md={6} lg={4}>
          <div className={classes.cityDataWrapper}>
            <div className={classes.cityImageWrapper} />
            <div className={classes.cityData}>
              <Typography className={classes.locationTitle} variant='h4'>
                {locationWeather?.location?.name}
              </Typography>
              <Typography className={classes.temperatureTitle} variant='h4'>
                {temperatureUnits === 'fahrenheit'
                  ? `${locationWeather?.temperature?.f}\u00B0F`
                  : `${locationWeather?.temperature?.c}\u00B0C`}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.favoriteButtonContainer} md={6} lg={8} item>
          {isFavorite ? (
            <Button className={classes.favoriteButton} variant='contained' onClick={handleRemoveFavorite}>
              Remove from favorites
            </Button>
          ) : (
            <Button className={classes.favoriteButton} variant='contained' onClick={handleAddFavorite}>
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
