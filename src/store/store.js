/* eslint-disable import/no-anonymous-default-export */
import { configureStore,applyMiddleware, combineReducer} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from "../client/reducers";



export default () => {
  const store = configureStore(combineReducer(reducer), {}, applyMiddleware(thunk));
  
  return store;
};

