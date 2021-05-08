import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import FavoriteCard from '../../FavoriteCard/FavoriteCard';
import PropTypes from 'prop-types';
import { addFavoriteLocation, removeFavoriteLocation } from '../../../redux/action/favoritesAction';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardsContainer: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
  },
}));

const FavoritesPage = () => {
  const classes = useStyles({});
  const favoriteLocations = useSelector((state) => state.favorite.favoriteLocations);
  const [cards, setCards] = useState([]);

  const prepareCards = () => {
    console.log(favoriteLocations);
    setCards(
      favoriteLocations.map((favoriteLocation) => (
        <FavoriteCard key={favoriteLocation.location.key} locationData={favoriteLocation} />
      ))
    );
  };

  useEffect(() => {
    prepareCards();
  }, [favoriteLocations]);

  useEffect(() => {
    prepareCards();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant='h1'>Favorite locations</Typography>
      <div className={classes.cardsContainer}>{cards}</div>
    </div>
  );
};

FavoritesPage.propTypes = {};

export default FavoritesPage;
