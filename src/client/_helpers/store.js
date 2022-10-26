import { configureStore, createSlice} from '@reduxjs/toolkit';
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { default as userSlice} from "../features/userSlice"

const loggerMiddleware = createLogger();
export const roots = rootReducer;
const root = createSlice ({
  userSlice,
  name: "store",
  initialState: {},
  reducers: {roots}
})
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, root);



export const store = configureStore({
  reducer: persistedReducer,
  root,
  roots,
  persistStore,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(loggerMiddleware, thunkMiddleware)
})

console.log(store);






  
