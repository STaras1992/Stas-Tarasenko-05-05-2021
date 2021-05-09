import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import SearchBar from '../../SearchBar/SearchBar';
import { makeStyles } from '@material-ui/core/styles';
import city1 from '../../../assets/city1.jpg';
import WeatherWidget from '../../WeatherWidget/WeatherWidget';
import { updateLocation } from '../../../redux/action/locationAction';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../../MuiAlert/MuiAlert';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'calc(72px)', //header height + some more margin
    transition: 'all 0.5s ease-in-out',
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
  },
  search: {
    background: '#393e46',
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
  const error = useSelector((state) => state.error.error);
  const [showError, setShowError] = useState(false);

  const onLocationChange = (location) => {
    dispatch(updateLocation(location));
  };

  const handleAlertClose = () => {
    setShowError(false);
  };

  useEffect(() => {
    if (error && !showError) setShowError(true);
  }, [error]);

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
      {showError && (
        <Snackbar open={showError} autoHideDuration={2000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity='error'>
            {error}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
