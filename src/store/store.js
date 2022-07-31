/* eslint-disable import/no-anonymous-default-export */
import { configureStore,applyMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from "../client/reducers";

const newReducer = combineReducers(reducer)


export default () => {
  const store = configureStore(newReducer,{}, applyMiddleware(thunk));
  
  return store;
};

