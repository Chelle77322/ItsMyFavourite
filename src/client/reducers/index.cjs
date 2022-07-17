import { combineReducers } from 'redux';
import userReducer from '../reducers/user-reducer.cjs';

export default combineReducers({
  favouriteApp: userReducer
});