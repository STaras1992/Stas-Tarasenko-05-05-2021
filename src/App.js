import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import FavoritesPage from './components/pages/FavoritesPage/FavoritesPage';
import { ThemeProvider } from '@material-ui/core';
import DarkTheme from './theme/DarkTheme';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={DarkTheme}>
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
