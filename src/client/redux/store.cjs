import { USERS_FETCHED } from './constants.cjs';
import { configureStore } from 'react-redux';
import reducer from './reducer.cjs';

export default () => configureStore(reducer);