import React from 'react';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clouds from '../../assets/clouds.png';
import propTypes from 'prop-types';

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
  imageWrapper: {},
}));

const WeatherCard = () => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Paper className={classes.root}>
      <Typography varaint='h3' color='textSecondary'>
        Day
      </Typography>
      <div className={classes.imageWrapper}>
        <img src={clouds} width='50%' alt='weather' />
      </div>
      <Typography varaint='h2' color='textSecondary'>
        38C
      </Typography>
    </Paper>

    // </div>
  );
};

WeatherCard.propTypes = {};

export default WeatherCard;
