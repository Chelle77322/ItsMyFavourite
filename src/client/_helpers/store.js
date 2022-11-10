import { configureStore,combineReducers} from '@reduxjs/toolkit';
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {default as rootReducer} from '../_reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import { default as userSlice} from "../features/userSlice"

const loggerMiddleware = createLogger();


const root = combineReducers ({user:rootReducer})
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, root);



export const store = configureStore({
  reducer: persistedReducer,
  persistStore,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(loggerMiddleware, thunkMiddleware)
})

console.log(store);





