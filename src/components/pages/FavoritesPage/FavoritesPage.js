import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import FavoriteCard from '../../FavoriteCard/FavoriteCard';
import { updateLocation } from '../../../redux/action/locationAction';
import { updateAllFavoriteLocations } from '../../../redux/action/favoritesAction';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardsContainer: {
    margin: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      margin: '3rem 1rem',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    },
  },
  title: {
    fontWeight: 500,
    fontSize: '3rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5rem',
    },
  },
}));

const FavoritesPage = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedLocation = useSelector((state) => state.location.location);
  const favoriteLocations = useSelector((state) => state.favorite.favoriteLocations);
  const [isInitRender, setIsInitRender] = useState(true);
  const [cards, setCards] = useState([]);

  const handleFavoriteSelect = (location) => {
    dispatch(updateLocation(location));
  };

  const prepareCards = () => {
    setCards(
      favoriteLocations.map((favoriteLocation) => (
        <FavoriteCard
          key={favoriteLocation.location.key}
          locationData={favoriteLocation}
          handleFavoriteSelect={handleFavoriteSelect}
        />
      ))
    );
  };

  useEffect(() => {
    if (isInitRender) return setIsInitRender(false);
    history.push('/');
  }, [selectedLocation]);

  useEffect(() => {
    prepareCards();
  }, [favoriteLocations]);

  useEffect(() => {
    favoriteLocations.length > 0 && dispatch(updateAllFavoriteLocations(favoriteLocations));
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h1' color='primary'>
        Favorite locations
      </Typography>
      <div className={classes.cardsContainer}>{cards}</div>
    </div>
  );
};

FavoritesPage.propTypes = {};

export default FavoritesPage;
