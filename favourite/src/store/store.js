/* eslint-disable import/no-anonymous-default-export */
import { configureStore,applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from "../client/reducers";



export default () => {
  const store = configureStore(reducers, {}, applyMiddleware(thunk));
  return store;
};