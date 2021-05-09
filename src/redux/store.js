import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from './reducer/locationReducer';
import weatherReducer from './reducer/weatherReducer';
import favoriteReducer from './reducer/favoriteReducer';
import appReducer from './reducer/appReducer';
import errorReducer from './reducer/errorReducer';

const reducers = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
  favorite: favoriteReducer,
  app: appReducer,
  error: errorReducer,
});

const Store = createStore(reducers, applyMiddleware(thunk));
window.store = Store;

export default Store;
