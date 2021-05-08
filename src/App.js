import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import FavoritesPage from './components/pages/FavoritesPage/FavoritesPage';
import { ThemeProvider } from '@material-ui/core';
import DarkTheme from './theme/DarkTheme';
import LightTheme from './theme/LightTheme';
import { loadFavoriteLocations } from './redux/action/favoritesAction';
import { loadTheme } from './redux/action/appAction';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.app.theme);

  useEffect(() => {
    dispatch(loadFavoriteLocations());
    dispatch(loadTheme());
  }, []);

  return (
    <div className={`App ${currentTheme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <ThemeProvider theme={currentTheme === 'light' ? LightTheme : DarkTheme}>
        <header>
          <Header />
        </header>
        <Switch>
          <Route exact path='/' render={() => <MainPage />} />
          <Route exact path='/favorites' render={() => <FavoritesPage />} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
