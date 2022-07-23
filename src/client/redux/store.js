import  USERS_FETCHED  from './constants';
import { configureStore } from 'react-redux';
import reducer from './reducer.js';

export default () => configureStore(reducer);