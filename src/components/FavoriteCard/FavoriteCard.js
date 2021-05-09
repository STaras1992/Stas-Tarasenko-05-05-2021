import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clouds from '../../assets/clouds.png';
import propTypes from 'prop-types';
import { getWeekDay } from '../../utils/dateHelper';
import getWeatherIcon from '../../utils/getWeatherIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.card,
    boxShadow: theme.shadow.primary,
    width: '90%',
    marginBottom: '1rem',
    maxWidth: '280px',
    height: '300px',
    display: 'flex',
    border: '1px solid #000',
    borderRadius: '8px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.up('sm')]: {
      width: '33%',
    },
    [theme.breakpoints.up('md')]: {
      width: '18%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '15%',
    },
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      transition: 'all 0.4s ease-in-out 0.3s',
      transform: 'scale(1.1)',
    },
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      maxWidth: '200px',
      [theme.breakpoints.up('xl')]: {
        maxWidth: '250px',
      },
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
  weatherTitle: {
    fontWeight: 500,
    fontSize: '1.8rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.0rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.1rem',
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

const FavoriteCard = ({ locationData, handleFavoriteSelect }) => {
  const classes = useStyles();
  const temperatureUnits = useSelector((state) => state.app.temperatureUnits);

  const handleClick = () => {
    handleFavoriteSelect(locationData.location);
  };

  return (
    <Paper className={classes.root} onClick={handleClick}>
      <Typography className={classes.locationTitle} variat='h3' color='textPrimary'>
        {locationData.location.name}
      </Typography>
      <div className={classes.imageWrapper}>
        <img src={getWeatherIcon(locationData.icon)} width='50%' alt='weather' />
      </div>
      <Typography className={classes.weatherTitle} variant='h2' color='textSecondary'>
        {locationData.weatherText}
      </Typography>
      <Typography className={classes.temperatureTitle} variant='h2' color='textPrimary'>
        {temperatureUnits === 'fahrenheit'
          ? `${locationData?.temperature?.f}\u00B0F`
          : `${locationData?.temperature?.c}\u00B0C`}
      </Typography>
    </Paper>
  );
};

FavoriteCard.propTypes = {};

export default FavoriteCard;
