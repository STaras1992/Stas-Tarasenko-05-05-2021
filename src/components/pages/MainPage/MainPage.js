import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
// import SearchBar from 'material-ui-search-bar';
import SearchBar from '../../SearchBar/SearchBar';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import city1 from '../../../assets/city1.jpg';
import WeatherCard from '../../WeatherCard/WeatherCard';
import WeatherWidget from '../../WeatherWidget/WeatherWidget';
import { updateLocation, updateCurrentLocation } from '../../../redux/action/locationAction';
import { updateWeather, updateFiveDaysForecast } from '../../../redux/action/weatherAction';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'calc(72px)', //header height + some more margin
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
  searchContainer: {
    margin: '1rem 1rem',
    [theme.breakpoints.up('sm')]: {
      margin: '2rem 15%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '3rem 25%',
    },
    // padding: '1rem 1rem',
    // // margin: '1rem 0',
    // [theme.breakpoints.up('sm')]: {
    //   // margin: '2% 0',
    //   padding: '2% 15%',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   // margin: '3% 0',
    //   padding: '2% 25%',
    // },
  },
  search: {
    background: '#393e46',
    // border: '1px solid #000',
    borderRadius: '15px',
  },
  searchInput: {
    color: theme.palette.text.primary,
  },
  searchIcon: {
    color: theme.palette.text.primary,
  },
  cityDataWrapper: {
    display: 'flex',
  },
  cityData: {
    paddingLeft: '1rem',
  },
  cityImageWrapper: {
    width: '150px',
    height: '150px',
    backgroundImage: `url(${city1})`,
    backgroundSize: 'cover',
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
}));

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onLocationChange = (location) => {
    dispatch(updateLocation(location));
  };

  useEffect(() => {
    dispatch(updateCurrentLocation());
  }, []);

  return (
    <div className={classes.root}>
      <Grid container direction='column' spacing={1}>
        <Grid item>
          <div className={classes.searchContainer}>
            <SearchBar onLocationChange={onLocationChange} />
          </div>
        </Grid>
        <Grid item container direction='column'>
          <WeatherWidget />
        </Grid>
      </Grid>
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
