import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clouds from '../../assets/clouds.png';
import propTypes from 'prop-types';
import getWeatherIcon from '../../utils/getWeatherIcon';
import { getWeekDay } from '../../utils/dateHelper';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.light,
    width: '15%',
    // maxWidth: '300px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    // [theme.breakpoints.up('sm')]: {
    //   width: '15%',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   width: '300px',
    // },
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      maxWidth: '200px',
    },
  },
}));

const WeatherCard = ({ weather }) => {
  const classes = useStyles();
  const temperatureUnits = useSelector((state) => state.app.temperatureUnits);

  return (
    // <div className={classes.root}>
    <Paper className={classes.root}>
      <Typography varaint='h3' color='textSecondary'>
        {getWeekDay(new Date(weather.date))}
      </Typography>
      <div className={classes.imageWrapper}>
        <img src={getWeatherIcon(weather.icon || 1)} width='50%' alt='weather' />
      </div>
      <Typography varaint='h2' color='textSecondary'>
        {temperatureUnits === 'fahrenheit' ? weather.temperature.f : weather.temperature.c}
      </Typography>
    </Paper>

    // </div>
  );
};

WeatherCard.propTypes = {};

export default WeatherCard;
