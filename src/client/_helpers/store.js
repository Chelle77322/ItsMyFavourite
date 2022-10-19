import { configureStore} from '@reduxjs/toolkit';
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { default as userSlice} from "../features/userSlice"

const loggerMiddleware = createLogger();
const root = rootReducer(userSlice.reducer);
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, root)

const store = () => configureStore(persistedReducer, {applyMiddleware: (thunkMiddleware)}
  );
const persistor = persistStore(store);

const [state, setState] = state = {}




export {store, persistor, state};
  

