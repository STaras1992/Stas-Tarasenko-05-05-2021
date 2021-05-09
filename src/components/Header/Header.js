import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Hidden, Typography, Toolbar, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
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
    alignItems: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    '& .MuiButton-root': {
      minWidth: '100px',
      margin: '0.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontFamily: 'Fredoka One, cursive',
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
  routerLinksWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  routerLink: {
    color: theme.palette.link.primary,
    marginRight: '1rem',
    textDecoration: 'none',
    textTransform: 'none',
  },
  activeLink: {
    color: theme.palette.link.secondary,
  },
}));

const Header = ({ isLoggedIn, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const currentTheme = useSelector((state) => state.app.theme);

  const handleChangeTheme = (e, value) => {
    dispatch(changeCurrentTheme(value));
  };

  return (
    <AppBar className={classes.root} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden smDown>
          <NavLink className={classes.logo} to='/'>
            {/* <img alt='Logo' src={logo} /> */}
            <Typography variant='h4' color='primary'>
              Herolo
            </Typography>
            <Typography variant='h4' color='secondary'>
              Weather
            </Typography>
          </NavLink>
        </Hidden>
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
          <div className={classes.routerLinksWrapper}>
            <NavLink className={clsx(classes.routerLink, { [classes.activeLink]: location.pathname === '/' })} to='/'>
              Main
            </NavLink>
            <NavLink
              className={clsx(classes.routerLink, { [classes.activeLink]: location.pathname === '/favorites' })}
              to='/favorites'
            >
              Favorites
            </NavLink>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default Header;
