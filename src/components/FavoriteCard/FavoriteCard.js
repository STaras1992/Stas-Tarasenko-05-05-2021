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
    backgroundColor: theme.palette.background.light,
    width: '100%',
    // width: '15%',
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
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      maxWidth: '200px',
    },
  },
}));

const FavoriteCard = ({ locationData }) => {
  const classes = useStyles();
  const temperatureUnits = useSelector((state) => state.app.temperatureUnits);

  return (
    <Paper className={classes.root}>
      <Typography varaint='h3' color='textSecondary'>
        {locationData.location.name}
      </Typography>
      <div className={classes.imageWrapper}>
        <img src={getWeatherIcon(locationData.icon)} width='50%' alt='weather' />
      </div>
      <Typography varaint='h2' color='textSecondary'>
        {temperatureUnits === 'fahrenheit' ? locationData.temperature.f : locationData.temperature.c}
      </Typography>
      <Typography varaint='h2' color='textSecondary'>
        {locationData.weatherText}
      </Typography>
    </Paper>
  );
};

FavoriteCard.propTypes = {};

export default FavoriteCard;
