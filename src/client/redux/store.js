
import { configureStore } from 'react-redux';
import reducer from './reducer';

export default () => configureStore(reducer);