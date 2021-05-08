import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from './reducer/locationReducer';
import weatherReducer from './reducer/weatherReducer';
import favoriteReducer from './reducer/favoriteReducer';
import appReducer from './reducer/appReducer';

const reducers = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
  favorite: favoriteReducer,
  app: appReducer,
});

const Store = createStore(reducers, applyMiddleware(thunk));
window.store = Store;

export default Store;
