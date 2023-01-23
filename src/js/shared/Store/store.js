import { configureStore} from '@reduxjs/toolkit';
import rootReducer from "../Reducers/index.js";
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {persistStore, persistReducer} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
//import { default as userSlice} from "../Features/userSlice.jsx"

const loggerMiddleware = createLogger();


const stored = configureStore({
  reducer: rootReducer,
 
})
const persistedReducer = persistReducer(persistConfig,stored);



export const store = configureStore({
  reducer: persistedReducer,
  persistStore,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(loggerMiddleware, thunkMiddleware)
})

console.log(store);

export default store;



