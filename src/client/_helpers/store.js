import { configureStore} from '@reduxjs/toolkit';
import { combineReducers} from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {default as rootReducer} from '../_reducers';

const loggerMiddleware = createLogger();
const initialState = {
  user: {
    id: "",
    password: "",
  },
 
}
const reducer = combineReducers(rootReducer,{initialState}
);

let state = store.getState(initialState);

const store = configureStore({
 reducer,
 applyMiddleware:{
  thunkMiddleware,
  loggerMiddleware,
  state
  
}
})

export default store;
  

