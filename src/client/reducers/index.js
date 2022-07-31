import { combineReducers } from 'redux';
import userReducer from '../reducers/user-reducer.js';

const reducer = combineReducers(userReducer);
export default reducer;