import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Button, Hidden, IconButton, Toolbar, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
  logo: {},
  icon: {
    color: '#fff',
    cursor: 'pointer',
  },
  divider: {
    margin: '15px',
    marginLeft: '25px',
    background: theme.palette.text.primary,
  },
}));

const Header = ({ isLoggedIn, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink className={classes.logo} to='/'>
          {/* <img alt='Logo' src={logo} /> */}
          Herolo Weather
        </RouterLink>
        {/* <Hidden smDown> */}
        <div className={classes.buttonsContainer}>
          <RouterLink to='/'>
            <Button variant='contained'>Main</Button>
          </RouterLink>
          <RouterLink to='/favorites'>
            <Button variant='contained'>Favorites</Button>
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
