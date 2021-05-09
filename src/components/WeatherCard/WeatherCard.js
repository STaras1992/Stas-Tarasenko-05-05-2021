import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import getWeatherIcon from '../../utils/getWeatherIcon';
import { getWeekDay } from '../../utils/dateHelper';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.card,
    boxShadow: theme.shadow.primary,
    width: '90%',
    marginBottom: '1rem',
    maxWidth: '280px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #000',
    borderRadius: '8px',
    justifyContent: 'space-around',
    [theme.breakpoints.up('sm')]: {
      width: '30%',
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
      transform: 'scale(1.6) translateY(-10%) rotateY(360deg)',
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
  dayTitle: {
    fontWeight: 600,
    fontSize: '2rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
    },
  },
  temperatureTitle: {
    fontWeight: 700,
    fontSize: '2.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.7rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.5rem',
    },
  },
}));

const WeatherCard = ({ weather }) => {
  const classes = useStyles();
  const temperatureUnits = useSelector((state) => state.app.temperatureUnits);

  return (
    <Paper className={classes.root}>
      <Typography className={classes.dayTitle} variant='h3' color='textPrimary'>
        {getWeekDay(new Date(weather.date))}
      </Typography>
      <div className={classes.imageWrapper}>
        <img src={getWeatherIcon(weather.icon || 1)} width='50%' alt='weather' />
      </div>
      <Typography className={classes.temperatureTitle} variant='h2' color='textPrimary'>
        {temperatureUnits === 'fahrenheit' ? `${weather?.temperature?.f}\u00B0F` : `${weather?.temperature?.c}\u00B0C`}
      </Typography>
    </Paper>
  );
};

WeatherCard.propTypes = {};

export default WeatherCard;
