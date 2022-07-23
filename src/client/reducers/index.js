import { combineReducers } from 'redux';
import userReducer from '../reducers/user-reducer.js';

export default combineReducers({
  favouriteApp: userReducer
});