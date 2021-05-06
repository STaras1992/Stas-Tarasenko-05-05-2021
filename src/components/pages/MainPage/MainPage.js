import React, { useState, useEffect } from 'react';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import SearchBar from 'material-ui-search-bar';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import city1 from '../../../assets/city1.jpg';
import WeatherCard from '../../WeatherCard/WeatherCard';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'calc(72px + 2%)', //header height + some more margin
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
    padding: '0 1rem',
    [theme.breakpoints.up('sm')]: {
      padding: '0 15%',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 25%',
    },
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

  return (
    <div className={classes.root}>
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <div className={classes.searchContainer}>
            <SearchBar classes={{ root: classes.search, icon: classes.searchIcon, input: classes.searchInput }} />
          </div>
        </Grid>
        <Grid item container direction='column'>
          <Paper className={classes.mainContainer}>
            <Grid item justify='space-between' container>
              <Grid item>
                <div className={classes.cityDataWrapper}>
                  <div className={classes.cityImageWrapper}>
                    {/* <img src={city1} width='100%' height='100%' alt='city'></img> */}
                  </div>
                  <div className={classes.cityData}>
                    <Typography variant='h4'>City Name</Typography>
                    <Typography variant='h3'> 39.9 c</Typography>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Button variant='contained'>Add to favorites</Button>
              </Grid>
            </Grid>
            <Grid item justify='center'>
              <Typography variant='h1'>Clouds</Typography>
            </Grid>
            <Grid item spacing={5}>
              <div className={classes.cardsContainer}>
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
