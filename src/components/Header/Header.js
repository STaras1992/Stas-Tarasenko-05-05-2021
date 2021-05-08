import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Button, Hidden, IconButton, Typography, Toolbar, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { changeCurrentTheme } from '../../redux/action/appAction';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 72,
    backgroundColor: theme.palette.background.header,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    display: 'flex',
    '& .MuiButton-root': {
      minWidth: '100px',
      margin: '0.5rem',
    },
  },
  logo: {
    textDecoration: 'none',
  },
  icon: {
    color: '#fff',
    cursor: 'pointer',
  },
  divider: {
    margin: '15px',
    marginLeft: '25px',
    background: theme.palette.text.primary,
  },
  toggleButtonsWrapper: {
    marginRight: '1rem',
    '& span': {
      color: theme.palette.text.primary,
    },
  },
  toggleButton: {
    '&.MuiToggleButton-root.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const Header = ({ isLoggedIn, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.app.theme);

  const handleChangeTheme = (e, value) => {
    dispatch(changeCurrentTheme(value));
  };

  return (
    <AppBar className={classes.root} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink className={classes.logo} to='/'>
          {/* <img alt='Logo' src={logo} /> */}
          <Typography variant='h3'>Herolo Weather</Typography>
        </RouterLink>
        {/* <Hidden smDown> */}
        <div className={classes.buttonsContainer}>
          <ToggleButtonGroup
            className={classes.toggleButtonsWrapper}
            value={currentTheme}
            size='small'
            exclusive
            onChange={handleChangeTheme}
            aria-label='theme'
          >
            <ToggleButton className={classes.toggleButton} value='light' aria-label='light-theme'>
              Light
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value='dark' aria-label='dark-theme'>
              Dark
            </ToggleButton>
          </ToggleButtonGroup>
          <RouterLink to='/'>
            <Button variant='text'>Main</Button>
          </RouterLink>
          <RouterLink to='/favorites'>
            <Button variant='text'>Favorites</Button>
          </RouterLink>
        </div>
        {/* </Hidden> */}
        {/* <Hidden mdUp>
          <IconButton color='secondary' onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden> */}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default Header;
